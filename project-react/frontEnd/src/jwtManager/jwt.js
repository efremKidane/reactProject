const jwt = require('jsonwebtoken');

const secret='top-secret';

class JwtManager{

        verify(token){
            const data=jwt.verify(token,secret);
            return data;
        }
}

module.exports = new JwtManager();