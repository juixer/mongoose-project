import { TFaculty } from './faculty.interface';
import { Faculty } from './faculty.model';

const createFacultyIntoDB = async (payload: TFaculty) => {
  const result = await Faculty.create(payload);
  return result;
};

const getAllFacultiesFromDB = async () => {
  const result = await Faculty.find();
  return result;
};

const getSingleFacultyFromDB = async (id: string) => {
  const result = await Faculty.findById(id);
  return result;
};

const updateFacultyIntoDB = async (facultyId: string, payload: TFaculty) => {
  const result = await Faculty.findByIdAndUpdate(
    facultyId,
    payload,
    { new: true },
  );
  return result;
};

export const FacultyService = {
  createFacultyIntoDB,
  getAllFacultiesFromDB,
  getSingleFacultyFromDB,
  updateFacultyIntoDB,
};
