const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B", "C","D", "E", "F", "G", "H", "I"];
const btn = document.getElementById('btn');
const color = document.document.querySelector('.color');

const colors = ["green", "yellow", "red"];
btn.addEventListener('click', function() {
let hexColor = '#';
for(let i= 0;i<9; i++) {
  hexColor += hex[getrandomnumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor; 
});

function getrandomnumber    (){
    return Math.floor(Math.random()* hex.length);
}