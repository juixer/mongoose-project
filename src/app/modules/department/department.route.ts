import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { DepartmentValidations } from './department.validation';
import { DepartmentController } from './department.controller';

const route = express.Router();

route.post(
  '/create-department',
  validateRequest(DepartmentValidations.createDepartmentSchemaValidation),
  DepartmentController.createDepartment,
);

route.get('/', DepartmentController.getAllDepartments);

route.get('/:departmentId', DepartmentController.getSingleDepartment);

route.patch(
  '/:departmentId',
  validateRequest(DepartmentValidations.updateDepartmentSchemaValidation),
  DepartmentController.updateDepartment,
);

export const DepartmentRoute = route;
