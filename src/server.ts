import app from "./app";
import AppDataSource from "./data-source";

const PORT: number = Number(process.env.PORT) || 3333;

AppDataSource.initialize()
  .then((): void => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });
