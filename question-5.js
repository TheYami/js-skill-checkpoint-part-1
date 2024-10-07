// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let totalPrice = 0;
let text = "";

function calculateTotalPrice(products,promotionCode){
  for(let i = 0; i < products.length; i++){
    totalPrice += (products[i].price * products[i].quantity);
  }

  if(promotionCode === "SALE20"){
    totalPrice -= totalPrice*(20/100);
    text = "ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า";
  }
  else if(promotionCode === "SALE50"){
    totalPrice -= totalPrice*(50/100);
    text = "ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า"
  }
  else{
    totalPrice = totalPrice;
    text = "ไม่ได้รับส่วนลด"
  }

  return `${text} ราคารวมของสินค้าทั้งหมดเป็น ${totalPrice}`
}

console.log(calculateTotalPrice(products,promotionCode))