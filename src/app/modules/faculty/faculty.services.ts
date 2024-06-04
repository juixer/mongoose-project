import { TFaculty } from './faculty.interface';
import { Faculty } from './faculty.model';

const getAllFacultiesFromDB = async () => {
  const result = await Faculty.find();
  return result;
};

const getSingleFacultyFromDB = async (id: string) => {
  const result = await Faculty.findById(id);
  return result;
};

const updateFacultyIntoDB = async (id: string, payload: TFaculty) => {
  const result = await Faculty.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const FacultyServices = {
  getAllFacultiesFromDB,
  getSingleFacultyFromDB,
  updateFacultyIntoDB,
};
