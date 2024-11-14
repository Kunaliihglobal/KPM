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
    if(req.query){
      data = await keysModel.find(req.query);
    }else{
      data = await keysModel.find();
    }
    if (data.length) {
      res.status(200).json({ data: data });
    } else {
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
};

exports.update = async(req,res)=>{
try{
  console.log(req.query,req.body)
  const data = await keysModel.updateOne(req.query,req.body,{new:true})
  if (data) {
    res.status(200).json({ data: data });
  } else {
    res.status(200).json({ data: data });
  }
}catch(err){
  res.status(500).json({ errors: err.message });
}
}
