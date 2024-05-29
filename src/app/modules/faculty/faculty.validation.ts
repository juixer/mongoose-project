import { z } from 'zod';

const facultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic Faculty must be string',
  }),
});

export const FacultyValidations = {
  facultyValidationSchema,
};
