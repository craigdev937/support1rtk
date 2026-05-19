import express from "express";
import { TICKET } from "../controllers/TicketCTR.ts";
import { PRO } from "../middleware/Auth.ts";
import { Val } from "../middleware/Validate.ts";
import { TSchema } from "../validation/Schema.ts";

export const ticketRt: express.Router = express.Router();
    ticketRt.post("/tickets", PRO, Val(TSchema), TICKET.Create);
    ticketRt.get("/tickets", TICKET.FetchAll);



