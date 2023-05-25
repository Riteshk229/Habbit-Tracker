// const Post = require('../models/post');
const User = require('../models/user');
const Habbit = require('../models/habbits');


// Shows Habbit or make a new habbit if there isn't one
module.exports.home = async function(req, res) {
    if(req.user){

        let habbit = await Habbit.find({user: req.user._id}); 
        
        return res.render('home', {
            title : "Habbit Tracker",
            habbits : habbit,
            weeklyDates : await getOneWeekDate()
        })
    }else{
        return res.render('home', {
            title: "Home"
        });
    }
}

// function to provide week's date
function getOneWeekDate(){
    let months = ["","Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dates = [];
    for(let i = 6; i>=0 ; i--){
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
        let mm = currentDate.getMonth()+1;
        mm = months[mm];
        let dd = currentDate.getDate();
        if (dd < 10) dd = '0' + dd;
        dates.push(mm +" " +dd);
    }
    return dates;
}