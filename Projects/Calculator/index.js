let input=document.getElementById('input');
let inputValue='';
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (el) =>{
        buttonText=el.target.innerText;
        console.log('button text is' ,buttonText);
        if(buttonText=="X"){
            buttonText="*";
            inputValue +=buttonText;
            input.value =inputValue;

        }
        else if(buttonText=="C"){
            inputValue ="";
            input.value =inputValue;
        }
        else if(buttonText=="="){
            input.value=eval(inputValue);
        }
        else{
            inputValue +=buttonText;
            input.value =inputValue;
        }
    }
    )

} 