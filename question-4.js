// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuanity;
let product = "";

for(let i = 0; i < inventory.length; i++){
  if(!minQuanity){
    minQuanity = inventory[i].quantity;
    product = inventory[i].name;
  };
  
  if(minQuanity > inventory[i].quantity){
    minQuanity = inventory[i].quantity;
    product = inventory[i].name;
  }
  else{
    minQuanity = minQuanity;
    product = product;
  }
};

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${product} ซึ่งมี ${minQuanity} ชิ้น`);