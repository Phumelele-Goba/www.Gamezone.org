// OBJECTS FOR PRODUCTS AT GAMEZONE

let products =[
    {
        name:'xBox 360',
        tag: 'xbox360',
        price: 999.99,
        inCart: 0
    },

    {
        name:'PS5 console',
        tag: 'ps5console',
        price: 799.99,
        inCart: 0
    },
    {
        name:'Tombraider ps4',
        tag: 'tombraiderps4',
        price: 399.99,
        inCart: 0
    },
    {
        name:'FC 2024',
        tag: 'fc2024',
        price: 1899.99,
        inCart: 0
    },
    {
        name:'batman ps4',
        tag: 'batmanps4',
        price: 899.99,
        inCart: 0
    },
    {
        name:'DGBall Xenoverse',
        tag: 'dgballxenoverse',
        price: 599.99,
        inCart: 0
    },
    {
        name:'camo console ps5',
        tag: 'camoconsoleps5',
        price: 899.99,
        inCart: 0
    },
    {
        name:'call of duty ps4',
        tag: 'callofdutyps4',
        price: 999.99,
        inCart: 0
    },
    {
        name:'fifa17 ps4',
        tag: 'fifa17ps4',
        price: 249.99,
        inCart: 0
    },
    {
        name:'gaming chair',
        tag: 'gamingchair',
        price: 2499.99,
        inCart: 0
    },
    {
        name:'fifa22 ps4',
        tag: 'fifa22ps4',
        price: 899.99,
        inCart: 0
    },
    {
        name:'xbox one blck 1tb',
        tag: 'xboxoneblck1tb',
        price: 8999.99,
        inCart: 0
    },
    {
        name:'spiderman ps5',
        tag: 'spidermanps5',
        price: 399.99,
        inCart: 0
    },
    {
        name:'fifa23 Xbox Series X',
        tag: 'fifa23xboxseriesx',
        price: 1199.99,
        inCart: 0
    },
    {
        name:'turtle beach headset',
        tag: 'turtlebeachheadset',
        price: 699.99,
        inCart: 0
    },
    {
        name:'couger chair',
        tag: 'cougerchair',
        price: 2199.99,
        inCart: 0
    },
    {
        name:'WWE 2K22 PS4',
        tag: 'wwe2k22ps4',
        price: 949.99,
        inCart: 0
    },
    {
        name:'ufc PS4',
        tag: 'ufcps4',
        price: 799.99,
        inCart: 0
    },
    {
        name:'hyperX PS4',
        tag: 'hyperxps4',
        price: 889.99,
        inCart: 0
    },
    {
        name:'WWE 2022 Xbox One',
        tag: 'wwe2022xboxone',
        price: 899.99,
        inCart: 0
    },
    {
        name:'Battlefield',
        tag: 'battlefield',
        price: 779.99,
        inCart: 0
    },
    {
        name:'Mouse black',
        tag: 'mouseblack',
        price: 99.99,
        inCart: 0
    },
    {
        name:'SanAndreas PS4',
        tag: 'sanandreasps4',
        price: 439.99,
        inCart: 0
    },
    {
        name:'Xrocker Pedestal',
        tag: 'xrockerpedestal',
        price: 3499.99,
        inCart: 0
    },
    {
        name:'Playstation 4',
        tag: 'playstation4',
        price: 5499.99,
        inCart: 0
    },
    {
        name:'GTA V PS4',
        tag: 'gtavps4',
        price: 1199.99,
        inCart: 0
    },
    {
        name:'Forza Horizon 2',
        tag: 'forzahorizon2',
        price: 649.99,
        inCart: 0
    },
    {
        name:'ingremergonomic',
        tag: 'ingremergonomic',
        price: 14999.99,
        inCart: 0
    },
    {
        name:'assassins creed PS5',
        tag: 'assassinscreedps5',
        price: 999.99,
        inCart: 0
    },
    {
        name:'headset green',
        tag: 'headsetgreen',
        price: 699.99,
        inCart: 0
    },
    {
        name:'wired dual keyboard',
        tag: 'wireddualkeyboard',
        price: 399.99,
        inCart: 0
    },
    {
        name:'xBox One Series',
        tag: 'xboxoneseries',
        price: 8999.99,
        inCart: 0
    },
    {
        name:'PS5 white',
        tag: 'ps5white',
        price: 12799.99,
        inCart: 0
    },
    {
        name:'Halo5 Guardians',
        tag: 'halo5Guardians',
        price: 939.99,
        inCart: 0
    },
    {
        name:'Ironman PS4',
        tag: 'ironmanps4',
        price: 399.99,
        inCart: 0
    },
    {
        name:'NBA 2k23',
        tag: 'nba2k23',
        price: 999.99,
        inCart: 0
    },
]



// OBJECTS FOR PRODUCTS AT GAMEZONE



let basketBtn = document.querySelectorAll('#add-to-basket');

for(let i=0; i < basketBtn.length; i++){
      basketBtn[i].addEventListener('click', ()=>{
            cartNumbers(products[i]);
            totalCost(products[i]);
      })
}

function onLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.basket span').textContent= productNumbers;
    }


}


function cartNumbers(product){


    let productNumbers= localStorage.getItem('cartNumbers');
        productNumbers= parseInt(productNumbers);

    // console.log(typeof productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.basket span').textContent= productNumbers +1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.basket span').textContent= 1;

    }

    setItems(product);

}


function setItems(product){

    let cartItems= localStorage.getItem('itemsInCart');
        cartItems= JSON.parse(cartItems);

        if(cartItems != null){
            
            if( cartItems[product.tag] == undefined){
                cartItems={
                    ...cartItems,
                    [product.tag]: product
                }
            }
              cartItems[product.tag].inCart += 1;
        }
        else{
            product.inCart= 1;
            cartItems={
               [product.tag]: product
           }

        }
   

    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    }


function totalCost(product){

    let cartCost= localStorage.getItem('totalCost');


    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.price);
    }
    else{
        localStorage.setItem('totalCost', product.price);
    }

}

function displayCart(){
    let cartItems= localStorage.getItem('itemsInCart');
        cartItems= JSON.parse(cartItems);
        
        let productsAdded= document.querySelector(".products");

        if(cartItems && productsAdded){
            productsAdded.innerHTML= '';

            Object.values(cartItems).map(item =>{
                productsAdded.innerHTML +=`
                         <div class="product">
            <i class="fa-solid fa-circle-xmark remove"></i>
                              <img src="./pictures/${item.tag}.jpg">
                              <span>${item.name}</span>
                         </div>

                        <div class="price-cart">R${item.price}</div>

            <div class="quantity-cart">
                    <i class="fa-solid fa-caret-left decrease"></i>
                        ${item.inCart}
                    <i class="fa-solid fa-caret-right increase"></i>
                        </div>

                        <div class="total-cart">R${item.inCart * item.price}</div>

                
                `
            })

        }


}



onLoadCartNumbers();
displayCart();