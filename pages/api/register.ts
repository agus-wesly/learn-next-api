import { NextApiRequest, NextApiResponse } from "next";
import { SignJWT } from "jose";
import { connection } from "../../config/db";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ msg: "Method not allowed" });
    return;
  }

  return new Promise<void>((resolve, reject) => {
    const { email, password, name } = req.body;

    const q =
      "INSERT INTO auth (`email`,`pass`,`created_at`) values(?,?,now())";

    connection.query(q, [email, password, name], (error, results, fields) => {
      if (error) {
        console.error(error);

        res.status(500).json({ msg: error.message });
        return reject("Server Error");
      }

      res.status(201).json({ message: "Created !" });
      resolve();
    });
  });
}
