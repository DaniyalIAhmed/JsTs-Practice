function checkDashesAndUnderscores(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            let first = str.slice(0, i);
            let second = str.slice(i);
            second = second[1].toUpperCase() + second.slice(2);
            str = [...first, ...second].join('');
            console.log(str.length);
        }
    }
    console.log(str);
}

checkDashesAndUnderscores('baqar_daniyal_naqvi');