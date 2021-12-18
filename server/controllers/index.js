const BodyPart = require('../models/index');
const Injury = require('../models/index');

const getAllBodyPart = async (req, res) => {
  try {
    const parts = await BodyPart.find();
    return res.status(201).json(parts);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllInjury = async (req, res) => {
  try {
    const injuries = await Injury.find();
    return res.status(201).json(injuries);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//getBodyPartById
//getInjuryById

module.exports = {
  getAllBodyPart,
  getAllInjury
};
