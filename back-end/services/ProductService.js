const Product = require('../models/Product');

exports.createProduct = async (data) => {
    let products = Product.find({});
    let id;
    if (products.length > 0) {
        const last_product_array = products.slice(-1);
        const last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const otherProduct = await Product.findOne({name: data.name});
    const fullData = {...data,id: id};
    if (otherProduct) throw NewError('Product already exsists !');
    const newProduct = new Product(fullData);
    await newProduct.save();
    return newProduct;
}

exports.getAllProducts = async () => {
    const allProducts = await Product.find({});
    return allProducts;
}