// let form=document.querySelector("form")
let btn=document.getElementById("btn")
// console.log(form)
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let fetchData=async ()=>{
        let key=""
        let place=document.querySelector("#location").value
        // console.log(place)
        let data=await fetch("")
        let finalOutput=await data.json()
        // console.log(finalOutput)
        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        // console.log(tempValue)
        // console.log(humidValue)
        let finalTemp=Math.round(finalOutput.main.temp-273)
        console.log(finalTemp)
        let finalHumid=(finalOutput.main.humidity)
        tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid}`
    }
    fetchData
})