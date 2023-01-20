const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items= ["Buy Food" , "Cook Food" , "Eat Food" ];
let workitems = [];

app.set("view engine", "ejs"); // to use the template part


app.use(bodyParser.urlencoded({extended:true})); // body parser ko use krne ko liye  

app.use(express.static("public"));  // static material ko show krne k liye

 
app.get("/" , function(req ,res)
{
    // res.send("Hello World");

    var today = new Date();

    // var currentday = today.getDay();

    // var day="";

    var options ={
        weekday : "long" , 
        day:"numeric",
        month:"long"
    };

  var day = today.toLocaleDateString("en-US" , options);

    // if(currentday===6 || currentday===0)
    // {
    // day="weekend";
   
    // } 
    // else
    // {   
    //     day="weekday";
       
    // }

    // switch (currentday) {
    //     case 0:
    //     day="Sunday";
    //     break;

    //     case 1:
    //     day="Monday";
    //     break;

    //     case 2:
    //     day="Tuesday";
    //     break;

    //     case 3:
    //     day="Wednesday";
    //     break;

    //     case 4:
    //     day="Thursday";
    //     break;

    //     case 5:
    //     day="Friday";
    //     break;

    //     case 6:
    //     day="Saturday";
    //     break;
    
    //     default:
    //     console.log("Error : current day is equal to : " + currentday);
    //     break;
    // }
    res.render("list" , {listTitle: day , newListItems:items});
});


app.post("/" , function(req ,res)
{
   //  item  =req.body.newItem;
    let item = req.body.newItem;

    // if(req.body.list==="Work")
    // {
    //     workitems.push(item);
    //     res.redirect("/work");
    // }
    // else
    // {
    //     items.push(item);
    //     res.redirect("/");
    // }
 
   items.push(item);  
   res.redirect("/");
   
});

// app.get("/work" , function(req ,res)
// {
//     res.render("list" , {listTitle: "Work List" , newListItems :workitems})
// });

// app.post("/work" , function(req ,res)
// {  
     
//     let item = req.body.newItem;
//     workitems.push(item);
//     res.redirect("/work");
// }); 

app.listen(3000 , function()
{
    console.log("Server on port 3000 is running");
});


// make front end 
// make back end
// connect front end and backend using public view and ejs and connect database
