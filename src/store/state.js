
export const state = {
    state: {
        menuItems: {
            1: {
                name: 'Magherita',
                discription: 'A delicious tomato based pizza topped with mozzarella',
                options: [{
                        size: 9,
                        price: 6.95
                    },
                    {
                        size: 12,
                        price: 10.95
                    }
                ]
            },
            2: {
                name: 'Pepperoni',
                discription: 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                options: [{
                        size: 9,
                        price: 7.95
                    },
                    {
                        size: 12,
                        price: 12.95
                    }
                ]
            },
            3: {
                name: 'Ham and Pineapple',
                discription: 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                options: [{
                        size: 9,
                        price: 7.95
                    },
                    {
                        size: 12,
                        price: 12.95
                    }
                ]
            }
        },
        orders: [],
        currentUser: null,
    }
} 