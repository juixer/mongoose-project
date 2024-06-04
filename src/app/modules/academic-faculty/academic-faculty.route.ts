import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidations } from './academic-faculty.validation';
import { FacultyController } from './academic-faculty.controller';

const route = express.Router();

route.post(
  '/create-faculty',
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidationSchema,
  ),
  FacultyController.createAcademicFaculty,
);

route.get('/', FacultyController.getAllAcademicFaculties);

route.get('/:facultyId', FacultyController.getSingleAcademicFaculty);

route.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidationSchema,
  ),
  FacultyController.updateAcademicFaculty,
);

export const AcademicFacultiesRoutes = route;
