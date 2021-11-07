let carts = document.querySelectorAll('.btn');

let products = [
    {
        name: 'Doritos Nachos Cheese',
        tag: 'DNC',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Lays Classic',
        tag: 'LC',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Flaming Hot Cheetos',
        tag: 'FHC',
        price: 5,
        inCart: 0,
    },
    {
        name: 'KitKat',
        tag: 'KK',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Aero',
        tag: 'aero',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Snickers',
        tag: 'snickers',
        price: 5,
        inCart: 0,
    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else{ 
        localStorage.setItem('cartNumbers', 1);
    }

    setItems(products);
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        
        if(cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }

        }
        cartItems[products.tag]['inCart'] += 1;
    } else {
        products.inCart = 1;
        cartItems = {
        [products.tag]: products
    }
   
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems ));

}

function totalCost(product) {
    //console.log("the products price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("M cart Cost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else{
        localStorage.setItem("totalCost",product.price);
    }

}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".products");
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += ` 
            <div class="product"> 
            <ion-icon name="close-outline"></ion-icon>
                <img src="../../../images/snackImages/${item['tag']}.jpg">
                <span>${item['name']}</span>
                </div>
               
                <div class="price">
                ${item['price']}
                </div>

               
            `
        })
    }

}

displayCart();