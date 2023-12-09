import express from "express";
import "reflect-metadata";
import "express-async-errors";

import {
  userRoutes,
  categoryRoutes,
  propertyRoutes,
  scheduleRoutes,
  sessionRoutes,
} from "./routes";
import { handleError } from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoryRoutes);
app.use("/properties", propertyRoutes);
app.use("/schedules", scheduleRoutes);

app.use(handleError);

export default app;
