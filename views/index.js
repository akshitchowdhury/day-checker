import express from 'express'


const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

const day_select = new Date().getDay()


app.get("/", (req,res)=>{

    let day = ""
    let advice = ""
    
        if (day_select>=1 || day_select<=6){
            day = "weekday"
            advice = "Work hard"
        }
    
        else{
            day = "weekend"
            advice = "Party"
        }
    
    
    res.render("index.ejs", {
        d1 : day,
        a1 : advice
    })


    
})



