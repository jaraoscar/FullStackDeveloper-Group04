import { Request, Response, NextFunction, Application } from 'express'
import express = require("express")

const app: Application = express()

app.get("/", (req: Request, res: Response) => {

    res
        .status(200)
        .type("text/plain")
        .send("Todo Ok")
})

app.listen(4000, () => console.log("Servidor ejecutándose"))
