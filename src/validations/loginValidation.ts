import { Schema } from "express-validator";

export const loginValidation: Schema = {
  email: {
    isEmail: true,
    notEmpty: true,
    errorMessage: "Email inválido",
  },
  password: {
    notEmpty: true,
    errorMessage: "Senha inválida",
    isLength: {
      options: {
        min: 8,
      },
    },
  },
};
