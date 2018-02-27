import Router from 'koa-router';
import auth from './auth/index';
import task from './task/index';
import {API_PREFIX} from "../constants/prefixes";

const router = new Router({ prefix: API_PREFIX});

router.use(auth);
router.use(task);

export default router.routes();