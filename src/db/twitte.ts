import mongoose from "mongoose";

const TwitteSchema = new mongoose.Schema({
  twitte: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  likes_count: {
    type: Number,
    default: 0,
  },
  retwitte_count: {
    type: Number,
    default: 0,
  },
  send_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const TwitteModel = mongoose.model('Twitte', TwitteSchema)

export const getTwittes = () => TwitteModel.find();
export const getTwittesByUserId = (user_id: string) =>
  TwitteModel.find({ user_id: user_id });
export const getTwitteById = (id: string) => TwitteModel.findById(id);

export const createTwitte = (values: Record<string, any>) => new TwitteModel(values);
export const updateTwitteById = (id: string, values: Record<string, any>) => TwitteModel.findByIdAndUpdate(id, values);
export const deleteTwitteById = (id: string) => TwitteModel.findByIdAndDelete(id);
