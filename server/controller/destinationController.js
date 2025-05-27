const Destination = require('../model/destinationModel')

exports.getDestinations = async (req, res) => {
  const destinations = await Destination.find(); 
  res.json(destinations);
};
