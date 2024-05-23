import Joi from 'joi';

// Username schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(15)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base': 'First name must be capitalized and cannot exceed 15 characters.',
      'any.required': 'First name is required.',
      'string.max': 'First name cannot exceed 15 characters.'
    }),
  middleName: Joi.string()
    .trim()
    .max(15)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base': 'Middle name must be capitalized and cannot exceed 15 characters.',
      'string.max': 'Middle name cannot exceed 15 characters.'
    }),
  lastName: Joi.string()
    .trim()
    .max(15)
    .required()
    .regex(/^[A-Za-z]+$/)
    .messages({
      'string.pattern.base': 'Last name must contain only alphabetic characters and cannot exceed 15 characters.',
      'any.required': 'Last name is required.',
      'string.max': 'Last name cannot exceed 15 characters.'
    })
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Father's name is required.",
      'string.max': "Father's name cannot exceed 30 characters."
    }),
  fatherOccupation: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Father's occupation is required.",
      'string.max': "Father's occupation cannot exceed 30 characters."
    }),
  fatherContactNumber: Joi.string()
    .trim()
    .max(15)
    .required()
    .messages({
      'any.required': "Father's contact number is required.",
      'string.max': "Father's contact number cannot exceed 15 characters."
    }),
  motherName: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Mother's name is required.",
      'string.max': "Mother's name cannot exceed 30 characters."
    }),
  motherOccupation: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Mother's occupation is required.",
      'string.max': "Mother's occupation cannot exceed 30 characters."
    }),
  motherContactNumber: Joi.string()
    .trim()
    .max(15)
    .required()
    .messages({
      'any.required': "Mother's contact number is required.",
      'string.max': "Mother's contact number cannot exceed 15 characters."
    })
});

// Local Guardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Local guardian's name is required.",
      'string.max': "Local guardian's name cannot exceed 30 characters."
    }),
  occupation: Joi.string()
    .trim()
    .max(30)
    .required()
    .messages({
      'any.required': "Local guardian's occupation is required.",
      'string.max': "Local guardian's occupation cannot exceed 30 characters."
    }),
  contactNumber: Joi.string()
    .trim()
    .max(15)
    .required()
    .messages({
      'any.required': "Local guardian's contact number is required.",
      'string.max': "Local guardian's contact number cannot exceed 15 characters."
    }),
  address: Joi.string()
    .trim()
    .max(100)
    .required()
    .messages({
      'any.required': "Local guardian's address is required.",
      'string.max': "Local guardian's address cannot exceed 100 characters."
    })
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string()
    .trim()
    .max(20)
    .required()
    .messages({
      'any.required': 'ID is required.',
      'string.max': 'ID cannot exceed 20 characters.'
    }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required.'
  }),
  gender: Joi.string()
    .valid('Male', 'Female', 'Other')
    .required()
    .messages({
      'any.only': '{#label} is not a valid gender.',
      'any.required': 'Gender is required.'
    }),
  dateOfBirth: Joi.string().trim(),
  email: Joi.string()
    .trim()
    .max(50)
    .required()
    .email()
    .messages({
      'any.required': 'Email is required.',
      'string.email': 'Email must be valid.',
      'string.max': 'Email cannot exceed 50 characters.'
    }),
  contactNumber: Joi.string()
    .trim()
    .max(15)
    .required()
    .messages({
      'any.required': 'Contact number is required.',
      'string.max': 'Contact number cannot exceed 15 characters.'
    }),
  emergencyContactNo: Joi.string()
    .trim()
    .max(15)
    .required()
    .messages({
      'any.required': 'Emergency contact number is required.',
      'string.max': 'Emergency contact number cannot exceed 15 characters.'
    }),
  bloodGroup: Joi.string().valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'),
  presentAddress: Joi.string()
    .trim()
    .max(100)
    .required()
    .messages({
      'any.required': 'Present address is required.',
      'string.max': 'Present address cannot exceed 100 characters.'
    }),
  permanentAddress: Joi.string()
    .trim()
    .max(100)
    .required()
    .messages({
      'any.required': 'Permanent address is required.',
      'string.max': 'Permanent address cannot exceed 100 characters.'
    }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required.'
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required.'
  }),
  profileImg: Joi.string().trim(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
});

export default studentValidationSchema;