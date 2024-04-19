import {
  getTwittes,
  createTwitte,
  getTwittesByUserId,
  getTwitteById,
  updateTwitteById,
  deleteTwitteById,
} from "../db/twitte";
import express from "express";

export const deleteTwitte = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    await deleteTwitteById(id);
    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export const updateTwitte = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const twitte = await updateTwitteById(id, req.body);
    return res.status(200).json(twitte);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export const getTwitte = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const twitte = await getTwitteById(id);
    return res.status(200).json(twitte);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export const getTwittesByUser = async (req: express.Request, res: express.Response) => {
  try {
    const { user_id } = req.params;
    const twittes = await getTwittesByUserId(user_id);
    return res.status(200).json(twittes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
    
  }
}

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
