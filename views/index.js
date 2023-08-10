import express from 'express'


const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

const day_select = new Date().getDay()


app.get("/", (req,res)=>{

    
})



function check(){
    if (day_select>=1 || day_select<=6){
        console.log("weekday")
    }

    else{
        console.log("weekend")
    }
}

check()