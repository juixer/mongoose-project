import { Date, Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type Username = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export interface Student {
  id: string;
  user: Types.ObjectId;
  name: Username;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth?: Date;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
}
