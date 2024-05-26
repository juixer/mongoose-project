import { semesterCodeMapper } from './academic.constant';
import { TAcademicSemester } from './academic.interface';
import { AcademicSemester } from './academic.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // semester name --> semester code

  if (semesterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

// get single semester
const getSingleAcademicSemesterFromFB = async (semesterId: string) => {
  const result = await AcademicSemester.findById(semesterId);
  return result;
};

// update academic semester
const updateAcademicSemesterFromDB = async (
  semesterId: string,
  payload: TAcademicSemester,
) => {
  if (semesterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }
  const result = await AcademicSemester.findByIdAndUpdate(semesterId, payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromFB,
  updateAcademicSemesterFromDB,
};