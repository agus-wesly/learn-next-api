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
  }

  return new Promise<void>((resolve, reject) => {
    const { email, password } = req.body;

    const q = `SELECT pass FROM auth WHERE email="${email}"`;

    connection.query(q, async (error, data) => {
      if (error) {
        res.status(500).json({ msg: error.message });
        return reject("Server Error");
      } else if (data.length) {
        //Check password
        if (password === data[0].pass) {
          //Set a cookie
          const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days

          //Set JWT
          const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("2h")
            .sign(new TextEncoder().encode("dshdshdsh"));

          res.setHeader(
            "Set-Cookie",
            cookie.serialize("auth", token, {
              path: "/",
              sameSite: true,
              expires,
              httpOnly: true,
            })
          );
          res.status(200).json({ data });
          resolve();
        }

        res.status(401).json({ error: "Unauthorized" });
        return reject("Unauthorized");
      } else {
        res.status(400).json({ error: "Not Found" });
        return reject("Not found");
      }
    });
  });
}
