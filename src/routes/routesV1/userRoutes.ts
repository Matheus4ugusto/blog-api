import { Router } from "express";
import * as userController from "../../controllers/UserController";
import { requestValidation } from "../../middlewares/requestValidation";
import { createUser } from "../../validations/createUser";
import { apiAuth } from "../../middlewares/apiAuth";

const userRoutes = Router();

userRoutes.post(
  "/users",
  requestValidation(createUser),
  userController.saveUser
);
userRoutes.get("/users", apiAuth, userController.getUsers);
userRoutes.get("/users/:id", apiAuth, userController.getUser);

export { userRoutes };
