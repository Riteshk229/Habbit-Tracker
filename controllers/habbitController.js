const Habbit = require('../models/habbits');

// To create new habbits
module.exports.createhabbit = async function(req, res) {
    try {

        let habbit = await Habbit.findOne({
            title: req.body.title,
            user: req.user._id
        }).populate('user','name');

        if(!habbit) {

            let habbit = await Habbit.create({
                title: req.body.title,
                desc: req.body.desc,
                user: req.user._id,
                dates : {
                    date : await getTodayDate() ,
                     completed : "none"}
            });

            req.flash('success', 'Habbit Created Successfully!!');
            return res.redirect('/');
        }
    } catch (error) {
        console.log('Error in habitController/createhabit: ', error);
        return;
    }
}

// To toggle habbit's status
module.exports.toggleStatus = async function(req, res) {
    try {
        let id = req.query.id;
        let date = req.query.date;
        const habbit = await Habbit.findById(id);
        console.log(date);

        if(!habbit) {
            console.log('habit not present!');
            return res.redirect('/');
        }

        // take out the date array of the habit.
        let dates = habbit.dates;
        let found = false;

        // changes the complete argument accodingly.
        dates.find((item, index) =>{
            if(item.date == date){
                if(item.complete === 'y'){
                    item.complete = 'n';
                }else if(item.complete === 'n'){
                    item.complete = 'x';
                }else if(item.complete === 'x'){
                    item.complete = 'y';
                }
                found = true;
            }
        });

        if(!found) {
            dates.push({date : date, complete : 'y'});
        }
        // Save dates
        habbit.dates = dates;
        await habit.save();
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error in habitController/toggleStatus', error);
        return res.redirect('/');
    }
}

// To delete Habbit
module.exports.deletehabbit = async function(req, res) {
    try {
        let id = req.params.id;

        await Habbit.findByIdAndDelete(id);

        req.flash('success', 'Habbit Deleted Successfully!!!');
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error in habitController/deletehabit', error);
        return res.redirect('back');
    }
}

//To edit Habbit
module.exports.edithabbit = async function(req, res) {
    
    try {
        let newTitle = req.body.title;
        let newDesc = req.body.desc;
        let id = req.params.id;

        let updatedResult = await Habbit.findByIdAndUpdate(
            {
                _id: id,
            }, {
                title: newTitle,
                desc: newDesc
            }
        );

        req.flash('success', 'Habbit Updated Successfully!');
        return res.redirect('back');
        
    } catch (error) {
        console.log('Error in habitController/edithabit', error);
        return res.redirect('back');
    }
}


// Return's Current Date
function getTodayDate(){
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;

    let fullDate = month + " " + date;
    return fullDate;
}