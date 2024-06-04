import { TAdmin } from './admin.interface';
import { Admin } from './admin.model';

const getAllAdminFromDB = async () => {
  const result = await Admin.find();
  return result;
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await Admin.findById(id);
  return result;
};

const updateAdminIntoDB = async (id: string, payload: TAdmin) => {
  const result = await Admin.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const AdminServices = {
  getAllAdminFromDB,
  getSingleAdminFromDB,
  updateAdminIntoDB,
};
