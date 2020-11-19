const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));




// Cover Page
app.get('/', (req, res)=>{
    res.render('cover',{});
}) 

app.post('/',(req,res)=>{
    let subscribe_mail=req.body.subscribe_mail;
    // console.log(subscribe_mail);
    res.redirect("/");
})


// Log in Page 
app.get('/login',(req,res)=>{
    res.render('login',{});
})

app.post("/login",(req,res)=>{
      
})


//Sign Up Page
app.get('/signup',(req,res)=>{
    res.render('signup',{});
})

app.post("/signup",(req,res)=>{
      
})

//Forgot Password
app.get('/fpassword',(req,res)=>{
    res.render('fpassword',{});
})

app.post("/fpassword",(req,res)=>{
      
})


// Pricing Page 
app.get('/pricing',(req,res)=>{
    res.render('pricing',{});
})

app.post('/pricing',(req,res)=>{
    let subscribe_mail=req.body.subscribe_mail;
    
    res.redirect("/pricing");
})
// Billing Page
app.get('/billing',(req,res)=>{
    res.render('billing',{});
})

app.post('/billing',(req,res)=>{
    // let subscribe_mail=req.body.subscribe_mail;
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const address=req.body.address;
    const country=req.body.country;
    const state = req.body.state;
    const zip=req.body.zip;
    const redeem=req.body.redeem;
    // console.log(fname)
    // console.log(lname)
    // console.log(email)
    // console.log(address)
    // console.log(country)
    // console.log(state)
    // console.log(zip)
    // res.redirect();
    res.redirect("/billing");
})




// Product Page
app.get('/product-page',(req,res)=>{
    res.render('product_page',{});
})

app.post('/product-page',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page");
})

// cart 
app.get('/product-page/cart',(req,res)=>{
    res.render('cart',{});
})

app.post('/product-page/cart',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page/cart");
})

//wishlist
app.get('/product-page/wishlist',(req,res)=>{
    res.render('wishlist',{});
})

app.post('/product-page/wishlist',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page/wishlist");
})

//Indiviual Product Page
app.get('/product-page/product-name',(req,res)=>{
    res.render('indiviual',{});
})
app.post('/product-page/product-name',(req,res)=>{

})

//To listen and start the server.
app.listen('4000',()=>{
    console.log('Server is Started Sucessfully');
})

