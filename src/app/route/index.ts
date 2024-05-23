import { Router } from "express";
import { UserRoute } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        router: UserRoute,
    },
    {
        path: '/students',
        router: StudentRoutes,
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.router))

export default router;