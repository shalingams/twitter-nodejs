import express from 'express';

import { deleteUserById, getUsers, getUserById } from "../db/users";
import { get } from 'lodash';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: express.Request, res: express.Response) => { 
  try {
    const { id } = req.params;
    const { username, email, name } = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.sendStatus(400);
    }

    user.username = username;
    user.email = email;
    user.name = name;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
