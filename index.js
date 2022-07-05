createGrid(50);

function createGrid(size)
{
    const grid = document.querySelector('.grid');
     // logic for removing pre-exisiting divs 
    let squares = grid.querySelectorAll('div');
    squares.forEach(div => div.remove());
    // fr stands for fraction of size
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;

    let i = 0;
    while(i!==(size*size))
    {
        grid.appendChild(createDiv());
        console.log("div created");
        i++;
    }
}


//method for creating divs which we need to append to the grid cells
function createDiv(){
    const div = document.createElement('div');
    //added event listener to every div created inside the grid
    div.addEventListener("mouseover",e=>{
        e.target.style.backgroundColor = setColor();
    });
    div.style.backgroundColor = 'white';

    //for clearing the grid 
    let clear = document.querySelector(".clearBtn");
    clear.addEventListener("click",e=>{
    div.style.backgroundColor = 'white';
    })
    return div;
}

//method for fetching color value set in Color Picker
function setColor()
{
    return document.querySelector('.colorPicker').value
}


//method is triggered by slider 
function changeSize(size)
{
    let rangeValue = document.querySelector(".rangeVal");
    createGrid(size);
    rangeValue.innerHTML = `${size} * ${size} `;
}

