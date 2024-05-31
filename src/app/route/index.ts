import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicRoutes } from '../modules/academic/academic.routes';
import { FacultiesRoutes } from '../modules/faculty/faculty.route';
import { DepartmentRoute } from '../modules/department/department.route';

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
    path: '/academic-semesters',
    router: AcademicRoutes,
  },
  {
    path: '/academic-faculties',
    router: FacultiesRoutes,
  },
  {
    path: '/academic-departments',
    router: DepartmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
