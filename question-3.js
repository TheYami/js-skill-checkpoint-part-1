// Question #3
let userPassword = "ssswnalWadqQ";
// let userPassword = "TechUp";
// let userPassword = "abcd";
// เริ่มเขียนโค้ดตรงนี้
function checkPassword(userPassword){
    if(userPassword.length < 6){
        return "Weak";
    }
    else if(userPassword.length >= 6 && userPassword.length <= 10){
        return "Medium";
    }
    else{
        return "Strong";
    }
}

console.log(checkPassword(userPassword));