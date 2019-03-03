 var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        "car color": "Wine Red",
        mileage: 3000,
        isWorking: true,

        driveToWork: function () {

            console.log("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 8;

            console.log("New mileage: " + this.mileage);
        },

        driveAroundWorld: function () {

            console.log("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 24000;

            console.log("New Mileage: " + this.mileage);
            console.log("Car needs a tuneup!");

            this.isWorking = false;
        },

        getTuneUp: function () {
            console.log("Car is ready to go!");
            this.isWorking = true;
        },

        honk: function () {
            console.log("Honk! Honk!");
        }
    };

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userPick = event.key.toLowerCase();

        if (userPick === "h") {
            car.honk();
        }
        else if (userPick === "d") {
            car.driveToWork();
        }
        else if (userPick === "w") {
            car.driveAroundWorld();
        }
        else if (userPick === "t") {
            car.getTuneUp();
        }
        else console.log("Please choose from h,d,w, or t");
    }