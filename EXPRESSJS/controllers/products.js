const Product = require('../models/product');

exports.getAddProduct= (req, res, next)=>{ 
    
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: 'Add Product' , path: '/admin/add-product'});
    
}

exports.postNewProduct=(req, res, next)=>{
    // console.log(req.body)
    // products.push({title:req.body.title})
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
};

exports.getProduct= (req, res, next) => {
  // const products = adminData.products;
 Product.fetchAll((products)=>{
    
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });

  })
    
  };

// const Product = require('../models/product');

// exports.getAddProduct = (req, res, next) => {
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',

//   });
// };

// exports.postAddProduct = (req, res, next) => {
//   const product = new Product(req.body.title);
//   product.save();
//   res.redirect('/');
// };

// exports.getProduct = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/',
//       hasProducts: products.length > 0,

//     });
//   });
// };