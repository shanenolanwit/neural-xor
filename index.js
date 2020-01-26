/**
 * Takes an numerical input i
 * Returns 0 if i is a negative number
 * Returns 1 is i is a positive number
 */
const sigmoid = ( i ) => {
    return ( i < 0 ) ? 0 : 1;
}

/**
 * Math random produces a number between 0 and 1
 * This is multiplied by 30 to give us a number between 0 and 30
 * Math floor rounds this down to the nearest integer
 * Number is then randomly returned as negative or positive
 */
const randomNumber = () => {
    const n = Math.floor(Math.random() * 30);
    return randomBoolean() ? n*-1 : n;
}

/**
 * Math random produces a number between 0 and 1
 * Return 0 if this number is less than 0.5
 * Otherwise return 1
 */
const randomBoolean = () => {
    return Math.random() >= 0.5;
}

/**
 * Compares to arrays, returns true if they are equal
 * Otherwise returns false
 * @param {*} a1 
 * @param {*} a2 
 */
const arraysEqual = (a1, a2) => {
    return a1.length === a2.length 
    && a1.every((e, i) => e === a2[i])
}


let count = 0;
let keepGoing = true;
// [(0,0),(0,1),(1,0),(1,1)]
const inputs = [ {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 1, y: 1} ]
while(count< 1000 && keepGoing){
    const weightX = randomNumber();
    const weightY = randomNumber();

    const biasX = randomNumber();
    const biasY = randomNumber();

    const weightZ = randomNumber();
    const biasZ = randomNumber();

    let sig1;
    let sig2
    // map each input to the result of it passing through the neural network (0 or 1)
    const res = inputs.map( input => {
        const { x, y } = input;
        // initial inputs passed to hidden layer activation functions
        const input1 = x*weightX + y*weightX + biasX;
        const input2 = x*weightY + y*weightY + biasY;
        sig1 = sigmoid(input1)
        sig2 = sigmoid(input2)
        // takes the results from the above and passes it through the final activation function
        const input3 = sig1*weightZ + sig2*weightZ + biasZ;
        const sig3 = sigmoid(input3);
        // returns a 0 or a 1 representing the active status
        return sig3;
    });

    // Our inputs into the neural network should result in the following result
    // (0,0) => 0
    // (0,1) => 1
    // (1,0) => 1
    // (1,1) => 0
    const xor = [ 0, 1, 1, 0];
    if(arraysEqual(xor, res)){
        console.log(`found a result after ${count} tries`)
        console.log(`Weight X: ${weightX} Bias X: ${biasX} Weight Y: ${weightY} Bias Y: ${biasY} Weight Z: ${weightZ} Bias Z: ${biasZ}`);
        console.log(`(0,0) => sig(0*${weightX} + 0*${weightX} + ${biasX}) sig(0*${weightY} + 0*${weightY} + ${biasY}) => sig(${sig1}*${weightZ} + ${sig2}*${weightZ} + ${biasZ}) => 0`);
        console.log(`(0,1) => sig(0*${weightX} + 1*${weightX} + ${biasX}) sig(0*${weightY} + 1*${weightY} + ${biasY}) => sig(${sig1}*${weightZ} + ${sig2}*${weightZ} + ${biasZ}) => 1`);
        console.log(`(1,0) => sig(1*${weightX} + 0*${weightX} + ${biasX}) sig(1*${weightY} + 0*${weightY} + ${biasY}) => sig(${sig1}*${weightZ} + ${sig2}*${weightZ} + ${biasZ}) => 1`);
        console.log(`(1,1) => sig(1*${weightX} + 1*${weightX} + ${biasX}) sig(1*${weightY} + 1*${weightY} + ${biasY}) => sig(${sig1}*${weightZ} + ${sig2}*${weightZ} + ${biasZ}) => 0`);
        keepGoing = false;
    }
    
    count = count + 1;

}
