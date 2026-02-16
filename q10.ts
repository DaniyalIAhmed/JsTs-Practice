const digitalRoot = (n: number): number => {
    let splitted: number[] = n.toString().split("").map((val) => parseInt(val));
    let reduced: number;
    while (splitted.length > 1) {
        reduced = splitted.reduce((acc, val) => acc + val, 0);
        splitted = reduced.toString().split("").map((val) => parseInt(val));
    }
    reduced = splitted.reduce((acc, val) => acc + val, 0);
    return reduced;
};
console.log(digitalRoot(493193));