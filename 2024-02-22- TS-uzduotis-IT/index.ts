type LocationType = {
    country: string;
    city: string;
    address: string;
}

type UserType = {
    name: string;
    surname: string;
    age?: number;
  };

type ItPojectType = {
    projectType: "IN_HOUSE" | "OUTSOURCE";
    location: LocationType;
    user: UserType;
    contributors: UserType[];
}


const project: ItPojectType = {
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

const projects: ItPojectType[] = [
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

type ProductType = "Electronics" | "Clothing"

type CartItemType = { 
    name: string;
    price: number;
    type: ProductType;
}

const shoppingCart: CartItemType[] = []

function addItemToCart({name, price, type}: {name: string, price: number, type: ProductType}): void {
    const newItem: CartItemType = {name, price, type}
    shoppingCart.push(newItem)
    console.log(`item: ${name} (${type}). Price: ${price} eur`)
}

addItemToCart({ name: "Laptop", price: 1000, type: "Electronics" })
addItemToCart({ name: "T-Shirt", price: 10, type: "Clothing" })