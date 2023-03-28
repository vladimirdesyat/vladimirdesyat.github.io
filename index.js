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
function persentage(){
    let str = document.getElementById("result").value;
    let arr;
    let temp;
    if (str.includes('.')){
        arr = str.match(/\d+.\d+|\d+|[^0-9]/g);
    } else{
        arr = str.match(/\d+|[^0-9]|\d+/g);
    }
    temp = 100 - (arr[2] * 100 / arr[0]); 
    document.getElementById("result").value = temp + '%';
}

// eval can be safe used by client, but not secure by server
function calculate(){
    let str = document.getElementById("result").value;
    //.replace(/[^()*-+.%[0-9]]/, '')
    document.getElementById("result").value = eval(str);    
}