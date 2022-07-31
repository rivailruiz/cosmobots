import express, { Request, Response } from 'express';
import { createUserController } from './useCases/CreateUser';
import { updateUserController } from './useCases/UpdateUser';
import { listUsersController } from './useCases/ListUsers';
import { deleteUserController } from './useCases/DeleteUser';

import { createGroupsController } from './useCases/CreateGroup';
import { listGroupsController } from './useCases/ListGroup';

// const usersController = require('./controllers/usersController');
// const groupsController = require('./controllers/groupsController');
const router = express.Router();


//USERS
router.get('/api/users', async (req: Request, res: Response) => {
  await listUsersController.handle(req, res);
})

router.post('/api/user', async (req: Request, res: Response) => {
  await createUserController.handle(req, res);
})

router.put('/api/user/:userid', async (req: Request, res: Response) => {
  await updateUserController.handle(req, res);
})

router.delete('/api/user/:userid', async (req: Request, res: Response) => {
  await deleteUserController.handle(req, res);
})





// //GROUPS

router.get('/api/groups', async (req: Request, res: Response) => {
  await listGroupsController.handle(req, res);
})

router.post('/api/group', async (req: Request, res: Response) => {
  await createGroupsController.handle(req, res);
})

// router.put('/api/group/:group_id', async (req: Request, res: Response) => {
//   await groupsController.update(req, res);
// })

// router.delete('/api/group/:group_id', async (req: Request, res: Response) => {
//   await groupsController.remove(req, res);
// })



export { router as MainRouter }