for (let i = 1; i <= 10; i++) {
    let equation = `3*${i}=`;
    let sum = 0;
    for (let j = 1; j <= i; j++) {
        if (j > 1) {
            equation += '+';
        }
        equation += '3';
        sum += 3;
    }
    equation += `=${sum}`;
    console.log(equation);
}
