// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let upButton = document.querySelector("#up");
    let downButton = document.querySelector("#down");
    let leftButton = document.querySelector("#left");
    let rightButton = document.querySelector("#right");
    let rocket = document.getElementById("rocket");
    let rocketVertical = 0;
    let rocketHorizontal = 0;
    let rocketBottomPos = rocketVertical + "px";
    rocket.style.bottom = rocketBottomPos;
    //rocket.style.position = "relative";
    rocket.style.position = "absolute";
    rocket.style.left = rocketHorizontal;
    

    takeOff.addEventListener("click", function () {
        let question = confirm("Confirm that the shuttle is ready for takeoff?");
        if (question) {
          flightStatus.innerHTML = "Shuttle in flight!";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML =
            Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landing.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", function () {
        let question = confirm("Confirm that you want to abort the mission.");
        if (question) {
          flightStatus.innerHTML = "Mission aborted.";
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener("click", () => {
        rocketVertical += 10;
        rocket.style.bottom = `${rocketVertical}px`;
        spaceShuttleHeight.innerHTML =
            Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener("click", () => {
        rocketVertical -= 10;
        rocket.style.bottom = `${rocketVertical}px`;
        spaceShuttleHeight.innerHTML =
            Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    leftButton.addEventListener("click", () => {
        rocketHorizontal -= 10;
        rocket.style.left = `${rocketHorizontal}px`;
    });

    rightButton.addEventListener("click", () => {
        rocketHorizontal += 10;
        rocket.style.left = `${rocketHorizontal}px`;
    });



});