import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicRoutes } from '../modules/academic-semester/academic-semester.routes';
import { AcademicFacultiesRoutes } from '../modules/academic-faculty/academic-faculty.route';
import { DepartmentRoute } from '../modules/department/department.route';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { AdminRoute } from '../modules/admin/admin.routes';
import { CourseRouter } from '../modules/course/course.route';
import { SemesterRegistrationRouter } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRoutes } from '../modules/Offeredcourse/offeredcourse.route';
import { AuthRouter } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    router: UserRoute,
  },
  {
    path: '/students',
    router: StudentRoutes,
  },
  {
    path: '/faculties',
    router: FacultyRoutes,
  },
  {
    path: '/admins',
    router: AdminRoute,
  },
  {
    path: '/academic-semesters',
    router: AcademicRoutes,
  },
  {
    path: '/academic-faculties',
    router: AcademicFacultiesRoutes,
  },
  {
    path: '/academic-departments',
    router: DepartmentRoute,
  },
  {
    path: '/courses',
    router: CourseRouter,
  },
  {
    path: '/semester-registrations',
    router: SemesterRegistrationRouter,
  },
  {
    path: '/offered-course',
    router: OfferedCourseRoutes,
  },
  {
    path: '/auth',
    router: AuthRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
