const express=require("express");
const bodyParser=require("body-parser"); 
const date=require(__dirname+"/date.js");

const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["Wash Clothes"];
let workItem=[];

app.get("/",function(req,res){

    let day=date.getDate();

    // let currDay=today.getDay();
    // let day="";

    // switch(currDay){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;        
    //     case 4:
    //         day="Thursday";
    //         break;        
    //     case 5:
    //         day="Friday";
    //         break;        
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default:
    //         day="Invalid Day"
    //         break;
        
    // }
    res.render('list', {Titles: day,newListItem: items});
});

app.post("/",function(req,res)
{
    let item=req.body.newItem;

    if(req.body.list==="Work")
    {
        workItem.push(item);
        res.redirect("/work");   
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render('list', {Titles: "Work",newListItem: workItem});
});


app.get("/about",function(req,res){
    res.render('about', {Titles: "Work",newListItem: workItem});
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000");
});