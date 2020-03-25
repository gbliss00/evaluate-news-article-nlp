import {
    handleSubmit
} from "./formHandler";

test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
});

test("It shoul dbe a function", async () => {
    expect(typeof handleSubmit).toBe("function");
});