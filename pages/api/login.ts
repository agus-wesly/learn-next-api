import { NextApiRequest, NextApiResponse } from "next";

import cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    //Set a cookie
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", "true", {
        path: "/",
        sameSite: true,
        expires,
      })
    );

    return res.status(200).json({ msg: "Loggged in" });
  }

  return res.status(404).json({ msg: "Not found" });
}
