# saaspass-jwt-sdk
The SAASPASS Node JS SDK is a simple SDK that will help you to verify the SAASPASS signature of the JWT message.
And also it extracting the roles of the user from the payload of the verified JWTmessage.

<b>Dependencies:</b></br>
First of all, you need install the jsonwebtoken module with the following command in your project home folder:

$ npm install jsonwebtoken
</br></br>

<b>Files:</b></br>
There are two files in this SDK, the main one named 'saaspass-nodejs-sdk.js' is the SDK itself.
The second one 'sdk-unit-test.js' the Unit Test for testing the SDK
</br></br>

<b>The SAASPASS Node JS SDK (saaspass-nodejs-sdk.js):</b></br>

The file cotains the SAASPASS key that will be used for verifying the signature of the JWT message. 
This key will be provided to you by SAASPASS.

This file mainlay consistes of two main public(exported) methods that you can call globaly:

<b>1. verifyJWTtoken method:</b></br>
This method is used for verifying the JWT message. 
It will returns true if the signature is valid, otherwise it will returns false.

<b>2. getRoles method:</b></br>
This method is used for getting the roles of the user from the verified JWT payload. 
But it will return an empty string if the JWT is not valid or the roles is empty.
</br></br>

<b>Unit Test with sdk-unit-test.js:</b></br>
Actually the small simple code with its comment explain itself as follows:

//This is line for importing the SAASPASS Node JS SDK that will help you to verify the JWT and also extract the roles from the payload of it:
</br>
```
const SaaspassNodejsSDK = require('./saaspass-nodejs-sdk');
```
</br>

//An example signed JWT Message we get from the SAASPASS IAM:
</br>
```
const jwtTokenTest = "eyJra......";
```
</br>

//call the verifyJWTtoken method in order to verify the JWT. It will return either true or false:
```
console.log(SaaspassNodejsSDK.verifyJWTtoken(jwtTokenTest));
```
</br>

//call the getRoles method in order to return the roles of the user from
//verified JWT. But it will return empty string if the JWT is not valid
```
console.log(SaaspassNodejsSDK.getRoles(jwtTokenTest));
```
</br>


 

