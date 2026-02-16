/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 */
function rgb(r: number, g: number, b: number): string {
    const clamp = (num: number) => Math.max(0, Math.min(255, num));
    const toHex = (num: number) => clamp(num).toString(16).toUpperCase().padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
console.log(rgb(148, 0, 211));