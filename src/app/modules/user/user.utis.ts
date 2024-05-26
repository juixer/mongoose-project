import { TAcademicSemester } from '../academic/academic.interface';
import { UserModel } from './user.model';

const findLastStudentID = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generatedStudentID = async (payload: TAcademicSemester) => {
  // first time id
  const currentId = (await findLastStudentID()) || (0).toString();
  let incrementId = (parseInt(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
