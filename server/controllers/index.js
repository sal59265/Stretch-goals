const { BodyPart, Injury } = require('../models/index');

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

const getBodyPartById = async (req, res) => {
  try {
    const { id } = req.params;
    const part = await BodyPart.findById(id);
    if (part) {
      return res.status(200).json({ part });
    }
    return res.status(404).send('Part with the specified Id does not exist.');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getInjuryById = async (req, res) => {
  try {
    const { id } = req.params;
    const injury = await Injury.findById(id);
    if (injury) {
      return res.status(200).json({ injury });
    }
    return res.status(404).send('Injury with the specified Id does not exist.');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createInjury = async (req, res) => {
  try {
    const injury = await new Injury(req.body);
    await injury.save();
    return res.status(201).json({
      injury
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateInjury = async (req, res) => {
  try {
    const { id } = req.params;
    await Injury.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, injury) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!injury) {
          res.status(500).send('Injury not found!');
        }
        return res.status(200).json(injury);
      }
    );
  } catch (error) {
    // return res.status(500).send(error.message);
  }
};

const deleteInjury = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Injury.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Injury deleted');
    }
    throw new Error('Injury not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBodyPart,
  getAllInjury,
  getBodyPartById,
  getInjuryById,
  createInjury,
  updateInjury,
  deleteInjury
};
