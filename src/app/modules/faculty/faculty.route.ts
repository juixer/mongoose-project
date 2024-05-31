import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { FacultyValidations } from './faculty.validation';
import { FacultyController } from './faculty.controller';

const route = express.Router();

route.post(
  '/create-faculty',
  validateRequest(FacultyValidations.createFacultyValidationSchema),
  FacultyController.createFaculty,
);

route.get('/', FacultyController.getAllFaculties);

route.get('/:facultyId', FacultyController.getSingleFaculty);

route.patch(
  '/:facultyId',
  validateRequest(FacultyValidations.updateFacultyValidationSchema),
  FacultyController.updateFaculty,
);

export const FacultiesRoutes = route;
