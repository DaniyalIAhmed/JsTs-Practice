const perimeter = (n: number): number => {
    if (n < 2) return -1;

    let a = 1;
    let b = 1;

    for (let i = 0; i < n + 1; i++) {
        const temp = a;
        a = b;
        b = temp + b;
    }

    return 4 * (b - 1);
}
console.log(perimeter(5));