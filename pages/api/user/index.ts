import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../../config/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return new Promise<void>((resolve, reject) => {
      const { name, location, role, salary, image } = req.body;

      try {
        connection.query(
          "INSERT INTO users (`user_name`, `location`, `role`, `salary`, `image`) VALUES (?,?,?,?,?)",
          [name, location, role, salary, image],
          (error, results, fields) => {
            if (error) {
              console.error(error);

              res.status(500).json({ msg: error.message });
              return reject("Server Error");
            }

            res
              .status(201)
              .json({ newUser: { name, location, role, salary, image } });
            resolve();
          }
        );
      } catch (error) {
        res.status(500).json({ error });
        return reject("Server Error");
      }
    });
  }

  if (req.method === "GET") {
    return new Promise<void>((resolve, reject) => {
      const q = "SELECT * FROM users";
      connection.query(q, (err, data) => {
        if (err) {
          res.status(500).json("Error");
          return reject("Server Error");
        }

        res.status(200).json({ data });
        resolve();
      });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
