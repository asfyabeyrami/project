// this is my first project of javascript , im ASFYA

        // enter the value
        function dataNumber(enterr){
            document.getElementById('result').value += enterr;
        }

        // delete the value
        function claerData(){
            document.getElementById('result').value = "";
        }

        // result
        function sum() {  
            const resultField = document.getElementById('result');
            const historyList = document.getElementById('history');
             
            const expression = resultField.value.trim(); // حذف فضاهای خالی اضافی

            // check the result is true
            if (expression === "" || expression === "0") {
                resultField.value = "enter number";
                setTimeout(() => {
                    resultField.value = "0";
                }, 1000);
                return;
            }

            try {
                const result = eval(expression); //sum the result with eval func
                // Add to history
                const historyItem = document.createElement('li');
                historyItem.textContent = `${expression} = ${result}`;
                historyList.insertBefore(historyItem, historyList.firstChild);                
                resultField.value = result;
                
                // after 1s delete the value
                setTimeout(() => {
                    resultField.value = "0";
                }, 1000);
            } catch (error) {
                resultField.value = "error";
                setTimeout(() => {
                    resultField.value = "0";
                }, 1000);
            }
        }

        // delete the history box
        function clearHistory() {
            document.getElementById('history').innerHTML = '';
        };
        