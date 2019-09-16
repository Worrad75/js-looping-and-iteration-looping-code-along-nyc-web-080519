function writeCards(arr, event) {
    let messages = []
    for (let i = 0; i < arr.length; i++) {
        messages.push("Thank you, " + arr[i] + ", for the wonderful " + event + " gift!")
    }
    return messages
}

function countdown(num){
    while (num >= 0) {
        console.log(num)
        num -= 1
    }
}