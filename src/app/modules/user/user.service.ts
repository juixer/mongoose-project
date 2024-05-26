import config from '../../config';
import { TAcademicSemester } from '../academic/academic.interface';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  // set student role
  userData.role = 'student';

  const generatedStudentID = (payload: TAcademicSemester) =>{
    
  }

  //  set manually generated id
  userData.id = '203010001';
  const newUser = await UserModel.create(userData);

  //   create a new student
  if (Object.keys(newUser).length) {
    // set id
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const UserService = {
  createStudentIntoDB,
};
