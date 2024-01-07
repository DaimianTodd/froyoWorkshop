//create a prompt that requests an order from the customer comma seperated
const froyoOrder = prompt("Please enter your froyo Order. Seperate each order with a comma!")
//this will create a variable with the ordeer
const froyoArray = froyoOrder.split(",")






const froyofunction = ()=>{
    const froyoObject = {}
    for(let i=0; i<froyoArray.length;i++){
        if(froyoObject[froyoArray[i]]){
         froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]] +1
        }else{
         froyoObject[froyoArray[i]] = 1
        }
     }
     return froyoObject

}
console.log(froyofunction())