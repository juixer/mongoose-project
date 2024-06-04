import { z } from 'zod';

// Username schema
const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(15, { message: 'First name cannot exceed 15 characters.' })
    .regex(/^[A-Z][a-z]*$/, { message: 'First name must be capitalized.' })
    .nonempty({ message: 'First name is required.' }),
  middleName: z
    .string()
    .trim()
    .max(15, { message: 'Middle name cannot exceed 15 characters.' })
    .regex(/^[A-Z][a-z]*$/, { message: 'Middle name must be capitalized.' })
    .optional(),
  lastName: z
    .string()
    .trim()
    .max(15, { message: 'Last name cannot exceed 15 characters.' })
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name must contain only alphabetic characters.',
    })
    .nonempty({ message: 'Last name is required.' }),
});

// Guardian schema
const createGuardianValidationSchema = z.object({
  fatherName: z
    .string()
    .trim()
    .max(30, { message: "Father's name cannot exceed 30 characters." })
    .nonempty({ message: "Father's name is required." }),
  fatherOccupation: z
    .string()
    .trim()
    .max(30, { message: "Father's occupation cannot exceed 30 characters." })
    .nonempty({ message: "Father's occupation is required." }),
  fatherContactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Father's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Father's contact number is required." }),
  motherName: z
    .string()
    .trim()
    .max(30, { message: "Mother's name cannot exceed 30 characters." })
    .nonempty({ message: "Mother's name is required." }),
  motherOccupation: z
    .string()
    .trim()
    .max(30, { message: "Mother's occupation cannot exceed 30 characters." })
    .nonempty({ message: "Mother's occupation is required." }),
  motherContactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Mother's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Mother's contact number is required." }),
});

// Local Guardian schema
const createLocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .max(30, { message: "Local guardian's name cannot exceed 30 characters." })
    .nonempty({ message: "Local guardian's name is required." }),
  occupation: z
    .string()
    .trim()
    .max(30, {
      message: "Local guardian's occupation cannot exceed 30 characters.",
    })
    .nonempty({ message: "Local guardian's occupation is required." }),
  contactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Local guardian's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Local guardian's contact number is required." }),
  address: z
    .string()
    .trim()
    .max(100, {
      message: "Local guardian's address cannot exceed 100 characters.",
    })
    .nonempty({ message: "Local guardian's address is required." }),
});

// Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['Male', 'Female', 'Other'], {
        message: '{value} is not a valid gender.',
      }),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNumber: z
        .string()
        .trim()
        .max(15, { message: 'Contact number cannot exceed 15 characters.' })
        .nonempty({ message: 'Contact number is required.' }),
      emergencyContactNo: z
        .string()
        .trim()
        .max(15, {
          message: 'Emergency contact number cannot exceed 15 characters.',
        })
        .nonempty({ message: 'Emergency contact number is required.' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .trim()
        .max(100, { message: 'Present address cannot exceed 100 characters.' })
        .nonempty({ message: 'Present address is required.' }),
      permanentAddress: z
        .string()
        .trim()
        .max(100, {
          message: 'Permanent address cannot exceed 100 characters.',
        })
        .nonempty({ message: 'Permanent address is required.' }),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(15, { message: 'First name cannot exceed 15 characters.' })
    .regex(/^[A-Z][a-z]*$/, { message: 'First name must be capitalized.' })
    .nonempty({ message: 'First name is required.' })
    .optional(),
  middleName: z
    .string()
    .trim()
    .max(15, { message: 'Middle name cannot exceed 15 characters.' })
    .regex(/^[A-Z][a-z]*$/, { message: 'Middle name must be capitalized.' })
    .optional(),
  lastName: z
    .string()
    .trim()
    .max(15, { message: 'Last name cannot exceed 15 characters.' })
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name must contain only alphabetic characters.',
    })
    .nonempty({ message: 'Last name is required.' })
    .optional(),
});

// Guardian schema
const updateGuardianValidationSchema = z.object({
  fatherName: z
    .string()
    .trim()
    .max(30, { message: "Father's name cannot exceed 30 characters." })
    .nonempty({ message: "Father's name is required." })
    .optional(),
  fatherOccupation: z
    .string()
    .trim()
    .max(30, { message: "Father's occupation cannot exceed 30 characters." })
    .nonempty({ message: "Father's occupation is required." })
    .optional(),
  fatherContactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Father's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Father's contact number is required." })
    .optional(),
  motherName: z
    .string()
    .trim()
    .max(30, { message: "Mother's name cannot exceed 30 characters." })
    .nonempty({ message: "Mother's name is required." })
    .optional(),
  motherOccupation: z
    .string()
    .trim()
    .max(30, { message: "Mother's occupation cannot exceed 30 characters." })
    .nonempty({ message: "Mother's occupation is required." })
    .optional(),
  motherContactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Mother's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Mother's contact number is required." })
    .optional(),
});

// Local Guardian schema
const updateLocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .max(30, { message: "Local guardian's name cannot exceed 30 characters." })
    .nonempty({ message: "Local guardian's name is required." })
    .optional(),
  occupation: z
    .string()
    .trim()
    .max(30, {
      message: "Local guardian's occupation cannot exceed 30 characters.",
    })
    .nonempty({ message: "Local guardian's occupation is required." })
    .optional(),
  contactNumber: z
    .string()
    .trim()
    .max(15, {
      message: "Local guardian's contact number cannot exceed 15 characters.",
    })
    .nonempty({ message: "Local guardian's contact number is required." })
    .optional(),
  address: z
    .string()
    .trim()
    .max(100, {
      message: "Local guardian's address cannot exceed 100 characters.",
    })
    .nonempty({ message: "Local guardian's address is required." })
    .optional(),
});

// Student schema
const updateStudentValidationSchema = z.object({
  body: z
    .object({
          name: updateUserNameValidationSchema.optional(),
          gender: z
            .enum(['Male', 'Female', 'Other'], {
              message: '{value} is not a valid gender.',
            })
            .optional(),
          dateOfBirth: z.string().optional(),
          email: z
            .string()
            .trim()
            .max(50, { message: 'Email cannot exceed 50 characters.' })
            .email({ message: 'Email must be valid.' })
            .nonempty({ message: 'Email is required.' })
            .optional(),
          contactNumber: z
            .string()
            .trim()
            .max(15, { message: 'Contact number cannot exceed 15 characters.' })
            .nonempty({ message: 'Contact number is required.' })
            .optional(),
          emergencyContactNo: z
            .string()
            .trim()
            .max(15, {
              message: 'Emergency contact number cannot exceed 15 characters.',
            })
            .nonempty({ message: 'Emergency contact number is required.' })
            .optional(),
          bloodGroup: z
            .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
            .optional(),
          presentAddress: z
            .string()
            .trim()
            .max(100, {
              message: 'Present address cannot exceed 100 characters.',
            })
            .nonempty({ message: 'Present address is required.' })
            .optional(),
          permanentAddress: z
            .string()
            .trim()
            .max(100, {
              message: 'Permanent address cannot exceed 100 characters.',
            })
            .nonempty({ message: 'Permanent address is required.' })
            .optional(),
          guardian: updateGuardianValidationSchema.optional(),
          localGuardian: updateLocalGuardianValidationSchema.optional(),
          profileImg: z.string().trim().optional(),
          admissionSemester: z.string().optional(),
          academicDepartment: z.string().optional(),
        })
        .optional(),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
