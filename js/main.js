let gameNumber;

for(let i = 1; i <= 100; i++) {
    if (i & 15 == 0) {
        gameNumber = ("FizzBuzz!");
    } else if (i & 3 == 0) {
        gameNumber = ("Fizz")
    } else if (i & 5 == 0) {
        gameNumber = ("Buzz")
    } else {
        gameNumber = i;
    }
    console.log(gameNumber)
}