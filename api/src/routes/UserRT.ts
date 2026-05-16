import express from "express";
import { USER } from "../controllers/UserCTR.ts";
import { Val } from "../middleware/Validate.ts";
import { RSchema, LSchema } from "../validation/Schema.ts";

export const userRt: express.Router = express.Router();
    userRt.post("/users/register", Val(RSchema), USER.Register);
    userRt.post("/users/login", Val(LSchema), USER.Login);
    userRt.post("/users/logout", USER.Logout);
    userRt.get("/users", USER.FetchAll);




