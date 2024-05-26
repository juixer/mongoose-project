import config from '../../config';
import { AcademicSemester } from '../academic/academic.model';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { generatedStudentID } from './user.utis';

const createStudentIntoDB = async (password: string, payload: Student) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  //  set manually generated id
  userData.id = await generatedStudentID(admissionSemester);
  const newUser = await UserModel.create(userData);

  //   create a new student
  if (Object.keys(newUser).length) {
    // set id
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }

  return newUser;
};

export const UserService = {
  createStudentIntoDB,
};
