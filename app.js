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
    const email_1=req.body.email_1;
    const email_2=req.body.email_2;
    const password_1 = req.body.password_1;
    const password_2 = req.body.password_2;
    const password_3 = req.body.password_3;
    const firstname=req.body.firstname;
    const lastname = req.body.lastname;
    const forgetpassword_email=req.body.forgetpassword_email;
    
    

    res.redirect("/login");
    
})


//  Sign up Page 
// app.get('/sign-up',(req,res)=>{
//     res.render('cover',{});
// })
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

//To listen and start the server.
app.listen('3000',()=>{
    console.log('Server is Started Sucessfully');
})

