import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CourseValidationSchema } from './course.validation';
import { CourseController } from './course.controller';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidationSchema.createCourseValidationSchema),
  CourseController.createCourse,
);

router.patch('/:id', validateRequest(CourseValidationSchema.updateCourseSchema), CourseController.updateCourse)

router.get('/', CourseController.getAllCourses);

router.get('/:id', CourseController.getSingleCourse);

router.delete('/:id', CourseController.deleteCourse);

router.put('/:courseId/assign-faculties',validateRequest(CourseValidationSchema.assignFacultiesValidationSchema) ,CourseController.assignFacultiesWithCourse)

router.delete('/:courseId/remove-faculties',validateRequest(CourseValidationSchema.assignFacultiesValidationSchema) ,CourseController.removeFacultiesFromCourse)


export const CourseRouter = router;