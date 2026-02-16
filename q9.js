/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 */
function rgb(r, g, b) {
    var clamp = function (num) { return Math.max(0, Math.min(255, num)); };
    var toHex = function (num) { return clamp(num).toString(16).toUpperCase().padStart(2, "0"); };
    return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
}
console.log(rgb(148, 0, 211));
