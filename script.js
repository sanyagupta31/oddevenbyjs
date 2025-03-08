function checkevenodd() {
    let num = parseInt(prompt("Enter a number:"));
    let result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("result").innerText = `The number is ${result}`;
}
