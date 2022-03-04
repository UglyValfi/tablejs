let inputWidth = document.querySelector(".width_inp")
let inputHeight = document.querySelector(".height_inp")
let inputColor = document.querySelector(".color_inp")

let btnClear = document.querySelector(".Clear_btn")
let btnCreate = document.querySelector(".create_btn")

let btnUp = document.querySelector(".btn_up")
let btnDown = document.querySelector(".btn_down")
let btnLeft = document.querySelector(".btn_left")
let btnRight = document.querySelector(".btn_right")

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
// let isRadius;
let isDiv = false;


btnCreate.addEventListener('click', createDiv);
btnClear.addEventListener('click', clearDiv);

function clearDiv(){
    document.querySelector('.container').firstChild.remove();
    isDiv = false;
}

function createDiv(){
   if(!isDiv){
        iwValue = inputWidth.value;
        ihValue = inputHeight.value;
        icValue = inputColor.value;
        // isRadius = inputRadius.checked;

        // if(iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500){

            newDiv = document.createElement('div');
            newDiv.style.width = iwValue + 'px';
            newDiv.style.height = ihValue + 'px';
            newDiv.style.backgroundColor = icValue;


            document.querySelector('.container').append(newDiv);
            isDiv = true;
        // }

   }
   console.log(inputWidth.value)
   console.log(inputHeight.value)
   console.log(inputColor.value)

}

btnUp.addEventListener('click', blockUp); 
btnDown.addEventListener('click', blockDown); 
btnLeft.addEventListener('click', blockLeft); 
btnRight.addEventListener('click', blockRight); 


function blockUp(){
    if(mTop-10>=0){
        mTop -= 10;
        newDiv.style.marginTop = mTop +'px';
    }
}

function blockDown(){

    if(500-(Number(mTop)+Number(ihValue)+10)>=0){
        mTop+=10;
        newDiv.style.marginTop = mTop +'px'; 
    }
}

function blockLeft(){
    if(mLeft-10>=0){
        mLeft -= 10;
        newDiv.style.marginLeft = mLeft +'px';
    }
}

function blockRight(){
    if(500-(Number(mLeft)+Number(iwValue)+10)>=0){
        mLeft+=10;
        newDiv.style.marginLeft = mLeft +'px'; 
    }
}

// -------------------------------------------------------------

// let inputReverse = document.querySelector('.reverse_text');

// let btnReverse = document.querySelector('.btn_reverse');

// btnReverse.addEventListener('click', reverseText);

// function reverseText(){
//     let strArr = inputReverse.value.split(" ");

//     for (let index = 0; index < strArr.length; index++) {
//         let element = strArr[index].reverse();
//         console.log(element.reverse());
        
//     }
    

