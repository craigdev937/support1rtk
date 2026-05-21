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
            const newTicket = await dBase.query<TType>(QRY, values);
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
            const tickets = await dBase.query<ITicket>(QRY);
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

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = `SELECT * FROM tickets WHERE id=$1`;
            const values = [id];
            const ticket = await dBase.query<TType>(QRY, values);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "Retrieved One Ticket!",
                    data: ticket.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error getting one Ticket!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    Update: express.Handler = async (req, res, next) => {
        try {
            const T = TSchema.parse(req.body);
            const { id } = req.params;
            const QRY = `UPDATE tickets SET userid=$1, product=$2, 
            description=$3, status=$4, updated_at=CURRENT_TIMESTAMP
            WHERE id=$5 RETURNING *`;
            const values = [T.userid, T.product, 
                T.description, T.status, id];
            const ticket = await dBase.query<TType>(QRY, values);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "The Ticket was Updated!",
                    data: ticket.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Updating a Ticket!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = "DELETE FROM tickets WHERE id=$1";
            const values = [id];
            const delTic = await dBase.query<TType>(QRY, values);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "The Ticket was Deleted!",
                    data: delTic.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Deleting a Ticket!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };
};

export const TICKET: TicketClass = new TicketClass();



