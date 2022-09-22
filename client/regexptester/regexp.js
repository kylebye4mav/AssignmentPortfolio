window.onload = function(){
    var button = document.getElementById("validateButton");
    button.onclick = validate;
}

function validate () {
    var inputStr = document.getElementById("input").value;
    var regex = new RegExp(document.getElementById("regexp").value);
    updateValidateTest(regex.test(inputStr));
}

function updateValidateTest(validationFlag) {
    var resultStr;
    if (validationFlag) resultStr = "Valid!"
    else resultStr = "Invalid!"
    document.getElementById("validation").innerHTML = resultStr;
}