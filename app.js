let price ="500";
let result= document.querySelector(".para")

function calculation(){
    let csprice= prompt("Do you want chicken write in grams eg. 500, 1000");
    let divide = csprice / 1000;
    let multi = divide *price;
    result.innerHTML=`Your Total Bill Is RS ${multi} Of  ${csprice} Gram`

    console.log(multi)
}