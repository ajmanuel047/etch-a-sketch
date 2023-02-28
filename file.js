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

/*
where i had challenges
1. Creating the divs was very challenging. Doing this with CSS would have been easy
   but as instructed i had to do this with javascript
2. Getting the user's input to make the div's creation dynamic was another challenge 
   i faced. I had to ask questions to overcome this challenge because i felt i was missing 
   something as the userInput wasn't updating the input variable outside the 
   eventlistener for the userOption button.

   These are the two areas i had the most challenge

How I overcame these challenges
1. I was able to create the divs by using a for loop twice meaning a loop within a loop.
   I came up with the idea because in my head i thought to myself that it a container
   could using flex-direction at the same time then this would be easy but that wasn't 
   possible. The only way that would be possible was to use flex-direction on the direct
   descendants of the parent element and then use it again on the descendants. 
2. What i was made to understand was that it was updating all along but due to how i console
   logged the values i wasn't getting the right output.
   
   I see a lot of things i can still do here to make it 
   more personalized but a programmer should always know
   when to stop adding more functionality. 
   
   */