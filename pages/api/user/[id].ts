import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../../config/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return new Promise<void>((resolve, reject) => {
      const { id } = req.query;

      const q = `SELECT * FROM users WHERE auth_id = ${id} LIMIT 1`;
      connection.query(q, (err, result) => {
        if (err || !result) {
          res.status(500).json({ error: "Server Error" });
          reject("Server Error");
        }

        if (!result.length) {
          res.status(404).json({ error: "Not Found" });
          return reject("Not found");
        }
        console.log("TES");

        res.status(200).json({ user: result[0] });
        resolve();
      });
    });
  }

  if (req.method === "PUT") {
    return new Promise<void>((resolve, reject) => {
      const { id } = req.query;

      const { name, email, age } = req.body;

      const q = `UPDATE users SET name = ?, email = ?, age = ? WHERE auth_id = ?`;

      connection.query(q, [name, email, age, id], (err, result) => {
        if (err) {
          res.status(500).json({ error: "Server error" });
          return reject("Server Error");
        }
        res.status(201).json({ message: "Updated" });
        resolve();
      });
    });
  }

  if (req.method === "DELETE") {
    return new Promise<void>((resolve, reject) => {
      const { id } = req.query;

      const q = `DELETE FROM users WHERE auth_id=?`;
      connection.query(q, [id], (err, result) => {
        if (err) {
          res.status(500).json({ error: "Server error" });
          return reject("Server Error");
        }
        res.status(204).json({ message: "Deleted" });
        resolve();
      });
    });
  }
}
