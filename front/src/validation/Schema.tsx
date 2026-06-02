import { z } from "zod";

export const RSchema = z.object({
    first: z.string().trim().min(2).max(120, {
        message: "Max of 120 or Less!"
    }),
    last: z.string().trim().min(2).max(120, {
        message: "Max of 120 or Less!"
    }),
    email: z.email().trim().min(3, {
        message: "The Email is Required!"
    }),
    password: z.string().trim().min(6, {
        message: "Must be at least Six Characters!"
    }),
    confirmPassword: z.string(),
    isAdmin: z.boolean().default(false)
}).refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not Match!",
    path: ["confirmPassword"],
});

export type RType = z.infer<typeof RSchema>;



