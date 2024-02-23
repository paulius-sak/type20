var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "blue",
    price: 25000,
    startEngine: function () {
        console.log("Engine started");
    },
    stopEngine: function () {
        console.log("Engine stopped");
    }
};
function checkCar(car) {
    console.log("Brand:", car.brand);
    console.log("Model:", car.model);
    console.log("Year:", car.year);
    console.log("Color:", car.color);
    console.log("Price:", car.price);
    car.startEngine();
    car.stopEngine();
}
checkCar(myCar);


