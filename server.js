const JWT = require('jsonwebtoken');
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096
})
console.log({privateKey, publicKey});
const token = JWT.sign({userId: 1, roles: ['admin']}, privateKey, {
    algorithm:'RS256',
    expiresIn: '2 days'
} )

JWT.verify(token, publicKey, (err, decode) => {
    console.log('decode::', decode);
})