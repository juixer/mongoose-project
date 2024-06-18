import { Types } from "mongoose";

export interface TDepartment {
    name : string;
    academicFaculty : Types.ObjectId;
}