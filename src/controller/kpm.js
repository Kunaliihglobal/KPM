const fs = require("fs");
const keysModel = require("../model/kpm_model");

exports.add = async (req, res) => {
  try {
    const {
      title,
      type,
      repository,
      token,
      project,
      username,
      password,
      Keys,
      url,
      document,
      email,
    } = req.body;
    const data = await keysModel.create({
      title: title,
      type: type,
      repository: repository,
      token: token,
      project: project,
      username: username,
      password: password,
      Keys: Keys,
      url: url,
      document: document,
      email: email,
    });
    if (data) {
      res.status(201).json({ message: "creads are created", data: data });
    } else {
      res.status(502).json({ message: "creads are created", data: data });
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
};

exports.getAndGetAll = async (req, res) => {
  try {
    let data 
    const queryObj = req.query;
    let searchQuery = {};
    for (let query in queryObj) {
      if (queryObj[query]) {
        searchQuery[query] = { $regex: queryObj[query], $options: "i" };
      }
    }
    if (Object.keys(searchQuery).length > 0) {
      console.log(searchQuery)
      data = await keysModel.find(searchQuery);
    } else {
      data = await keysModel.find();
    }

    if (data.length) {
      res.status(200).json({ data });
    } else {
      res.status(200).json({ data: [] });
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const {id} = req.query
    const data = await keysModel.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      const data = await keysModel.find(req.query)
      res.status(200).json({ data: data });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
};

exports.deleteKPM =async(req,res)=>{
  try{
    const { id } = req.query
    const data = await keysModel.findByIdAndDelete(id);
    if (data) {
      res.status(200).json({ data: data,message:"deleted successfully" });
    } else {
      res.status(200).json({ data: data });
    }
  }catch (err) {
    res.status(500).json({ errors: err.message });
  }
}
