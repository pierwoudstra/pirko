# [Digital Signal Processing](dsp.md)

## Types of systems

Digital systems make use of "discrete time", while analog systems make use of "continuous time".

Discrete time:

> "Discrete time regards the values ​​of a variable as occurring at discrete discrete "points" or as unchanged throughout each non-zero region of equivalent time (a "duration"). That is, time is considered as a discrete variable. Non-time variables therefore jump from one value to another as time moves from one period to the next. This time view corresponds to a digital clock that shows a fixed reading of 10:37 for a while, then jumps to a new fixed reading of 10:38. In this framework, each variable of interest is measured once."

Continuous time:

> In contrast, in continuous time, variables are assumed to have specific values ​​for infinitely short periods of time. Between any two of her points in time there are countless other points in time. The variable "time" ranges over the entire real number line or, depending on the context, over a portion of the real number line, such as a non-negative real number. Therefore, time is considered a continuous variable.

More on the subject [here](https://academic-accelerator.com/encyclopedia/discrete-time-and-continuous-time).

A system either has a:

    finite impulse response (FIR), or an

    infinite impulse response (IIR).

A **finite impulse response** occurs in a system that only processes information in a forward direction, whereas a system with an **infinite impulse response** requires a feedback loop to operate.

In theory, an IIR system will pass a signal indefinitely, gradually diminishing in amplitude. However, in digital systems, this infinitely small value is ultimately rounded down to zero due to the digital limitations in precision, a rounding error essentially.

## next -> [Comb filters](dsp2.md)
