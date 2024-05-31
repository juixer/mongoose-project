import { TDepartment } from './department.interface';
import { Department } from './department.model';

const createDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDepartmentsFromDB = async () => {
  const result = await Department.find().populate('faculty');
  return result;
};

const getSingleDepartmentFromDB = async (departmentID: string) => {
  const result = await Department.findById(departmentID).populate('faculty');
  return result;
};

const updateDepartmentFromDB = async (
  departmentID: string,
  payload: TDepartment,
) => {
  const result = await Department.findByIdAndUpdate(departmentID, payload, {
    new: true,
  });
  return result;
};

export const DepartmentService = {
  createDepartmentIntoDB,
  getAllDepartmentsFromDB,
  getSingleDepartmentFromDB,
  updateDepartmentFromDB,
};
