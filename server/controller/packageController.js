const Package = require('../model/packageModel');

exports.getTopSellingPackages = async (req, res) => {
  const packages = await Package.find(); 
  res.json(packages);
};
