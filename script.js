let result = document.getElementById('result');
//function for convertion
function convert(){
    let cmVal = Number(document.getElementById('cmVal').value);
    let inchVal = cmVal/2.54;
    result.innerHTML = inchVal.toFixed(3) +" inches";
    
}
