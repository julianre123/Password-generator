const resultEl = document.querySelector('.result');
const copy = document.querySelector('.copy');
const pwLenght = document.querySelector('.password-length');
const upperCase = document.querySelector('#uppercase')
const lowerCase = document.querySelector('#lowercase')
const numberEl = document.querySelector('#numbers')
const symbolEl = document.querySelector('#symbols');
const generatePw = document.querySelector('.generate-password');



const getRandom = {
    lower : getLower,
    upper : getUpper,
    number : getNumber,
    symbol : getSymbol
}

copy.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if(!password){
        return 
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove()
    alert('Password copied to clipboard')
})

generatePw.addEventListener('click',()=>{
    const length = pwLenght.value;
    const hasUpper = upperCase.checked;
    const hasLower = lowerCase.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(hasUpper,hasLower,
        hasNumber,hasSymbol,length);
})


function generatePassword(upper,lower,number,symbol,length){
    let result = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
    .filter(item => Object.values(item)[0])
    console.log(typesArr);
    if(typesCount == 0){
        return '';
    }

    for(let i=0;i < length; i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            result += getRandom[funcName]();
        })
    }
const finalPassword = result.slice(0,length);
return finalPassword;
}


function getLower(){
    return String.fromCharCode
    (Math.floor(Math.random() * 26) + 97)
    
}
function getUpper(){
    return String.fromCharCode
    (Math.floor(Math.random() * 26) + 65)
    
}
function getNumber(){
    return String.fromCharCode
    (Math.floor(Math.random() * 10) + 48)
    
}
function getSymbol(){
    const symbol = '!@#$%&/()=[]{}<>,.'
    return symbol[Math.floor(Math.random() * symbol.length)]
    
}


