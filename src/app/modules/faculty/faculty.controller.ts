import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FacultyService } from './faculty.service';

const createFaculty = catchAsync(async (req, res) => {
  const result = await FacultyService.createFacultyIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty created successfully!!',
    data: result,
  });
});

const getAllFaculties = catchAsync(async (req, res) => {
  const result = await FacultyService.getAllFacultiesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties are retrieved successfully',
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const id = req.params.facultyId;
  const result = await FacultyService.getSingleFacultyFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is retrieved successfully',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const id = req.params.facultyId;
  const result = await FacultyService.updateFacultyIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is updated successfully',
    data: result,
  });
});

export const FacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
};
