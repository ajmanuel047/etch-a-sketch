const container = document.createElement('div');
container.id = 'container';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '600px';
container.style.height = '500px';
container.style.margin = 'auto';
const multipleColor = document.querySelector('.multipleColor')
const clearButton = document.querySelector('.btn')
const board = document.querySelector('.board')
const singleColor = document.querySelector('.singleColor')
const userOption = document.querySelector('.userOption')
let arr = ["White", "Cyan", "DarkGray", "LightGray", "Indigo", "SkyBlue", "LightBlue", "LimeGreen", "OliveDrab", "DarkCyan", "SteelBlue"]

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
   let randomBoardColor = ''
   for(let i = 0; i < arr.length; i++){
   let random =  Math.floor(Math.random() * arr.length)
       randomBoardColor = arr[random]
}            
   return randomBoardColor
}  

 getRandomBoardColor(arr)

 function getRandomColorNames(data){
    let randomData = ''
    for(let i = 0; i < data.length; i++){
        let random = Math.floor(Math.random() * data.length)
        
            randomData =  data[random]             
    }
    
     return randomData
 }
 getRandomColorNames(colorNames)

const box = document.querySelector('.box')

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
    div2.style.borderRight = '0px'
  }

  if(j == 0){
    div2.style.borderLeft = '0px'
  }
    function onMouseOverSingleColor(){
        div2.style.backgroundColor = 'orange'
    }

    function onMouseOverMultipleColor(){
        div2.style.backgroundColor = getRandomColorNames(colorNames) 
    }
 
    multipleColor.addEventListener('click', function(){
        div2.addEventListener('mouseover', onMouseOverMultipleColor)
     
    })

    board.addEventListener('click', function(){
        container.style.backgroundColor =  getRandomBoardColor(arr)
    })

    singleColor.addEventListener('click', function(){
        div2.addEventListener('mouseover', onMouseOverSingleColor)
    })

    
    clearButton.addEventListener('click', function(){
        div2.style.backgroundColor = ''
        container.style.backgroundColor = ''
        div2.removeEventListener('mouseover', onMouseOverSingleColor)
        div2.removeEventListener('mouseover', onMouseOverMultipleColor)
    })
    
    div.appendChild(div2);
}

    
}



}
resetBoard()

/*
where i had challenges
1. Creating the divs was very challenging. Doing this with CSS would have been easy
   but as instructed i had to do this with javascript

How I overcame the challenges
1. I was able to create the divs by using a for loop twice meaning a loop within a loop.
   I came up with the idea because in my head i thought to myself that it a container
   could using flex-direction at the same time then this would be easy but that wasn't 
   possible. The only way that would be possible was to use flex-direction on the direct
   descendants of the parent element and then use it again on the descendants. 
*/