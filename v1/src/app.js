const express = require("express");
const helmet = require("helmet");
const config = require("./config");
config();

const { ProjectRoutes } = require("./api-routes");

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_PORT} üzerinden çalışıyor`);
    app.use("/projects", ProjectRoutes.router);
});
