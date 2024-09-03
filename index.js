// this is my first project of javascript , im ASFYA

// enter the value
function dataNumber(enterr){
    document.getElementById('result').value += enterr ;
}

// delete the value
function claerData(){
    document.getElementById('result').value = " ";
}

// result
function sum() {  
    const resultField = document.getElementById('result');  
    try {  
        resultField.value = eval(resultField.value);  
    } catch (error) { 
        resultField.value = 'error';  
    }  
}  