import { model, Schema } from 'mongoose';
import { TFaculty } from './faculty.interface';

const facultySchema = new Schema<TFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Faculty = model<TFaculty>('Academic-Faculty', facultySchema);
