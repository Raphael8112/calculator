document.addEventListener("DOMContentLoaded",()=> {
    let display=document.getElementById("display");
    let currentInput="";
    function updatedisplay(){
        display.textContent= currentInput;
    }
    document.querySelectorAll(".key").forEach(key=>{
        key.addEventListener("click",()=>{
            let value= key.getAttribute("data-value");
            if (value ==="⌫"){
                currentInput= currentInput.slice(0,-1);
            } else if(value==="="){
                try{
                    currentInput=eval(currentInput).toString();
                } catch(error){
                    currentInput="error"
                }
            } else{
                currentInput+=value;
            }
            updatedisplay();
        });
    });
});