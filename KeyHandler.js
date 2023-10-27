class KeyHandler {
    constructor () {

    }

    move() {
        document.addEventListener("keydown", function(event) {
            const key = event.key.toLowerCase();
            const player = document.getElementById("player"); // Assuming there is an HTML element with id "player" representing the player
     
            switch (key) {
                case "w":
                    // console.log("w");
                    return "w";
                    // break;
                case "a":
                    // console.log("a");
                    return "a";
                    // break;
                case "s":
                    return "s";
                    // console.log("s");
                    // break;
                case "d":
                    return "d";
                    // console.log("d");
                    // break;
            }
        });
    }

}



 
// Usage Example
