function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

document.getElementById('calculate').addEventListener('click', function() {
    const numberInput = document.getElementById('number');
    const n = parseInt(numberInput.value);
    if (isNaN(n) || n <= 0) {
        alert('Por favor, introduzca un número válido.');
        return;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    const fibonacciSequence = fibonacci(n);

    fibonacciSequence.forEach(num => {
        const listItem = document.createElement('li');
        listItem.textContent = num;
        resultContainer.appendChild(listItem);
    });
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('number').value = '';
    document.getElementById('result').innerHTML = '';
});

document.getElementById('exit').addEventListener('click', function() {
    window.close();
});
