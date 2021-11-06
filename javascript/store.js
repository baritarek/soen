 var  addElement = document.getElementsByClassName("btn-outline")
 console.log(addElement)



  updateCartTotal = () =>{
    var carItemsContainer = document.getElementsByClassName('cart-items')
 }

 var addToCart = document.getElementsByClassName("btn-outline")
  for(let i = 0 ; i < addToCart.length; i++){
    addToCart[i].addEventListener('click', cartItems);
  }

  cartItems = (e) =>{
      btn = e.target
      console.log(btn)
  }