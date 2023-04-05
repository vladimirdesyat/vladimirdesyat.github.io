function screen(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";
}
function deleteSymbol(){
    let str = document.getElementById("result").value;
    document.getElementById("result").value = str.slice(0,-1);
}

// eval can be safe used by client, but not secure by server
function calculate(){
    let str = document.getElementById("result").value;
    let arr;
    let temp;
    if (str.includes('.')){
        arr = str.match(/\d+.\d+|\d+|[^0-9]/g);
    } else{
        arr = str.match(/\d+|[^0-9]|\d+/g);
    }
    let index = arr.indexOf('%');
    temp = eval(str.replaceAll('%','/100*arr[index-3]'));
    // .replace(/[^()*-+.%[0-9]]/, '')
    // temp = 100 - (arr[2] * 100 / arr[0]); 
    document.getElementById("result").value = temp;    
}