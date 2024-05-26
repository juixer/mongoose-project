import express from 'express';
import { AcademicController } from './acamedic.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academic.validation';

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
