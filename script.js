const getColor = () => {
   const randomNumber = Math.floor(Math.random() * 16777215);
   const randomCode = "#" + randomNumber.toString(16);
   document.body.style.backgroundColor = randomCode;
   document.getElementById("code").innerHTML = randomCode;
   navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener("click",getColor);

// initial call
getColor();