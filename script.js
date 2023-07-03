const copyButton = document.getElementById('copyButton');
const getColor = () => {
   const randomNumber = Math.floor(Math.random() * 16777215);
   const randomCode = "#" + randomNumber.toString(16);
   document.body.style.backgroundColor = randomCode;
   document.getElementById("code").innerHTML = randomCode;
   navigator.clipboard.writeText(randomCode);
}
copyButton.addEventListener('click', () => {
   const hexCode = code.textContent.trim();
   const tempInput = document.createElement('input');
   document.body.appendChild(tempInput);
   tempInput.value = hexCode;
   tempInput.select();
   document.execCommand('copy');
   document.body.removeChild(tempInput);
   // Additional code to show a success message or perform other actions after the content is copied
   alert("Hex Code is copied.✔")
 });

// event call
document.getElementById("btn").addEventListener("click",getColor);

// initial call
getColor();
