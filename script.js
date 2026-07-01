let decryptBtn = document.getElementById("decrypt-btn");
let eInput = document.getElementById("encryptInput-1");
let pInput = document.getElementById("plainInput-1");
let inputs = [eInput, pInput];
let copyBtn = document.getElementById("copyToClipBoard");

function rot13(str) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    let index = alpha.indexOf(str[i]);
    if (index === -1) {
      resultStr += str[i];
    } else {
      let secIndex = (index + 13) % 26;
      resultStr += alpha[secIndex];
    }
  }
  return resultStr;
}

//console.log(rot13("SERR PBQR PNZC"));
