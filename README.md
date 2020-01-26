# neural-xor

## Multi-Layer Neural Networks with Sigmoid Function


This script is inspired by this [towardsdatascience](https://towardsdatascience.com/multi-layer-neural-networks-with-sigmoid-function-deep-learning-for-rookies-2-bf464f09eb7f) article

## Solving XOR using hidden layer
Uses a simple neural network with no intelligent back propagation logic. If the correct classification for each input 
is not identified, all weights and biases are changed at random.

To run the script, clone the repo
```
git clone git@github.com:shanenolanwit/neural-xor.git
```
And run the following command
```
npm run start
```

The output gives us the following : 
- The number of guesses of required to get the weights and biases correct (There are many correct solutions)
- Weights and biases for the two hidden layer activation functions (X,Y) and the final activation function (Z).
- A list comprising of each input and its path through the neural network

## Sample outputs:
```
> node index.js
found a result after 572 tries
Weight X: -26 Bias X: 23 Weight Y: 22 Bias Y: -27 Weight Z: -22 Bias Z: 4
(0,0) => sig(0*-26 + 0*-26 + 23) sig(0*22 + 0*22 + -27) => sig(0*-22 + 1*-22 + 4) => 0
(0,1) => sig(0*-26 + 1*-26 + 23) sig(0*22 + 1*22 + -27) => sig(0*-22 + 1*-22 + 4) => 1
(1,0) => sig(1*-26 + 0*-26 + 23) sig(1*22 + 0*22 + -27) => sig(0*-22 + 1*-22 + 4) => 1
(1,1) => sig(1*-26 + 1*-26 + 23) sig(1*22 + 1*22 + -27) => sig(0*-22 + 1*-22 + 4) => 0

> node index.js
found a result after 2 tries
Weight X: 13 Bias X: -22 Weight Y: -17 Bias Y: 7 Weight Z: -18 Bias Z: 10
(0,0) => sig(0*13 + 0*13 + -22) sig(0*-17 + 0*-17 + 7) => sig(1*-18 + 0*-18 + 10) => 0
(0,1) => sig(0*13 + 1*13 + -22) sig(0*-17 + 1*-17 + 7) => sig(1*-18 + 0*-18 + 10) => 1
(1,0) => sig(1*13 + 0*13 + -22) sig(1*-17 + 0*-17 + 7) => sig(1*-18 + 0*-18 + 10) => 1
(1,1) => sig(1*13 + 1*13 + -22) sig(1*-17 + 1*-17 + 7) => sig(1*-18 + 0*-18 + 10) => 0


> node index.js
found a result after 338 tries
Weight X: -23 Bias X: 28 Weight Y: 14 Bias Y: -12 Weight Z: 16 Bias Z: -17
(0,0) => sig(0*-23 + 0*-23 + 28) sig(0*14 + 0*14 + -12) => sig(0*16 + 1*16 + -17) => 0
(0,1) => sig(0*-23 + 1*-23 + 28) sig(0*14 + 1*14 + -12) => sig(0*16 + 1*16 + -17) => 1
(1,0) => sig(1*-23 + 0*-23 + 28) sig(1*14 + 0*14 + -12) => sig(0*16 + 1*16 + -17) => 1
(1,1) => sig(1*-23 + 1*-23 + 28) sig(1*14 + 1*14 + -12) => sig(0*16 + 1*16 + -17) => 0
```

