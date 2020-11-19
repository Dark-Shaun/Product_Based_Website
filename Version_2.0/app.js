const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


var products  = [
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/58.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/59.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/60.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/61.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/62.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/63.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/64.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    },
    {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/65.jpg",
        productCategory: "Headphones",
        productName: "Wireless Bluetooth Headphones"

    }
]




// Cover Page
app.get('/', (req, res)=>{
    res.render('cover', {products: products});
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
app.get('/productPage',(req,res)=>{
    res.render('product_page',{products: products});
})

app.post('/productPage',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page");
})

// cart 
app.get('/productPage/cart',(req,res)=>{
    res.render('cart',{products:products});
})

app.post('/productPage/cart',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page/cart");
})

//wishlist
app.get('/productPage/wishlist',(req,res)=>{
    res.render('wishlist',{products:products});
})

app.post('/productPage/wishlist',(req,res)=>{
    const subscribe_mail=req.body.subscribe_mail;
    const search = req.body.search;
    // console.log(search)
    res.redirect("/product-page/wishlist");
})

//Indiviual Product Page
app.get('/productPage/product-name',(req,res)=>{
    res.render('indiviual',{});
})
app.post('/productPage/product-name',(req,res)=>{

})

//To listen and start the server.
app.listen('3000',()=>{
    console.log('Started on 3000');
})

