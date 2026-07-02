let decryptBtn = document.getElementById("decrypt-btn");
let eInput = document.getElementById("encryptInput-1");
let pInput = document.getElementById("plainInput-1");
let inputs = [eInput, pInput];
let copyBtn = document.getElementById("copyToClipBoard");

function rot13(eInput) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultStr = "";

  for (let i = 0; i < eInput.length; i++) {
    let index = alpha.indexOf(eInput[i]);
    if (index === -1) {
      resultStr += eInput[i];
    } else {
      let secIndex = (index + 13) % 26;
      resultStr += alpha[secIndex];
    }
  }
  return resultStr;
}

//console.log(rot13("SERR PBQR PNZC"));

decryptBtn.addEventListener("click", function () {
  let encryptedText = eInput.value.toUpperCase();
  let decryptedText = rot13(encryptedText);
  pInput.value = decryptedText;
});

function copyText() {
  pInput.select();
  pInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  alert("Copied to clipboard: " + pInput.value);
}

copyBtn.addEventListener("click", copyText);
