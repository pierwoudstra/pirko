let audio_context;
let audio_stream;
let del_time = 0.00909;
const slider = document.getElementById('delay_time');
let delay;

function make_softclipper() {
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);

    for (let i = 0; i < n_samples; i++) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = Math.tanh(x);
    }

    return curve;
}

slider.oninput = function () {
    del_time = 0.00909 + 0.1*(this.value * 0.00909);
    if (delay) {
        delay.delayTime.setValueAtTime(del_time, audio_context.currentTime);
    }
    console.log(del_time);
}

async function start_mic() {
    if (audio_context && audio_context.state === 'running') {
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audio_stream = stream;
        const context = new AudioContext();
        audio_context = context;

        // geen idee hoe dit werkte
        let mic = new MediaStreamAudioSourceNode(context, { mediaStream: stream, });
        let feedback = new GainNode(context, { gain: 0.65 });
        let filter = new BiquadFilterNode(context, { type: "lowpass", frequency: 1020 })
        let final_filter = new BiquadFilterNode(context, { type: "lowpass", frequency: 880 })
        delay = new DelayNode(context, { delayTime: del_time });
        let clipper = new WaveShaperNode(context, { amount: 1 });
        let comp = new DynamicsCompressorNode(context);
        clipper.curve = make_softclipper();

        // automatic gain control
        const analyser = new AnalyserNode(context);
        const agc_gain = new GainNode(context, { gain: 1.0 });

        mic.connect(analyser);
        analyser.connect(agc_gain);
        agc_gain.connect(delay);
        delay.connect(filter);
        filter.connect(comp);
        comp.connect(feedback);
        feedback.connect(delay);

        delay.connect(final_filter);
        final_filter.connect(clipper);
        clipper.connect(context.destination);

        console.log("sukses :)");
        status_text.textContent = `running ... \r\n> click to stop <`;

    } catch (error) {
        console.log("went wrong...", error);
        status_text.textContent = `...hmm doesn't seem to work on this browser`;
    }
}

async function stop_mic() {
    if (audio_context) {
        await audio_context.close();
        audio_context = null;
    }
    if (audio_stream) {
        audio_stream.getTracks().forEach(track => track.stop());
        audio_stream = null;
    }
    status_text.textContent = 'stopped ...\r\n(click to start again)';
    console.log("stop mic called");
}

async function toggle_mic() {
    if (audio_context && audio_context.state === 'running') {
        await stop_mic();
    } else {
        await start_mic();
    }
}

const start_button = document.getElementById('start');
// const stop_button = document.getElementById('stop');
const status_text = document.getElementById('status');

start_button.addEventListener("click", toggle_mic);
// stop_button.addEventListener("click", stop_mic);