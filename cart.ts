
localStorage.getItem('cart');

const cartProducts = document.querySelector(".cartList") as HTMLElement
// let cartItems = localStorage.getItem('cart') as HTMLElement

interface ProductInterface {
    category: string,
    description: string,
    id: number,
    image: string
    price: number,
    title: string,
    rating: {
        count: number,
        rate: number
    }
    quantity?: number
}

let cartItems: any[] = []
if (localStorage.getItem('cart')) {
  cartItems = JSON.parse(localStorage.getItem('cart') || '')
  
}


// cartItems.map(x =>{
//     cartProducts.innerHTML += `
//     <div class="cartCard">
//                      <img src="${x.image}" alt="${x.title}">
//                      <div class="title">${x.title}</div>
//                      <div>${x.category}</div>
//                      <div>${x.description}</div>
//                      <h4>Price: ${x.price}</h4>
//                      <div class"totalNumberOfitems"> Total number of items: </div>
//                      <div class"totalPrice"> Total price: </div>
                     
//                      <button class="addButton" id="${x.id}">Add items to cart +</button>
//                      <button class="removeButton" id="${x.id}">Remove items from cart -</button>

//     <div/>`
//     console.log(x.title);
     
// })

cartItems.map(x =>{
    cartProducts.innerHTML += `
    <table>
    
    <tr>
    <th>Image</th>
    <th>Title</th>
    <th>Category</th>
    <th>Description</th>
    <th>Price</th>
    <th>Add items</th>
    <th>Remove Items</th>
    <th>Total number of items</th>
    <th>Total price</th>
    </tr>
    <tr>
    <td class"img"><img src="${x.image}" alt="${x.title}"></td>
    <td><div class="title">${x.title}</div></td>
    <td><div>${x.category}</div></td>
    <td><div>${x.description}</div></td>
    <td><h4>Price: ${x.price}</h4></td>
    <td><button class="addButton" id="${x.id}">Add items to cart +</button></td>
    <td><button class="removeButton" id="${x.id}">Remove items from cart -</button></td>
    <td><div class="totalNumberOfitems"> Total number of items: ${x.quantity} </div></td>
    <td><div class="totalPrice"> Total price: <span style="font-weight:bold">${x.price * x.quantity}</span></div></td>
    
    </tr>
    
    </table>`

    let count = `${x.quantity}`;
    console.log(count);
    const mygt = document.getElementsByClassName("addButton");
    const displ = document.getElementsByClassName("totalNumberOfitems");
    console.log(mygt);
    console.log(displ);
    mygt.onclick = function () {
        count++;
        displ.innerHTML = count;
        console.log('veikia');
    };
    
})













