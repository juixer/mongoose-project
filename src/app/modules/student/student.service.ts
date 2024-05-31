import { StudentModel } from './student.model';

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
  const result = await StudentModel.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'faculty',
      },
    });
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
