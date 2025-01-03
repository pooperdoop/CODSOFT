const screen = document.getElementById('screen');
function enterNum(n){
CleanUp();
    if(typeof n === "number"){
        if(screen.value === '0'){
            screen.value = n;
        } else{
            screen.value += n;
        }
    }
}

function enterOperation(n){
    let lastChar = screen.value.slice(-1);
    if((screen.value == null || screen.value == '0'|| screen.value == '') && n != "-"){
        return;
    } else{
        if(n != '=' && screen.value !="-"){
           
            if(lastChar == '÷' || lastChar == '×'|| lastChar == '-'|| lastChar == '+'){
                screen.value = screen.value.substring(0, screen.value.length-1) + n;
            }
            else{
                if(screen.value === '0'){
                    screen.value = n;
                } else{
                    screen.value += n;
                }
            }
        }
        else if(n =='=' ){
            try{

                let equation = "";
                screen.value = screen.value.replaceAll('÷', '/');
                screen.value = screen.value.replaceAll('×', '*');
                for(var i = 0; i< screen.value.length; i++){
                    equation += screen.value.charAt(i);
                }
                // unnecessary loop but since it is included in the instructions, I added it in;
                screen.value = eval(equation);

            } catch(e){
                screen.value = 'Error';
            }
        }
    }
}

function backspace(n){
    CleanUp();
        screen.value = screen.value.substring(0, screen.value.length-1);
}

function CleanUp(){
    if(screen.value == "Error"){
        screen.value = "";
    }
}