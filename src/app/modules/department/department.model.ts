import { model, Schema } from 'mongoose';
import { TDepartment } from './department.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const departmentSchema = new Schema<TDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Academic-Faculty',
    },
  },
  {
    timestamps: true,
  },
);

departmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await Department.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(httpStatus.CONFLICT, 'Department Already Exist');
  }
  next();
});

departmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExist = await Department.findById(query);
  if (!isDepartmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Department ID is not valid');
  }
  next();
});

export const Department = model<TDepartment>(
  'Academic-Department',
  departmentSchema,
);
