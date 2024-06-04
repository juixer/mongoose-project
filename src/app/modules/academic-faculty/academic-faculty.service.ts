import { TAcademicFaculty } from './academic-faculty.interface';
import { AcademicFaculty } from './academic-faculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  facultyId: string,
  payload: TAcademicFaculty,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate(facultyId, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
