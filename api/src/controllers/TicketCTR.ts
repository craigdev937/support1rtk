import express from "express";
import { dBase } from "../data/Database.ts";
import { TSchema } from "../validation/Schema.ts";
import type { TType } from "../validation/Schema.ts";
import type { ITicket } from "../models/Interfaces.ts";

class TicketClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const T = TSchema.parse(req.body);
            const QRY = `INSERT INTO tickets 
            (userid, product, description, status) 
            VALUES ($1, $2, $3, $4) RETURNING *`;
            const values = [T.userid, T.product, 
                T.description, T.status];
            const newTicket = await dBase.query<ITicket>(QRY, values);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "The Ticket was Created!",
                    data: newTicket.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error creating the Ticket!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = "SELECT * FROM tickets ORDER BY id ASC";
            const tickets = await dBase.query<ITicket[]>(QRY);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "All Tickets!",
                    count: tickets.rows.length,
                    data: tickets.rows
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error creating the Ticket!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };
};

export const TICKET: TicketClass = new TicketClass();



