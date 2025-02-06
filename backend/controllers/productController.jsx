const ProductModel = require("../models/productModel.jsx");

// Get All products - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        },
      }
    : {};

  const products = await ProductModel.find(query);

  res.json({
    succes: true,
    message: "Get Products working...",
    products,
  });
};

// Get Single products - /api/v1/products:id
exports.getSingleProduct = async (req, res, next) => {
  console.log(req.params.id, "ID");

  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      succes: true,
      message: "Get Single Product working...",
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
};
