var digitalRoot = function (n) {
    var splitted = n.toString().split("").map(function (val) { return parseInt(val); });
    var reduced;
    while (splitted.length > 1) {
        reduced = splitted.reduce(function (acc, val) { return acc + val; }, 0);
        splitted = reduced.toString().split("").map(function (val) { return parseInt(val); });
    }
    reduced = splitted.reduce(function (acc, val) { return acc + val; }, 0);
    return reduced;
};
console.log(digitalRoot(493193));
