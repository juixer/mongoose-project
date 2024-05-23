import { z } from 'zod';

// Username schema
const userNameValidationSchema = z.object({
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
const guardianValidationSchema = z.object({
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
const localGuardianValidationSchema = z.object({
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
const studentValidationSchema = z.object({
  id: z
    .string()
    .trim()
    .max(20, { message: 'ID cannot exceed 20 characters.' })
    .nonempty({ message: 'ID is required.' }),
  name: userNameValidationSchema,
  gender: z
    .enum(['Male', 'Female', 'Other'], {
      message: '{value} is not a valid gender.',
    }),
  dateOfBirth: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .max(50, { message: 'Email cannot exceed 50 characters.' })
    .email({ message: 'Email must be valid.' })
    .nonempty({ message: 'Email is required.' }),
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
    .max(100, { message: 'Permanent address cannot exceed 100 characters.' })
    .nonempty({ message: 'Permanent address is required.' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().trim().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
