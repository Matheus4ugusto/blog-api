import { Router } from "express";
import { login } from "../../controllers/UserController";
import { requestValidation } from "../../middlewares/requestValidation";
import { loginValidation } from "../../validations/loginValidation";

const authRoutes = Router();

authRoutes.post("/login", requestValidation(loginValidation), login);

export { authRoutes };
