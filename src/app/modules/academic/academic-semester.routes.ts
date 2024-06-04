import express from 'express';
import { AcademicController } from './academic-semester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academic-semester.validation';

const router = express.Router();

router.get('/', AcademicController.getAllAcademicSemesters);
router.get('/:semesterId', AcademicController.getSingleAcademicSemester);
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicController.createAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicController.updateAcademicSemester,
);
export const AcademicRoutes = router;
