console.log("shakib")

function getEmail(event) {
    event.preventDefault();
    const email = event.target.email.value
    console.log("Your email is :" + email);

    //catch 
    const showEmailContainer = document.getElementById("showEmail");

    // creat elements

    const newPara = document.createElement("p");

    newPara.innerText = `Your Email : ${email}\n Thank you for subscribing`;

    //attach
    showEmailContainer.innerHTML = ``;
    showEmailContainer.appendChild(newPara);


}


// making the array of products objects

const productsArray = [
    {
        url: "./image/food_img/f1.png",
        itemName: "Gyro Sandwhic",
        itemPrice: "$15.50",
        itemRating: "4.9"
    },
    {
        url: "./image/food_img/f2.png",
        itemName: "Enchilade",
        itemPrice: "$25.0",
        itemRating: "5.0"
    },
    {
        url: "./image/food_img/f3.png",
        itemName: "Green Beans",
        itemPrice: "$12.26",
        itemRating: "4.6"
    },
    {
        url: "./image/food_img/f4.png",
        itemName: "Pizza",
        itemPrice: "5.0",
        itemRating: "$18.36"
    },
    {
        url: "./image/food_img/f5.png",
        itemName: "Chicken Pot Pie",
        itemPrice: "$30.0",
        itemRating: "4.6"
    },
    {
        url: "./image/food_img/f6.png",
        itemName: "Green Salad",
        itemPrice: "3.5",
        itemRating: "$5.9"
    },
    {
        url: "./image/food_img/f7.png",
        itemName: "Tacos",
        itemPrice: "$8.99",
        itemRating: "4.7"
    },
    {
        url: "./image/food_img/f8.png",
        itemName: "French Croissant",
        itemPrice: "$3.50",
        itemRating: "4.8"
    },
    {
        url: "./image/food_img/f9.png",
        itemName: "Pad Thai",
        itemPrice: "$13.99",
        itemRating: "4.6"
    },
    {
        url: "./image/food_img/f10.png",
        itemName: "Lobster Roll",
        itemPrice: "$19.99",
        itemRating: "4.7"
    },
    {
        url: "./image/food_img/f11.png",
        itemName: "Spaghetti Carbonara",
        itemPrice: "$14.00",
        itemRating: "4.6"
    },
    {
        url: "./image/food_img/f12.png",
        itemName: "Ramen",
        itemPrice: "5.0",
        itemRating: "$12.00"
    },
]

var clickCount = 0;
function showMoreProduct(event) {


    clickCount++;
    console.log(clickCount);

    if (clickCount % 2 == 0) {
        
    const all_product_card_container = document.getElementById("all_product_card_container_id");
    all_product_card_container.innerHTML=``;

    
            
    for (let i = 0; i < 6; i++) {
        console.log(i);
        const newProduct_card_div = document.createElement("div");
    
        newProduct_card_div.classList.add("product_card");
        newProduct_card_div.innerHTML = `

            <div>
                         <img src="${productsArray[i].url}">
                         </div>
     
                         <div class="product_container">
     
                             <div class="title_button_container">
                                 <h1>${productsArray[i].itemName}</h1>
                                 <button>Add To Cart</button>
                             </div>
     
                             <div class="product_section_right">
                                 <div class="product_star">
                                     <img src="image/products/star.png" alt="">
                                     <h1 class="p_rating">${productsArray[i].itemRating}</h1>
                                 </div>
     
                                 <h1 class="p_price">${productsArray[i].itemPrice}</h1>
                             </div>
     
     
     
                         </div>
         `;
        all_product_card_container.appendChild(newProduct_card_div);

        document.getElementById('button_title_id').textContent = "See More products";
    }


    }
    else {

        
    const all_product_card_container = document.getElementById("all_product_card_container_id");
    all_product_card_container.innerHTML=``;
        for (let i = 0; i < productsArray.length; i++) {
            console.log(i);
            const newProduct_card_div = document.createElement("div");
        
            newProduct_card_div.classList.add("product_card");
            newProduct_card_div.innerHTML = `
    
                <div>
                             <img src="${productsArray[i].url}">
                             </div>
         
                             <div class="product_container">
         
                                 <div class="title_button_container">
                                     <h1>${productsArray[i].itemName}</h1>
                                     <button>Add To Cart</button>
                                 </div>
         
                                 <div class="product_section_right">
                                     <div class="product_star">
                                         <img src="image/products/star.png" alt="">
                                         <h1 class="p_rating">${productsArray[i].itemRating}</h1>
                                     </div>
         
                                     <h1 class="p_price">${productsArray[i].itemPrice}</h1>
                                 </div>
         
         
         
                             </div>
             `;
            all_product_card_container.appendChild(newProduct_card_div);

            document.getElementById('button_title_id').textContent = "See Less";
        }
    
    }





}