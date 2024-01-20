const { join } = require("path");
const { createOrUpdate, readAllUsers, getSingleUser } = require("./db");

const createUser = async (req, res) => {
   const { success, data } = await createOrUpdate(req.body);

   if(success){
    return res.json({success, data})
   }

   return res.status(500).json({success: false, message: 'Error'});
}

const getAllUsers = async(req, res) => {
   const { success, data } = await readAllUsers()

   if(success){
      return res.json({success, data})
   }
   return res.status(500).json({success: false, message: "Error"})
}


const getUser = async (req, res) => {
   const {id} = req.params
   console.log(id)
   const {success, data} = await getSingleUser(id)
   console.log(data);
   if(success){
      return res.json({success, data})
   }

   return res.status(500).json({ success: false, message: "Error"})
};

module.exports = { createUser, getAllUsers, getUser};