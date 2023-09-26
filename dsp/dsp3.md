# [Digital Signal Processing](dsp.md)

## Difference equations

In continous time, time (t) is part of the set of real numbers (**R**).
In discrete time, time (t) is part of the set of integers (**Z**).

Differential equations describe analog systems (using continous time), while **difference equations** describe digital systems (using discrete time). 

This difference equation represents a simple **FIR** system:

_y[n] = x[n] + x[n-8]_

*n* represents the index in this example. The index can be any positive or negative integer.
*y[n]* represents the output at index [0] (so right now).
x[n] represents the input at this moment (at index [0]).
x[n-8] represents a delay of eight samples. It is the input but at index [-8].

> Square brackets are used when representing index numbers in discrete time.

To describe an **IIR** system with a difference equation we have to use the output (y[n]) at both sides of the equation. As an example we can write our feedback system from the last chapter like this:

_y[n] = x[n-2] + (- 0.99*y[n])_

Using this notation it is possible to calculate the output in samples of a specific system.
