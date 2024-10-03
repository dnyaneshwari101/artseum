//cart 
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//remove cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//vart working JS 

if(document.readyState=='loading')
{
    document.addEventListener('DOMContentLoaded',ready) ; 
}
else{
    ready();
}
//Function to initialize cart functionality
function ready()
{
    //remove items from cart

    var removeCartButtons=document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i=0; i<removeCartButtons.length; i++)
    {
      var  button= removeCartButtons[i];
      button.addEventListener("click",removeCartItem) ;
    }

    //Add to cart
    var addCart=document.getElementsByClassName("add-cart");
    for(var i=0; i<addCart.length;i++)
    {
        var button=addCart[i];
        button.addEventListener('click',addCartClicked);
    }  
    //Buy button work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    
    // While loop to remove all child nodes
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    
    // Reset the total to 0
    total = 0;
    
    // Update the total after clearing the cart
    updatetotal();
}

//remove items from cart
function removeCartItem(event)
{
    var buttonClicked= event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity Changes
/*function quantityChanged(event)
{
    var input=event.target;
    if(isNaN(input.value)|| input.value<=0)
    {
         input.value=1;
    }
    updatetotal();

}*/

//Add to cart
// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    
    // Check if the item is already in the cart
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("You have already added this item to the cart!");
            return;
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
        </div>
        <!--remove cart-->
        <i class='bx bxs-trash-alt cart-remove'></i>`;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCartItem);
}


//update total

// Define and initialize the total variable
var total = 0;

// ... Rest of your code ...

//update total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    total = 0; // Reset total to 0 before calculating the new total

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var price = parseFloat(priceElement.innerText.replace('Rs.', ""));
        total = total + price;
    }

    document.getElementsByClassName("total-price")[0].innerText = 'Rs.' + total;
}


