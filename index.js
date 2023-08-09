const num1P = document.getElementById('num1')

const num2P = document.getElementById('num2')

const operationP = document.getElementById('operation')

const calculateBtnP = document.getElementById('calculateBtn')

const resultP = document.getElementById('result')

calculateBtnP.addEventListener('click', function(){
    const num1 = parseFloat(num1P.value)
    const num2 = parseFloat(num2P.value)
    const operation = operationP.value

    let result

    if (operation === 'add'){

    result = num1 + num2}

    else if (operation === 'subtract') {
        result = num1 - num2
    }

    else if (operation === 'multiply'){
        result = num1 * num2
    }

    else if (operation === 'divide') {
        result = num1 / num2
    }

    resultP.textContent = `Result ${result}`

})