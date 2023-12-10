require("express-async-errors");
const AppError = require("./utils/AppError");

const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    console.log(error);
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "Error",
    message: "Internal server error",
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta s ${PORT}`));
