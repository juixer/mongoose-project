import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academic.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academic.constant';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, required: true, enum: AcademicSemesterName },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    startMonth: { type: String, required: true, enum: Months },
    endMonth: { type: String, required: true, enum: Months },
  },
  {
    timestamps: true,
  },
);

AcademicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if(isSemesterExists){
    throw new AppError(httpStatus.CONFLICT,'Semester already exists')
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);
