//โปรแกรมจัดการสต๊อคสินค้า//

let total = 10000
let withdraw = 19863

if(total >= withdraw){
    console.log("ทำการเบิกสินค้า = ",withdraw)
    console.log("จำนวนสินค้าคงเหลือ = ", (total - withdraw))
}else{
    console.log("สินค้าคงเหลือไม่พอเบิกขาดอีก",(withdraw - total))
}

//โปรแกรมตรวจสอบคุณภาพการทำงานของช่าง//

//A=ใช้เวลาน้อยกว่า 24ชม. B= 24.1-30 C=30.1-36 D=36.1-42 ไม่ผ่านการประเมิณ= 42.1 ขึ้นไป//

let work_time = 98
let grade;

if(work_time <= 24){
    grade="A"
}else if(work_time <= 30){
    grade="B"
}else if(work_time <= 36){
    grade="C"
}else if(work_time <= 42){
    grade="D"
}else{
    grade="คุณภาพการทำงานไม่ผ่านการประเมิน"
}

console.log(grade);

//ตัวอย่างการรับค่า id= name จากหน้าเว็บนำมาใช้คำนวนหลังเว็บ//
//  HTML
//  <input type="text" id="name"> 
//  <button onclick="getValue()">บันทึกชื่อ</button> 

//  Javascript
//  Function getValue() {
//    let name = document.getElementById('name').value;
//   console.log("ชื่อของคุณคือ", name)
//  }   

//การทำลูป

let product = 1;
while(product<=5){
    console.log("ดำเนินการผลิต", product);
    product++;
} if(product<=6){
    console.log("เสร็จสิ้นกระบวนการผลิต");
}

// ลูป for 

for(let number = 2;number>=1;number--){
    console.log(number);
}

// สร้างฟังชั่น

function userid(email="ไม่ระบุอีเมล",password="ไม่ระบุพาสเวิร์ด") {
    return email +" "+ password;
}

console.log(userid("natan@gmail","123456"));
console.log(userid("natan@gmail",));

//เทสขอบเขตของตำแปรในฟังชั่น

let a = 100;
let b = 50;

function calculate() {
    let b = 20;
    console.log("เอาตัวแปรในฟังชั่นมาคำนวน = ",a+b);    
}

calculate(); //ตัวแปรในฟังชั่น 100+20

console.log("เอาตัวแปรโกลบอลมาคำนวน = ",a+b); //ตัวแปรโกลบอล 100+50

//การจัดระเบียบกลุ่มสมาชิกใน array

let letters = ["c","d","a","e","b"];
let count = letters.length;
let sorter = letters.sort();

console.log("total letters = ",count);
console.log("sorter = ",sorter);

//ทดลองรวม array แต่ละกลุ่มให้มาอยู่ด้วยกันกลุ่มเดียว

let aa = ["มีด","ปืน"];
let bb = ["นํ้า","เนื้อแผ่น"];
let cc = ["salt","cream","stream"]

aa=aa.concat(bb,cc);
console.log(aa);

//สร้าง javascript object

let user = { //เข้าถึงชุดข้อมูลที่ต้องการด้วยการกำหนด object
    fname:"canaria",
    lname:"shiraishi",
    email:"cmr@sm.com",
    born:1995,
    displayuser:function(){ //เขียน method เพื่อใช้เรียกข้อมูลในก้อนนี้มาแสดงด้วยคำสั่งเดียวไม่ต้องไล่พิมพ์เรียกทีละตัว
        return "ชื่อ " + this.fname + " นามสกุล " + this.lname + " อีเมล " + this.email + " เกิดปี " + this.born;
    },
    disYear:function(){
        return "ปีเกิดแบบพศ. " + (this.born+543);
    }
};

console.log ("ชื่อ ",user.fname);
console.log ("นามสกุล ",user.lname);
console.log ("อีเมล ",user.email);

console.log(user.displayuser());
console.log(user.disYear());