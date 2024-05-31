import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DepartmentService } from './department.service';

const createDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentService.createDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req, res) => {
  const result = await DepartmentService.getAllDepartmentsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

const getSingleDepartment = catchAsync(async (req, res) => {
  const departmentID = req.params.departmentId;
  const result =
    await DepartmentService.getSingleDepartmentFromDB(departmentID);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

const updateDepartment = catchAsync(async (req, res) => {
  const departmentID = req.params.departmentId;
  const result = await DepartmentService.updateDepartmentFromDB(
    departmentID,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const DepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
};
