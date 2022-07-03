console.log("in js")
let size = 10
const grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
let n =5;
let i = 0;

function createDiv(){
    const div = document.createElement('div');
    div.style.backgroundColor = 'yellow';
    return div;
}


while(i!==(size*size))
{
    grid.appendChild(createDiv());
    console.log("div created")
    i++;
}