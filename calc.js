function sourceCode(){
    window.open("Code.html")
}
const myValue = document.getElementById("display");
function remove(){
    display.value=display.value.slice(0, -1)
}
function removeAll(){
    display.value= "";
}
function theInput(input){
    myValue.value= myValue.value + input;
}
function operateCalc(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Invalid"
    }
}