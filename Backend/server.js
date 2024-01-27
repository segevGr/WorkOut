const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => {
    console.log(`Database connected successfully`);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });

const menuBankListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: true,
  },
  category: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  //   also can set default value by:
  // default: "some value"
});

const MenuBankList = mongoose.model("MenuBankList", menuBankListSchema);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
