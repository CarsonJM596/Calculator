const dis = document.getElementById("dis");

function appendToDisplay(input){
    dis.value += input;
}
function clearDis(){
    dis.value = "";
}
function calculate(){
    try{
        dis.value = eval(dis.value);
    }
    catch(error){
        dis.value = "Error";
    }        
}