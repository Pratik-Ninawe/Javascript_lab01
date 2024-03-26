console.log(2^4);


// When you see `^` in JavaScript, it doesn't mean "to the power of" like in mathematics. Instead, it's a special kind of symbol called "bitwise XOR." It compares the binary (base-2) digits of two numbers and gives a result based on whether each pair of digits is the same or different.
// In the case of `2 ^ 4`, we compare the binary representations of `2` and `4`, which are `10` and `100`, respectively. Then, we compare each digit:

// 2 in binary is 10.
// 4 in binary is 100.
// When we perform a bitwise XOR operation (^),for each bit the output is 1 if the corresponding bits of the two operands are different, and 0 if they are the same.
// So, when we perform 2 ^ 4, you get 110 in binary, which is 6 in decimal.