import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);// Fechei store para fazer deploy da app com mais segurança
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
