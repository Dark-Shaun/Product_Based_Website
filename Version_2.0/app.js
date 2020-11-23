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
    var totalPrice=0;
    var billProducts=[
        {
            productName:"Wireless Bluetooth Headphones",
            productPrice:10,
            productCategory:"Headphones"
        },
        {
            productName:"Wireless Bluetooth Headphones",
            productPrice:10,
            productCategory:"Headphones"
        },
        {
            productName:"Wireless Bluetooth Headphones",
            productPrice:10,
            productCategory:"Headphones"
        },
        
        
        {
            productName:"PromoCode",
            productPrice:5,
            productCategory:"CODE"
        }
    ]
    res.render('billing',{billProducts:billProducts,totalPrice:totalPrice});
})

app.post('/billing',(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const address=req.body.address;
    const country=req.body.country;
    const state = req.body.state;
    const zip=req.body.zip;
    const redeem=req.body.redeem;
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
    var product = {
        productImage:"https://demo.createx.studio/cartzilla/img/shop/catalog/58.jpg",
        productName: "Wireless Bluetooth Headphones",
        productDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, maxime quam ex aut quisquam, eaque reprehenderit doloribus eligendi earum corrupti vel ab facere iste ad recusandae ullam quaerat inventore vero?"
    }
    var reviews = [
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:2
        },
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:4
        },
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:1
        },
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:5
        },
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:4
        },
        {
            username:"Mark James",
            comment: "Nice product!",
            commentDate: "October 25, 2019",
            rating:3
        }

    ]
    res.render('individual',{product:product, reviews:reviews});
})

app.post('/productPage/product-name',(req,res)=>{

})

//To listen and start the server.
app.listen('3000',()=>{
    console.log('Started on 3000');
})

