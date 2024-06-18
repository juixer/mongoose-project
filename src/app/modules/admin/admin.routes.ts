import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidations } from './admin.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), AdminController.getAllAdmins);
router.get('/:id', AdminController.getSingleAdmin);
router.patch(
  '/:id',
  validateRequest(AdminValidations.updateAdminValidationSchema),
  AdminController.updateAdmin,
);

export const AdminRoute = router;
