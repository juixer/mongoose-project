import express from 'express'
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import validateRequest from '../../middleware/validateRequest';
import { FacultyValidations } from '../faculty/faculty.validation';

const router = express.Router();




router.post('/create-student',validateRequest(studentValidations.createStudentValidationSchema), UserController.createStudent)
router.post('/create-faculty',validateRequest(FacultyValidations.createFacultyValidationSchema), UserController.createFaculty)

export const UserRoute = router;