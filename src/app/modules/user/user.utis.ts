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
  return lastStudent?.id ? lastStudent.id : undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generatedStudentID = async (payload: any) => {
  // first time id
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentID();
  const lastStudentSemesterCode = lastStudentId?.substring(4,6);
  const lastStudentYear = lastStudentId?.substring(0,4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;


  if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear) {
   currentId = lastStudentId.substring(6)
  }

  let incrementId = (parseInt(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
