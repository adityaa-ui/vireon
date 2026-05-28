const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  await User.deleteMany();

  await User.create([
    {
      username: "admin",
      password: "123",
      role: "Admin"
    },
    {
      username: "user",
      password: "123",
      role: "General User"
    }
  ]);

  console.log("Dummy Users Added");

  process.exit();

})
.catch((err) => {
  console.log(err);
});