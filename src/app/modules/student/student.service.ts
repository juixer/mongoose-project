import mongoose from 'mongoose';
import { StudentModel } from './student.model';
import AppError from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import httpStatus from 'http-status';
import { Student } from './student.interface';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'faculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const isStudentExist = await StudentModel.findOne({ id: id });

  if (!isStudentExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Student id is not valid');
  }

  const result = await StudentModel.findOne({ id: id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'faculty',
      },
    });
  return result;
};

const updateStudentIntoDB = async (id: string, payload: Partial<Student>) => {
  const isStudentExist = await StudentModel.findOne({ id: id });
  if (!isStudentExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Student id is not valid');
  }
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await StudentModel.findOneAndUpdate(
    { id: id },
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true
    },
  )
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'faculty',
      },
    });
  return result;
};

const deletedStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  const isStudentExist = await StudentModel.findOne({ id: id });

  if (!isStudentExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Student id is not valid');
  }

  try {
    session.startTransaction();

    const deletedStudent = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
  }
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deletedStudentFromDB,
  updateStudentIntoDB,
};
