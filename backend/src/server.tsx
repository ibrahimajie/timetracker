const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json()); // parses incoming requests with JSON payloads

//create connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //password
    database: process.env.DB, //ravenbooks
});

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

app.get("/timer", (req: any, res: { send: (arg0: any) => void; }) => {
    db.query("SELECT * FROM timer ORDER BY id DESC", (err: any, result: any) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/timer", (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
    const insertQuery = "INSERT IGNORE INTO timer SET ?";
    db.query(insertQuery, req.body, (err: any, result: any) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Review Added to Database");
        }
    });
});

// SELECT id, project, issue, agent, seconds, SEC_TO_TIME(seconds) AS time FROM timetracker.timer;

app.put("/timer", (req: { body: { project: any; issue: any; agent: any; time: any; seconds: any; start: any; end: any; pay: any; bill: any; id: any; }; }, res: { send: (arg0: any) => void; }) => {
    const updateQuery =
        "UPDATE timer SET project = ?, issue = ?, agent = ?, time = ?, seconds = ?, start = ?, end = ?, pay = ?, bill = ? WHERE id = ?";
    db.query(
        updateQuery,
        [req.body.project, req.body.issue, req.body.agent, req.body.time, req.body.seconds, req.body.start, req.body.end, , req.body.pay, req.body.bill, req.body.id],
        (err: any, result: any) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/timer/:id", (req: { params: { id: any; }; }, res: { send: (arg0: any) => void; }) => {
    db.query(
        "DELETE FROM timer WHERE id = ?",
        req.params.id,
        (err: any, result: any) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});