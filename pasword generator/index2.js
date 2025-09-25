const btn=document.querySelector("#button")
let newpass=document.querySelector("#genpas")
const slider=document.querySelector("#vr")
const p=document.querySelector("#non")

const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")
const numbers=document.querySelector("#numbers")
const symbols=document.querySelector("#symbols")

p.textContent=slider.value
slider.addEventListener("input", (val)=>{
    p.textContent=val.target.value
})


btn.addEventListener("click", ()=>{
    let upper="ABCDEFGHIJKLKLMNOPQRSTUVWXYZ"
    let lower="abcdefghijklmnopqrstuvwxyz"
    let num="0123456789"
    let symbol="!@#$%^&*()"

    let finalStr=''

    if(uppercase.checked){
        finalStr+=upper
    }
    if(lowercase.checked){
        finalStr+=lower
    }
    if(numbers.checked){
        finalStr+=num
    }
    if(symbols.checked){
        finalStr+=symbol
    }


    if(finalStr===''){
        alert("choose any one option")
        return
    }





    
    let resultStr=''
    for(let i=0;i<slider.value;i++){
        let ran=Math.floor(Math.random()*finalStr.length)
        resultStr+=finalStr[ran]
    }
    newpass.textContent=resultStr

})