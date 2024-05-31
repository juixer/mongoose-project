import { Types } from "mongoose";

export interface TDepartment {
    name : string;
    faculty : Types.ObjectId;
}