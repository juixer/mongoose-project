import { User } from './user.model';

const findLastStudentID = async () => {
  const lastStudent = await User.findOne(
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
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (parseInt(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};

const findLastFacultyID = async () => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generatedFacultyID = async () => {
  let currentId = (0).toString();
  const lastFacultyID = await findLastFacultyID();

  if (lastFacultyID) {
    currentId = lastFacultyID.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `F-${incrementId}`;
  return incrementId;
};

const findLastAdminID = async () => {
  const lastAdmin = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id : undefined;
};

export const generatedAdminID = async () => {
  let currentID = (0).toString();
  const lastAdminID = await findLastAdminID();

  if (lastAdminID) {
    currentID = lastAdminID.substring(2);
  }

  let incrementId = (Number(currentID) + 1).toString().padStart(4, '0');
  incrementId = `A-${incrementId}`;
  return incrementId;
};
