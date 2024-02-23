interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    startEngine(): void;
    stopEngine(): void;
}


const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "blue",
    price: 25000,
    startEngine() {
        console.log("Engine started");
    },
    stopEngine() {
        console.log("Engine stopped");
    }
};


function checkCar(car: Car): void {
    console.log("Car details:");
    console.log("Brand:", car.brand);
    console.log("Model:", car.model);
    console.log("Year:", car.year);
    console.log("Color:", car.color);
    console.log("Price:", car.price);
    car.startEngine();
    car.stopEngine();
}


checkCar(myCar);

