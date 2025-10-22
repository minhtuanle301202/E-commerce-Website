const ProductService = require('../services/ProductService');

exports.createProduct = async (req,res) => {
    try {
        const result = await ProductService.createProduct(req.body);
        res.status(200).json({message: 'Create Product Successfully',
            product: result
        })
    } catch(err) {
        res.status(400).json({message: err.message});
    }
}

exports.getAllProducts = async (req,res) => {
    try {
        const allProducts = ProductService.getAllProducts();
        res.status(200).json(allProducts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}