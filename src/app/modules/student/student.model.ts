import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student.interface';

const userNameSchema = new Schema<Username>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
      trim: true,
      maxlength: [15, 'First name cannot exceed 15 characters.'],
      // custom validation
      // validate: {
      //   validator: function (value: string) {
      //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      //     return firstNameStr === value;
      //   },
      //   message: '{VALUE} is not capitalized',
      // },
    },
    middleName: {
      type: String,
      trim: true,
      maxlength: [15, 'Middle name cannot exceed 15 characters.'],
      validate: {
        validator: function (value: string) {
          const middleNameStr = value.charAt(0).toUpperCase() + value.slice(1);
          return middleNameStr === value;
        },
        message: '{VALUE} is not capitalized',
      },
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.'],
      trim: true,
      maxlength: [15, 'Last name cannot exceed 15 characters.'],
      // validate: {
      //   validator: (value: string) => validator.isAlpha(value),
      //   message: '{VALUE} is not valid',
      // },
    },
  },
  { _id: false },
);

const guardianSchema = new Schema<Guardian>(
  {
    fatherName: {
      type: String,
      required: [true, "Father's name is required."],
      trim: true,
      maxlength: [30, "Father's name cannot exceed 30 characters."],
    },
    fatherOccupation: {
      type: String,
      required: [true, "Father's occupation is required."],
      trim: true,
      maxlength: [30, "Father's occupation cannot exceed 30 characters."],
    },
    fatherContactNumber: {
      type: String,
      required: [true, "Father's contact number is required."],
      trim: true,
      maxlength: [15, "Father's contact number cannot exceed 15 characters."],
    },
    motherName: {
      type: String,
      required: [true, "Mother's name is required."],
      trim: true,
      maxlength: [30, "Mother's name cannot exceed 30 characters."],
    },
    motherOccupation: {
      type: String,
      required: [true, "Mother's occupation is required."],
      trim: true,
      maxlength: [30, "Mother's occupation cannot exceed 30 characters."],
    },
    motherContactNumber: {
      type: String,
      required: [true, "Mother's contact number is required."],
      trim: true,
      maxlength: [15, "Mother's contact number cannot exceed 15 characters."],
    },
  },
  { _id: false },
);

const localGuardianSchema = new Schema<LocalGuardian>(
  {
    name: {
      type: String,
      required: [true, "Local guardian's name is required."],
      trim: true,
      maxlength: [30, "Local guardian's name cannot exceed 30 characters."],
    },
    occupation: {
      type: String,
      required: [true, "Local guardian's occupation is required."],
      trim: true,
      maxlength: [
        30,
        "Local guardian's occupation cannot exceed 30 characters.",
      ],
    },
    contactNumber: {
      type: String,
      required: [true, "Local guardian's contact number is required."],
      trim: true,
      maxlength: [
        15,
        "Local guardian's contact number cannot exceed 15 characters.",
      ],
    },
    address: {
      type: String,
      required: [true, "Local guardian's address is required."],
      trim: true,
      maxlength: [
        100,
        "Local guardian's address cannot exceed 100 characters.",
      ],
    },
  },
  { _id: false },
);

const studentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required.'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required.'],
    },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female', 'Other'],
        message: '{VALUE} is not a valid gender.',
      },
      required: [true, 'Gender is required.'],
    },
    dateOfBirth: { type: Date, trim: true },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      trim: true,
      maxlength: [50, 'Email cannot exceed 50 characters.'],
      // validate: {
      //   validator: (value : string) => validator.isEmail(value),
      //   message: '{VALUE} is not a valid email.',
      // }
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required.'],
      trim: true,
      maxlength: [15, 'Contact number cannot exceed 15 characters.'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required.'],
      trim: true,
      maxlength: [15, 'Emergency contact number cannot exceed 15 characters.'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required.'],
      trim: true,
      maxlength: [100, 'Present address cannot exceed 100 characters.'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required.'],
      trim: true,
      maxlength: [100, 'Permanent address cannot exceed 100 characters.'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required.'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is required.'],
    },
    profileImg: { type: String, trim: true },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'Academic-Department',
    },
  },
  {
    timestamps: true,
  },
);



export const StudentModel = model<Student>('Student', studentSchema);
