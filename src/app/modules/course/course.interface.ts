import { Types } from 'mongoose';

export interface TPreRequisiteCourses {
  course: Types.ObjectId;
  isDeleted: boolean;
}

export interface TCourse {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted: boolean;
  preRequisiteCourses: [TPreRequisiteCourses];
}

export interface TCourseFaculties {
  course: Types.ObjectId;
  faculties: [Types.ObjectId];
}
