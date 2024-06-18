import express from 'express';
import { OfferedCourseController } from './offeredcourse.controller';
import validateRequest from '../../middleware/validateRequest';
import { OfferedCourseValidation } from './offeredcoursevalidation';

const router = express.Router();

router.post(
  '/create-offered-course',
  validateRequest(OfferedCourseValidation.createOfferedCourseValidationSchema),
  OfferedCourseController.createOfferedCourse,
);

router.get('/', OfferedCourseController.getAllOfferedCourses);

router.get('/:id', OfferedCourseController.getSingleOfferedCourse);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidation.updateOfferedCourseValidationsSchema),
  OfferedCourseController.updateOfferedCourse,
);

export const OfferedCourseRoutes = router;
