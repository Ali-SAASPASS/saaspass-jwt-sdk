//Import the SAASPASS Node JS SDK that will help you to verify the JWT 
// and also extract the roles from the payload of it.
const SaaspassNodejsSDK = require('./saaspass-nodejs-sdk');

//An example signed JWT Message we get from the SAASPASS IAM
const jwtTokenTest = "eyJraWQiOiJsUHJfUmdUeFY5QlhWY1JrOTA3Y0F3MmVST3pkUGMzWEVOU2ZicDk5bzBvIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ1c2VybmFtZSIsImF1ZCI6ImFwcGtleSIsInNhYXNwYXNzX2lkIjoiMTIzMTIzIiwicm9sZXMiOiJyb2xlbGlzdCIsImlzcyI6IkluZGlIb21lIiwiZXhwIjoxNTcxOTUwNzUwLCJpYXQiOjE1NzE4NjQzNTAsImp0aSI6IjE5N2M1ZjdhLTY4ZTctNGZmMS1hMmNjLTQ5ZmQwOWU5NTcyMCJ9.eShEJbjiYZV5BR1KleyHJajiPJJx7yeqHDR38PEr10iQrk3wC9FPzNabNtdwMhsEuOR1U2xc33s4i4Wvu2rMn_oOCbHK-ZpsUAaNHxs_O0EvQZgd9m2Uxey3c0DnRj1BcS_ONO5QxjBqXF9VXhO4DHHdx-lZxN7CfDplBQm6es0";

//call the verifyJWTtoken method in order to verify the JWT. It will return either true or false
console.log(SaaspassNodejsSDK.verifyJWTtoken(jwtTokenTest));

//call the getRoles method in order to return the roles of the user from
//verified JWT. But it will return empty string if the JWT is not valid
console.log(SaaspassNodejsSDK.getRoles(jwtTokenTest));
