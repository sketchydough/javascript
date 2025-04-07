const length=12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatepw(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyw";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*~";

    let allowedChars="";
    let password="";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0){
        return '(password length must be atleast 1';

    }

    if(allowedChars.length ==0){
        return '(atleast 1 set of characters needs to be selected';

    }

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);

        password+=allowedChars[randomIndex];
    }
    return password;
}
console.log('Generate password: ${password}');