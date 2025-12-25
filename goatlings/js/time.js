let now = new Date();
let currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

document.getElementById("timer").innerHTML = `Current Time: ${currentTime}`;
console.log(`Current Time: ${currentTime}`);
