const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
                return;  // ensure the function exits after rejecting
            }
            bcrypt.hash(password, salt, (err, hash) => {  // Corrected this line
                if (err) {
                    reject(err);
                    return;  // ensure the function exits after rejecting
                }
                resolve(hash);
            });
        });
    });
};

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
};

module.exports = {
    hashPassword,
    comparePassword
}