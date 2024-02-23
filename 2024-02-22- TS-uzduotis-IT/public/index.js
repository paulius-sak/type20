"use strict";
const project = {
    projectType: "IN_HOUSE",
    location: {
        country: "Lithuania",
        city: "Vilnius",
        address: "Santariskiu g."
    },
    user: {
        name: "John",
        surname: "Doe"
    },
    contributors: [
        {
            name: "John",
            surname: "Snow"
        },
        {
            name: "John",
            surname: "Johnson",
            age: 30
        }
    ]
};
const projects = [
    {
        projectType: "IN_HOUSE",
        location: {
            country: "Country 1",
            city: "City 1",
            address: "Address 1"
        },
        user: {
            name: "John",
            surname: "Doe"
        },
        contributors: [
            {
                name: "Alice",
                surname: "Smith"
            },
            {
                name: "Bob",
                surname: "Johnson",
                age: 30
            }
        ]
    },
    {
        projectType: "OUTSOURCE",
        location: {
            country: "Country 2",
            city: "City 2",
            address: "Address 2"
        },
        user: {
            name: "Jane",
            surname: "Doe"
        },
        contributors: [
            {
                name: "Eve",
                surname: "Brown"
            }
        ]
    }
];
console.log(projects);
const shoppingCart = [];
function addItemToCart({ name, price, type }) {
    const newItem = { name, price, type };
    shoppingCart.push(newItem);
    console.log(`item: ${name} (${type}). Price: ${price} eur`);
}
addItemToCart({ name: "Laptop", price: 999, type: "Electronics" });
addItemToCart({ name: "T-Shirt", price: 10, type: "Clothing" });
