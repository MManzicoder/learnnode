const {  User } = require('../model/userModel');
const { ValidateUser } = require('../controllers/validate');

 const getUsers = async (req, res, next)=>{
    try {
       const users = await User.find({}).select("-password");
       return res.status(200).json({ users});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}
 const createUser = async (req, res, next)=>{
    const {firstName, lastName, email, phone, password}= req.body;
 
    const { error } = ValidateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
     await new User({ 
         firstName,
         lastName,
         email,
         phone,
         password
      }).save();

 return res.status(201).json({msg: "successfully created your account!!!!!"});

}

 const updateUser = async (req, res, next)=>{
    
try {
   const { error } = ValidateUser(req.body);
   if(error) return res.status(400).json({msg: error.details[0].message});
   await User.findOneAndUpdate({_id: req.params.id}, req.body,{new: true} );

   return res.json({msg: "Updated your info"});

} catch (err) {
    return res.status(500).json({msg: err.message});
}
}

 const deleteUser = async (req, res, next)=>{
    const { id } = req.params;
  try {
    await User.findOneAndDelete({_id: id}, (err, user)=>{
        if(err) throw err;
    return res.status(200).json({msg: `${user.firstName} You have deleted your account !`});
    })
  } catch (err) {
      return res.status(500).json({msg: err.message});
  }
}

module.exports={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}