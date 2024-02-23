/*Create an object representing a car with properties such as brand, model, year, 
and a method called drive that logs a message indicating the car is being driven.
 Then, call the drive methodonthecar object.*/ 

    var car ={
        brand : "AreebK",
        model: "skytalk",
        year: 2030,

        drive : function(){
            console.log("The car by " + this.brand + " of model " + this.model + " " + this.year + " is being driven."); 
             }
    }
      car.drive();