const container = document.querySelector("#container");

const squareButton = document.querySelector("button");
squareButton.addEventListener('click', event => {
    const size = parseInt(prompt("How many squares per side? (100 max)", 16));
    console.log(size);
    if(size<=100 && size >=1)
    numSquares(size);
    else (alert("Error"))
    });


function numSquares(size){
    container.innerHTML = "";

    const squareSize = 960/ size;
     console.log(squareSize); 

    for (i=0; i<size**2; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        

        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        newDiv.style.opacity = 0;
        let currentOpacity = newDiv.style.opacity;
        console.log(currentOpacity);  
        console.log(newDiv);      

        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = randomColor();
            let newOpacity = parseFloat(newDiv.style.opacity) + 0.1;
            if (newOpacity >=1){
                newDiv.style.backgroundColor = "black";
            }
            else {
                
            }
            newDiv.style.opacity = `${newOpacity}`;
       
    
            function randomColor(){
                const red = Math.random()*256;
                const green = Math.random()*256;
                const blue = Math.random()*256;
                
              return `rgb(${red}, ${green}, ${blue})`}});    

    container.appendChild(newDiv);

    };
  return;
};




