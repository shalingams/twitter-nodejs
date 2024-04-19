import { getTwittes, createTwitte } from "../db/twitte";
import express from "express";

export const getAllTwittes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const twittes = await getTwittes();
    return res.status(200).json(twittes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const createUserTwitte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const twitte = await createTwitte(req.body);
    return res.status(200).json(twitte);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
