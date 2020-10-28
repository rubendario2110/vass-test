"use strict";

const request = require("supertest");
const app = require("../app");

describe("test enpoints", () => {
  it("login", async () => {
    const res = await request(app).post("/login").send({
      email: "rubendnaranjo@hl.com",
      password: "rubendario21",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("userBySedes", async () => {
    const res = await request(app).get("/userBySedes").send({
      sede: 1,
    });
    expect(res.statusCode).toEqual(200);
  });
  it("registerCiudad", async () => {
    const res = await request(app).post("/registerCiudad").send({
      nombre: "Bogota"
    });
    expect(res.statusCode).toEqual(500);
  });
});
