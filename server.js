import "dotenv/config";
import express from "express";
import db from "./config/config.js";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import vehicleTypeRouter from "./routes/vehicleType.route.js";
import vehicleBrandRouter from "./routes/vehicleBrand.route.js";
import vehicleModelRouter from "./routes/vehicleModel.route.js";
import vehicleYearRouter from "./routes/vehicleYear.route.js";
import pricelistRouter from "./routes/pricelist.route.js";

//sekali pake aja
// import "./models/user.model.js";
// import "./models/priceList.model.js";
// import "./models/vehicleBrand.model.js";
// import "./models/vehicleModel.model.js";
// import "./models/vehicleType.model.js";
// import "./models/vehicleYear.model.js";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use("/users", userRouter);
app.use("/authentication", authRouter);
app.use("/vehicle-types", vehicleTypeRouter);
app.use("/vehicle-brands", vehicleBrandRouter);
app.use("/vehicle-models", vehicleModelRouter);
app.use("/vehicle-years", vehicleYearRouter);
app.use("/pricelists", pricelistRouter);

db.sync() //{alter: true}
  .then(() => {
    // Jalankan server
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
