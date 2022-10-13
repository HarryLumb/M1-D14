const button = document.getElementById("button");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 76) + 1;
  const ptag = document.getElementById("ptag");

  const numCells = document.querySelectorAll(".numCell");
  numCells[random - 1].classList.add("effect");
  ptag.innerText = "Number: " + random;
});

const fillArray = function(){
const arr =[]
for(let i = 0; i<76; i++){
   arr.push(i+1) 
}
return arr
}

const getRandArray = function (range) {
    const randomIndex = math.floor(Math.random() * range.length)

}