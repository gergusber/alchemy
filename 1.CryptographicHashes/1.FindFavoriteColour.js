const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
function findColor(hash) {
    let response;
    COLORS.map((c) => {
        const temp = sha256(utf8ToBytes(c));
        if (toHex(hash) === toHex(temp)) {
            response = c;
        }
    });
    return response;
}
 

module.exports = findColor;