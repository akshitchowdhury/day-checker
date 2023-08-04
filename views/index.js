
const day_select = new Date().getDay()

function check(){
    if (day_select>=1 || day_select<=6){
        console.log("weekday")
    }

    else{
        console.log("weekend")
    }
}

check()