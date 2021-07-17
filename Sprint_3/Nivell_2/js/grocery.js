// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if ((i + 1) === id) {
            cartList.push(products[i])

        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for (let i = 0; i < cartList.length; i++) {
        let item = cartList[i];

        switch (item.type) {
            case 'grocery':
                subtotal.grocery.value += item.price;
                // subtotal.grocery.value = subtotal.grocery.value + item.price
                break;
            case 'beauty':
                subtotal.beauty.value += item.price;
                break;
            case 'clothes':
                subtotal.clothes.value += item.price;
                break;

        }

    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    for (let prop in subtotal) {
        total += prop.value
    }
}

// Exercise 5
function applyPromotionsSubtotals() {
    let oil = 0;
    let cake = 0;

    for (let i = 0; i < cartList.length; i++) {
        let item = cartList[i];

        if (item.name === 'cooking oil') {
            oil++;
        }

        if (item.name === 'Instant cupcake mixture') {
            cake++;
        }
    }

    let discount = 0;

    if (oil > 3) {
        discount = 10;
    }

    if (cake > 10) {
        discount += (5 / 3) * cake
    }

    subtotal.grocery.discount = discount;

    subtotal.grocery.value -= subtotal.grocery.discount;

    calculateTotal();

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        let item = cartList[i];

        let encontrado = cart.filter(prod => {
            return prod.name === item.name
        });

        if (encontrado.length === 0) {
            let prod = {
                name: item.name,
                price: item.price,
                type: item.price,
                quantity: 1,
                subtotal: item.price,
                subtotalWithDiscount: item.price,
            }
            cart.push(prod);
        } else {
            let prod = encontrado[0];

            let index = cart.indexOf(prod);
            cart[index].quantity++;
            cart[index].subtotal += prod.price;
            cart[index].subtotalWithDiscount += prod.price;
        }
    }
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];

        switch (item.name) {
            case 'cooking oil':
                if (item.quantity > 3) {
                    item.subtotalWithDiscount -= 10;
                }
                break;
            case 'Instant cupcake mixture':
                if (item.quantity > 10) {
                    item.subtotalWithDiscount -= (item.price / 3) * item.quantity
                }
                break;

        }

    }
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {
        if ((i + 1) === id) {
            let item = products[i];

            let encontrado = cart.filter(prod => {
                return prod.name === item.name
            });

            if (encontrado.length === 0) {
                let prod = {
                    name: item.name,
                    price: item.price,
                    type: item.price,
                    quantity: 1,
                    subtotal: item.price,
                    subtotalWithDiscount: item.price,
                }
                cart.push(prod);
            } else {
                let prod = encontrado[0];

                let index = cart.indexOf(prod);
                cart[index].quantity++;
                cart[index].subtotal += prod.price;
                cart[index].subtotalWithDiscount += prod.price;
            }

        }
    }
}

// Exercise 9

//Create remove button! 
function removeFromCart(id) { 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array. REMOVE FROM CART

    for (let i = 0; i < products.length; i++) {
        if ((i + 1) === id) {
            let item = products[i];

            for(let j = 0; j<cart.length; j++){
                if(item.name === cart[j].name){
                    if(cart[j].quantity>1){
                        cart[j].quantity--;
                        cart[j].subtotal -= cart[j].price;
                        cart[j].subtotalWithDiscount = cart[j].subtotal;
                    }else{
                        cart.splice(j,1);
                    }
                    break;
                }
            } 
            applyPromotionsCart();
        }
    }
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let ul = document.querySelector(".list");
    ul.innerHTML ="";
    applyPromotionsCart();

    for(let i=0; i<cart.length; i++){
        let li = document.createElement("li");
        let content = cart[i].name + " (" + cart[i].quantity + ") : " + cart[i].subtotalWithDiscount + "€" 
        li.appendChild(document.createTextNode(content));
        ul.appendChild(li);
    }
   
  
}