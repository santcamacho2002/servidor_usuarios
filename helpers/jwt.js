const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                // No se pudo crear el token
                reject('No se pudo generar el token');
            } else {
                // Token generado
                resolve(token);
            }
        });
    });
};

const comprobarJWT = (token = '') => {
    try {

        const {uid} = jwt.verify(token, process.env.JWT_KEY);

        return [true,uid];
        
    } catch (error) {
        return[false, null];
    }
};

module.exports = {
    generarJWT,
    comprobarJWT
};
