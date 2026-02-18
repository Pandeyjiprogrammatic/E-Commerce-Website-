const products=[
{id:1,name:'Shoes',price:499,img:'https://via.placeholder.com/150'},
{id:2,name:'Smart Watch',price:999,img:'https://via.placeholder.com/150'},
{id:3,name:'Headphones',price:299,img:'https://via.placeholder.com/150'}
];

// LIST PRODUCTS
if(document.getElementById('productList')){
 let out='';
 products.forEach(p=>{
 out+=`<div class='product-card'>
 <img src='${p.img}'>
 <h3>${p.name}</h3>
 <p>₹${p.price}</p>
 <a href='product.html?id=${p.id}'>View</a>
 </div>`;
 });
 document.getElementById('productList').innerHTML=out;
}

// PRODUCT DETAILS
if(document.getElementById('productDetails')){
 const id=new URLSearchParams(location.search).get('id');
 const item=products.find(p=>p.id==id);
 document.getElementById('productDetails').innerHTML=
 `<img src='${item.img}' width='200'>
 <h2>${item.name}</h2>
 <p>₹${item.price}</p>
 <button onclick='addToCart(${item.id})'>Add to Cart</button>`;
}

// ADD TO CART
function addToCart(id){
let c=JSON.parse(localStorage.getItem('cart')||'[]');
c.push(id);
localStorage.setItem('cart',JSON.stringify(c));
alert('Added!');
}

// SHOW CART
if(document.getElementById('cartItems')){
 let c=JSON.parse(localStorage.getItem('cart')||'[]');
 let out='';
 c.forEach(id=>{
 const p=products.find(x=>x.id==id);
 out+=`<p>${p.name} - ₹${p.price}</p>`;
 });
 document.getElementById('cartItems').innerHTML=out||'Cart empty!';
}

// SIGNUP
function signup(){
 const u=document.getElementById('signupUser').value;
 const p=document.getElementById('signupPass').value;
 localStorage.setItem('user',JSON.stringify({u,p}));
 alert('Signup successful!');
 location.href='login.html';
}

// LOGIN
function login(){
 const u=document.getElementById('loginUser').value;
 const p=document.getElementById('loginPass').value;
 const user=JSON.parse(localStorage.getItem('user'));
 if(user && u==user.u && p==user.p){
   alert('Login Successful!');
   location.href='index.html';
 } else alert('Invalid details');
}
