import { Router } from "express";
import { login } from "../../controllers/UserController";

const authRoutes = Router();
// TODO Criar método de login
authRoutes.post("/login", login);

export { authRoutes };
