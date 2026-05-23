import express from "express";
import { NOTE } from "../controllers/NoteCTR.ts";
import { PRO } from "../middleware/Auth.ts";

export const noteRt: express.Router = express.Router();
    noteRt.post("/notes", PRO, NOTE.Create);
    noteRt.get("/notes", PRO, NOTE.FetchAll);




