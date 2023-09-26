# [Digital Signal Processing](dsp.md)

## Comb filters

There are two types of comb filters:

    comb filters with positive feed and

    comb filters with negative feed

Comb filters with **+ feed** produce all of the harmonics, while comb filters with **- feed** only produce odd harmonics that sound an octave lower.

This is the difference between a pipe with a closed and open end, a pipe with a closed end will sound an octave lower. This is used in church organs to get lower octaves without making the pipes too long.

To make a comb filter, all you need is a delay.

For a delay of 1 millisecond length the frequency 1000 Hz and it's multiples will be amplified. 0 Hz will also always be amplified, it is important to remember that this is not the root note off which the overtones are based.

The simple formula to determine what root frequency will be amplified by a specific delay is:

*frequency(kHz) = 1/delay(ms)*

If there is a negative feedback coefficient this root frequency turns out of phase, when this happens the root frequency becomes an octave lower and all the odd harmonics become amplified.

An example of such a system is this:

```
             ---------------------
input --+-->| 2 millisecond delay |-->--- output
        ^    ---------------------   |
        |                            |
        * <--------------------------<
        ^
        |
      -0.99
```

In this example you would initially put the delay time in the formula:

*1/2ms = 0.5kHz = 500Hz*

and you would get 500Hz as a result. Assuming this is the root frequency, the multiples of this frequency would result in the harmonic overtones, namely:

                        1 = 500 Hz

                        2 = 1000 Hz

                        3 = 1500 Hz

                        4 = 2000 Hz

                            etc..

But note the feedback coefficient which is negative. Because the feedback coefficient is negative the root frequency goes out of phase. Because of this the root frequency becomes an octave lower and only the even overtones are amplified, namely:
                        1 = 250 Hz
                        
                        2 = 750 Hz
                        
                        3 = 1250 Hz
                        
                        4 = 1750 Hz
                        
                            etc...
                            
The more feedback is applied to a signal the sharper the comb filter gets and the better a tone is heard.

In DSP time is usually measured in samples, not in milliseconds. The amount of samples in a millisecond depends on the sample rate used. The simple formula to convert milliseconds to samples is:

_milliseconds * sample rate (in kHz)_

So a two millisecond delay becomes:

_2 * 44.1 = 88.2 samples_
                            
## next -> [Difference equations](dsp3.md)
