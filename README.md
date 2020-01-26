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
- Weights and biases for the two hidden layer activation functions and the final activation function.
- A list comprising of each input and its path through the neural network

## Sample outputs:
```
> node index.js
found a result after 242 tries  
23 -27 -18 3 -26 24  
(0,0) => sig(0*23 + 0*23 + -27) sig(0*-18 + 0*-18 + 3) => sig(1*-26 + 0*-26 + 24) => 0  
(0,1) => sig(0*23 + 1*23 + -27) sig(0*-18 + 1*-18 + 3) => sig(1*-26 + 0*-26 + 24) => 1  
(1,0) => sig(1*23 + 0*23 + -27) sig(1*-18 + 0*-18 + 3) => sig(1*-26 + 0*-26 + 24) => 1  
(1,1) => sig(1*23 + 1*23 + -27) sig(1*-18 + 1*-18 + 3) => sig(1*-26 + 0*-26 + 24) => 0 

> node index.js
found a result after 845 tries
13 -16 -21 0 -8 0
(0,0) => sig(0*13 + 0*13 + -16) sig(0*-21 + 0*-21 + 0) => sig(1*-8 + 0*-8 + 0) => 0
(0,1) => sig(0*13 + 1*13 + -16) sig(0*-21 + 1*-21 + 0) => sig(1*-8 + 0*-8 + 0) => 1
(1,0) => sig(1*13 + 0*13 + -16) sig(1*-21 + 0*-21 + 0) => sig(1*-8 + 0*-8 + 0) => 1
(1,1) => sig(1*13 + 1*13 + -16) sig(1*-21 + 1*-21 + 0) => sig(1*-8 + 0*-8 + 0) => 0
```

