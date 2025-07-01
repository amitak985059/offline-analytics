import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ILog extends Document {
  event: string; // e.g., 'SCROLL_TO_TOP_CLICKED'
  meta?: Map<string, string>; // optional
  event_category: string; // e.g., 'Interaction'
  event_label: string; // e.g., 'Scroll Top Button'
  value: number; // e.g., 1
  session_id: string; // unique per user session
}

const LogSchema = new Schema<ILog>(
  {
    event: { type: String, required: true },
    meta: {
      type: Map,
      of: String,
      required: false,
    },
    event_category: { type: String, required: true },
    event_label: { type: String, required: true },
    value: { type: Number, required: true },
    session_id: { type: String, required: true },
  },
  { timestamps: true }
);

export const Log = models.Log || model<ILog>('Log', LogSchema);
