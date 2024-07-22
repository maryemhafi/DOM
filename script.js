let heart_btn=document.getElementsByClassName("heart-btn");
let plus_btn=document.getElementsByClassName("plus-btn");
let Quant=document.getElementsByClassName("Quant");
let minus_btn=document.getElementsByClassName("minus_btn");
let finalPrice=document.getElementById("finalPrice");
let delete_btn=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
let Prices=[1379,176,249]
console.log(heart_btn)
for (let i= 0 ;i< heart_btn.length;i++) {
    //heart button
    heart_btn[i].addEventListener("click",function(){
        if (heart_btn[i].style.color=="red"){
            heart_btn[i].style.color="black";
         } else{
            heart_btn[i].style.color="red"
            }});
        //plus button
        plus_btn[i].addEventListener("click",function(){
            Quant[i].value= Number(Quant[i].value)+1;
            finalPrice.value=Number(finalPrice.value)+Prices[i];
        });
    //minus button
    plus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value>=1)){
        Quant[i].value= Number(Quant[i].value)-1;
        finalPrice.value=Number(finalPrice.value)-Prices[i];
        }   
});
//delet button
delete_btn[i].addEventListener("click",function(){
    finalPrices.value=Number(finalPrice.value)-(Prices[i]*Number(Quant[i].value))
    Item[i].remove()
})
    }

