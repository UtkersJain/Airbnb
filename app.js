const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const Listing = require("./models/listing.js") ; 
const path = require("path") ;
const methodOverride = require('method-override') ;
const ejsMate = require("ejs-mate") ;

const port = 8080 ;

app.listen(port , () => {
    console.log("App started") ;
})

let MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust" ;

main()
    .then(() => {
        console.log("Connected to DB") ;
    })
    .catch((err) => {
        console.log(err) ;
    }) ;

async function main() {
    await mongoose.connect(MONGO_URL) ;
}

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname , "views")) ;
app.use(express.urlencoded({extended:true})) ;
app.use(methodOverride('_method')) ;
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public"))) ;

app.get("/" , (req,res) => {
    res.send("Page Open"); 
})

//INDEX route
app.get("/listings" , async (req,res) => {
    const allListings =  await Listing.find({}) ;
    res.render("listings/index.ejs" , {allListings}) ;
}) ;


// NEW ROUTE
app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs") ;
}) ;

app.post("/listings" , (req,res) => {
    // let {title , description , image , price , location , country} = req.body ;
    // const data = new Listing({
    //     title: title , description: description , image: image , price: price , location: location , country: country
    // }) ;
    let listing = req.body.listing ;
    const data = new Listing(listing) ;
    data.save()
        .then(() => {
            console.log("data saved") ;
            res.redirect("/listings") ;
        })
        .catch((err) => {
            console.log(err) ;
        }) ;
}) ;

// SHOW ROUTE
app.get("/listings/:id" , async (req,res) => {
    let {id} = req.params ;
    let listing = await Listing.findById(id) ;
    res.render("listings/show.ejs" , {listing}) ;
}) ;

// EDIT ROUTE
app.get("/listings/:id/edit" , async (req , res) => {
    let {id} = req.params ;
    let listing = await Listing.findById(id) ;
    res.render("listings/edit.ejs" , {listing}) ;

})

app.put("/listings/:id" , async (req,res) => {
    let {id} = req.params ;
    let listing = req.body.listing ;
    await Listing.findByIdAndUpdate(id , listing) ;
    res.redirect(`/listings/${id}`) ;
})

// DELETE ROUTE
app.delete("/listings/:id" , async (req,res) => {
    let {id} = req.params ;
    await Listing.findByIdAndDelete(id) ;
    res.redirect("/listings") ;
})




// app.get("/testListing" , async (req,res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa" ,
//         description: "By the beach" ,
//         price: 1200 ,
//         location: "Mumbai , Maharahstra" ,
//         country: "India"
//     }) ;

//     await sampleListing.save() ;
//     console.log("Sample saved") ;
//     res.send("Data saved") ;
// }) ;


