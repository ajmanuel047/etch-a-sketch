const container = document.createElement('div');
container.id = 'container';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '600px';
container.style.height = '450px';
container.style.margin = 'auto';
const multipleColor = document.querySelector('.multipleColor')
const clearButton = document.querySelector('.btn')
const board = document.querySelector('.board')
const singleColor = document.querySelector('.singleColor')
const userOption = document.querySelector('.userOption')
let arr = ["White", "Cyan", "DarkGray", "LightGray", "Indigo", "SkyBlue", "LightBlue", "LimeGreen", "OliveDrab", "DarkCyan", "SteelBlue"]
const btns = document.querySelectorAll('.btns')


let colorNames = ["Black", "Gray", "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Teal", "Olive", "Navy", "Maroon", "Fuchsia", "Lime", "Aqua", "Silver", "Brown", "Beige"]
document.body.appendChild(container)

let input = 10;
function inputted(){
   let userInput = Number(window.prompt('Enter a single value for number of squares per side', 'Number must be within 10 to 100'))
   if(userInput >= 10 && userInput <= 100){
    input = userInput
   } else {
    alert('Number must be between 10 to 100')
   }
}

userOption.addEventListener('click', function(){
    inputted()
    resetBoard()    
  })

function getRandomBoardColor(){

   let random =  Math.floor(Math.random() * arr.length)
   return arr[random]


}  

 function getRandomColorNames(data){
    let random = Math.floor(Math.random() * data.length)
    return data[random]             
    
 }
 getRandomColorNames(colorNames)

function resetBoard(){
container.innerHTML = ''
for(let i = 0; i < input; i++){
    let div = document.createElement('div');
    div.className = 'box';
    div.style.height = '300px';
    div.style.display = 'flex';
    div.style.borderWidth = '0.5px';
    div.style.borderStyle = 'solid'
    
    container.appendChild(div);

    
for(let j = 0; j < input; j++){
    let div2 = document.createElement('div');
    
    div2.style.width = '300px';
    div2.style.borderWidth = '0.5px';
    div2.style.borderStyle = 'solid'
    div2.style.marginBottom = '-1px'
    div2.style.marginTop = '-1px'
    div2.style.marginRight = '-1px'
   
  if(j == input - 1){
    div2.style.borderRight = '0px';   
  }

  if(j == 0){
    div2.style.borderLeft = '0px';
  }
    function onMouseOverSingleColor(){
        div2.style.backgroundColor = 'orange';
    }

    function onMouseOverMultipleColor(){
        div2.style.backgroundColor = getRandomColorNames(colorNames);
    }
 
    multipleColor.addEventListener('click', function(){
        div2.addEventListener('mouseover', onMouseOverMultipleColor);
        div2.removeEventListener('mouseover', onMouseOverSingleColor);

    })

    board.addEventListener('click', function(){
        container.style.backgroundColor =  getRandomBoardColor(arr);
    })

    singleColor.addEventListener('click', function(){
        div2.addEventListener('mouseover', onMouseOverSingleColor);
        div2.removeEventListener('mouseover', onMouseOverMultipleColor);

    })

    
    clearButton.addEventListener('click', function(){
        div2.style.backgroundColor = '';
        container.style.backgroundColor = '';
        div2.removeEventListener('mouseover', onMouseOverSingleColor);
        div2.removeEventListener('mouseover', onMouseOverMultipleColor);
    })
    
    div.appendChild(div2);
}

    
}



}
resetBoard()

