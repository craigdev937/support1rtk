import { describe, it, expect } from "@rstest/core";
import request from "supertest";
import { app } from "../app.ts";

describe("Express App Integration Tests", () => {
    // Test 1: Testing your custom OPTIONS/CORS block
    it("should handle CORS OPTIONS preflight request", async () => {
        const response = await request(app)
            .options("/api")
            .set("Origin", "http://localhost:9000");

        expect(response.status).toBe(200);
        expect(response.headers["access-control-allow-origin"]).toBe("*");
        expect(response.body).toEqual({ "status message": "OK" });
    });

    // Test 2: Testing fallback for 404 middleware
    it("should return 404 for unknown endpoints", async () => {
        const response = await request(app)
            .get("/api/invalid-route-path");

        expect(response.status).toBe(404);
    });

    // Test 3: Example structural test for your userRt routes
    // (Replace '/users' with a valid route defined in your UserRT.ts file)
    it("should parse JSON payloads on API routes", async () => {
        const response = await request(app)
            .post("/api/users") 
            .send({ username: "testuser" })
            .set("Accept", "application/json");

        // Adapt this assertion depending on what your route actually returns
        expect(response.headers["content-type"]).toMatch(/json/);
    });
});


