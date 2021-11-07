let carts = document.querySelectorAll('.btn');

let products = [
    {
        name: 'Ground Beef',
        tag: 'groundBeef',
        price: 1,
        inCart: 0,
    },
    {
        name: 'Steak',
        tag: 'steak',
        price: 1,
        inCart: 0,
    },
    {
        name: 'Chicken Breast',
        tag: 'chicken',
        price: 1,
        inCart: 0,
    },
    {
        name: 'Salmon',
        tag: 'salmon',
        price: 1,
        inCart: 0,
    },
    {
        name: 'Tuna',
        tag: 'tuna',
        price: 1,
        inCart: 0,
    },
    {
        name: 'Shrimp',
        tag: 'shrimp',
        price: 1,
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
                <img src="new images 2/${item['tag']}.jpg">
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