import { expect, test } from "@rstest/core";
import { hiKola } from "../components/Kola";
import { hiProf } from "../components/Henry";

test("should hiKola correctly", () => {
    expect(hiKola()).toBe("Kola Franklin");
});

test("should hiProf correctly", () => {
    expect(hiProf()).toBe("Henry Quartermain");
});



