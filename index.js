// this is my first project of javascript , im ASFYA

        // enter the value
        function dataNumber(enterr){
            document.getElementById('result').value += enterr;
        }

        // delete the value
        function claerData(){
            document.getElementById('result').value = "";
        }

        // نتیجه
        function sum() {  
            const resultField = document.getElementById('result'); // add result input to varable
            const historyList = document.getElementById('history');// add history ui to varable
             
            const expression = resultField.value; // add sum in result to varable
            const result = eval(expression); // sum the result
            resultField.value = result;  // chenge result input to sum
            
            // Add to history
            const historyItem = document.createElement('li');
            historyItem.textContent = `${expression} = ${result}`;
            historyList.insertBefore(historyItem, historyList.firstChild);  // show the sum prosses                           
            
        }  ;
        