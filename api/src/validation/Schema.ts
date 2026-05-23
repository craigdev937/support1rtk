import { z } from "zod";

export const RSchema = z.object({
    first: z.string().trim().min(2, {
        message: "There MUST be a First Name!"
    }).max(120, {
        message: "Max of 120 or Less!"
    }),
    last: z.string().trim().min(2, {
        message: "There MUST be a Last Name!"
    }).max(120, {
        message: "Max of 120 or Less!"
    }),
    email: z.email().trim().min(3, {
        message: "The Email is Required!"
    }),
    password: z.string().trim().min(6, {
        message: "Must be at least Six Characters!"
    }),
    isAdmin: z.boolean().default(false)
});

export const LSchema = z.object({
    email: z.email().trim().min(3, {
        message: "The Email is Required!"
    }),
    password: z.string().trim().min(6, {
        message: "Must be at least Six Characters!"
    })
});

export const TSchema = z.object({
    userid: z.number().min(1, {
        message: "The UserID is Required!"
    }),
    product: z.string().min(3, {
        message: "The Product is Required!"
    }),
    description: z.string().trim().min(3, {
        message: "Must be at least Three Characters!"
    }),
    status: z.string().min(3, {
        message: "Please list the Status!"
    }),
});

export const NSchema = z.object({
    userid: z.number().min(1, {
        message: "The UserID is Required!"
    }),
    ticketid: z.string().min(10, {
        message: "The TicketID is Required!"
    }),
    text: z.string().min(4, {
        message: "Please add some text!"
    }),
    isStaff: z.boolean()
});

export type RType = z.infer<typeof RSchema>;
export type TType = z.infer<typeof TSchema>;
export type NType = z.infer<typeof NSchema>;

// export type LType = z.infer<typeof LSchema>;
// I don't use LType, I use IUser to 
// provide all the User Data. 

