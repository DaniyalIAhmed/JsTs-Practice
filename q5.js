
function isValidIP(str) {
    const splittedArray = str.split(".");
    let isValid = true;
    if (splittedArray.length !== 4) isValid = false;
    splittedArray.forEach((num, index) => {
        const intNum = parseInt(num);
        if (!(intNum >= 0 && intNum <= 255)) {
            isValid = false;
        }
    })
    return () => console.log(`IPv4 address ${isValid}!`);
}


isValidIP("1.1.1_ad")();