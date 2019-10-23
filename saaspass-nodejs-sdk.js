//The SAASPASS Node JS SDK is a simple SDK that will help you to 
//verify the JWT message and also to extract the roles of the user
//from the payload of the verified JWTmessage

//This SDK require the Node JS: 'jsonwebtoken' Module
const JWT = require('jsonwebtoken');

//The SAASPASS key that will be used for verifying the signature of the JWT message
const saaspassKey = "-----BEGIN PUBLIC KEY-----\r\n"
    + "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgjBGOVW3/U46hClHSKVUzuIvw\r\n"
    + "VTurz3G7XYScdiOpSFzsm3PJnsSVuppfWLs8sid8ol/R0cWs6P7TiNmwMtP8nRc1\r\n"
    + "5ZCQn7tSX2DVq5+EGKm8x3zpL+zMOdLa0+yneKOAcBnwDMfrPAVEYE1+bbi3xQ9r\r\n" 
    + "OrQ0pLwaARQeLPYntwIDAQAB\r\n"
    + "-----END PUBLIC KEY-----";


var payload = {roles: ""};
var verifiedJWT = false;

//The verifyJWTtoken method is used for verifying the JWT message. 
//It will returns true if the signature is valid, otherwise it will returns false
function verifyJWTtoken(jwtToken) {
    try {
        payload = JWT.verify(jwtToken, saaspassKey, { algorithm: 'RS256' });
        verifiedJWT = true;
        return verifiedJWT;
    } catch (error) {
        console.log('error:', error);
        payload = { roles: "" };
        verifiedJWT = false;
        return verifiedJWT;
    }
}

module.exports.verifyJWTtoken = verifyJWTtoken;


//The getRoles method is used for getting the roles of the user from
//the verified JWT payload. 
//But it will return an empty string if the JWT is not valid or the roles is empty
function getRoles(jwtToken) {
    try {
        if (!verifiedJWT) 
            verifyJWTtoken(jwtToken);
        if (verifiedJWT) {
            var roles = payload.roles;
            verifiedJWT = true;
            return roles;
        }
        return true;
    } catch (error) {
        verifiedJWT = false;
        payload = { roles: "" };
        return "";
    }
}

module.exports.getRoles = getRoles;

