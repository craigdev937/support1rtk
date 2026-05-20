import express from "express";
import { TICKET } from "../controllers/TicketCTR.ts";
import { PRO } from "../middleware/Auth.ts";
import { Val } from "../middleware/Validate.ts";
import { TSchema } from "../validation/Schema.ts";

// All Routes are Protected.  User must be logged in.
export const ticketRt: express.Router = express.Router();
    ticketRt.post("/tickets", PRO, Val(TSchema), TICKET.Create);
    ticketRt.get("/tickets", PRO, TICKET.FetchAll);
    ticketRt.get("/tickets/:id", PRO, TICKET.GetOne);
    ticketRt.put("/tickets/:id", PRO, TICKET.Update);


