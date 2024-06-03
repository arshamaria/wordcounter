const word = document.querySelector(".words span");
const wordcount=function() {
    let words=document.getElementById('textcont').value;
    let a=words.replace(/\s+/," ").trim();
    let a1=a.split(" ");
    let number = a1.length;
    word.innerHTML = number;
};

let btn = document.getElementById("count");
btn.addEventListener("click", wordcount);
