const screen = document.getElementById('screen');
function enterNum(n){

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
 if(n != '='){
    if(n == 'D'){
        screen.value = screen.value.substring(0, screen.value.length-1);
    }
    else if(lastChar == '÷' || lastChar == '×'|| lastChar == '-'|| lastChar == '+'){
        screen.value = screen.value.substring(0, screen.value.length-1) + n;
    }
    else{
        screen.value+=n;
    }
  }
  else{
    try{
        screen.value = screen.value.replaceAll('÷', '/');
        screen.value = screen.value.replaceAll('×', '*');
        screen.value = eval(screen.value);
    } catch(e){
        screen.value = 'Error';
    }
  }
}