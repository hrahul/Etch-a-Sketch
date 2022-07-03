console.log("in js")
const GridCont = document.querySelector('.grid');
let n =5;
let i = 0;

function createDiv(){
    const div = document.createElement('div');
    div.style.width = `100px`;
    div.style.height = `100px`;
    div.style.border = 'black';
    div.style.backgroundColor = 'yellow';
    return div;
}


while(i!==(n*n))
{
    GridCont.appendChild(createDiv());
    console.log("div created")
    i++;
}