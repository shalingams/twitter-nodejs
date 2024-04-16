import { createUser, getUserByUsernameOrEmail } from "../db/users";
import express from 'express';
import { authentication, random } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {

  try {
    const { email, password, username, name } = req.body;
    if (!email || !password || !username || !name) {
      return res.sendStatus(400);
    }
    
    const existingUser = await getUserByUsernameOrEmail(username, email);
    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      name,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
