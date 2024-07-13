const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];


let passOut1El = document.getElementById('passOut1')
let passOut2El = document.getElementById('passOut2')


function selectSize(){
   var selectSizeEl = document.getElementById('selectSize-el').value
if(selectSizeEl != null){
    generatePassword(selectSizeEl)
}
}

function passwordByDefault(){
    passOut1El.textContent= ''
    passOut2El.textContent= ''
for(let i =0; i<15;i++){
    
passOut1El.textContent+= characters[Math.floor(Math.random()*characters.length)]
}
for(let i =0; i<15;i++){
    
    passOut2El.textContent+= characters[Math.floor(Math.random()*characters.length)]
    }
    
}


function generatePassword(selectSizeEl) {
   
    passOut1El.textContent= ''
    passOut2El.textContent= ''
for(let i =0; i<selectSizeEl;i++){
    
passOut1El.textContent+= characters[Math.floor(Math.random()*characters.length)]
}
for(let i =0; i<selectSizeEl;i++){
    
    passOut2El.textContent+= characters[Math.floor(Math.random()*characters.length)]
    }
    
}

function copyPass1(){
    
// Get the text field
var copyText = document.getElementById('passOut1').textContent
// select the tect field

// Copy the text inside the text field
navigator.clipboard.writeText(copyText);
//Alert the copued text
alert("Copied the Password: "+ copyText);
}

function copyPass2(){
    // Get the text field
var copyText2 = document.getElementById('passOut2').textContent
// select the tect field

// Copy the text inside the text field
navigator.clipboard.writeText(copyText2);
//Alert the copued text
alert("Copied the Password: "+ copyText2);
}