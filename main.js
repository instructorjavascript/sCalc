function add() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = Number(x) + Number(y);
    document.getElementById("result").innerHTML = z;
}

function sub() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x - y;
    document.getElementById("result").innerHTML = z;
}

function div() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x / y;
    document.getElementById("result").innerHTML = z;
}

function multi() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x * y;
    document.getElementById("result").innerHTML = z;
}