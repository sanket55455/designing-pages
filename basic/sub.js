function addition() {

    let strnum1 = document.getElementById('number1').value
    console.log(strnum1)
    let num1 = parseInt(strnum1 - 0)

    let strnum2 = document.getElementById('number2').value
    console.log(strnum2)

    let num2 = parseInt(strnum2 - 0)
    let result = 0

    result = num1 - num2

    document.getElementById(`result`).value = result
    console.log(result)
    return result;


}