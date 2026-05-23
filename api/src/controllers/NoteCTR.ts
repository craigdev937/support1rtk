import express from "express";
import { dBase } from "../data/Database.ts";
import { NSchema } from "../validation/Schema.ts";
import type { NType } from "../validation/Schema.ts";
import type { INote } from "../models/Interfaces.ts";

class NoteClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const N = NSchema.parse(req.body);
            const QRY = `INSERT INTO notes 
            (userid, ticketid, text, isStaff) 
            VALUES ($1, $2, $3, $4) RETURNING *`;
            const values = [N.userid, N.ticketid, N.text, N.isStaff];
            const newNote = await dBase.query<NType>(QRY, values);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "The Note was Created!",
                    data: newNote.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error creating the Note!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = "SELECT * FROM notes ORDER BY noteid ASC";
            const notes = await dBase.query<INote>(QRY);
            return res
                .status(201)
                .json({
                    success: true,
                    message: "All Notes!",
                    count: notes.rows.length,
                    data: notes.rows
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error fetching all notes!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            next(error);
        }
    };
};

export const NOTE: NoteClass = new NoteClass();




