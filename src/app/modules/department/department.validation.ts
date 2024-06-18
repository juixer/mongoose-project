import { z } from 'zod';

const createDepartmentSchemaValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string',
      required_error: 'Faculty is required',
    }),
  }),
});

const updateDepartmentSchemaValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department must be string',
      })
      .optional(),
      academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
      })
      .optional(),
  }),
});

export const DepartmentValidations = {
  createDepartmentSchemaValidation,
  updateDepartmentSchemaValidation,
};
