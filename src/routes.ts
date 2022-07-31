import express, { Request, Response } from 'express';
import { createUserController } from './useCases/CreateUser';
import { updateUserController } from './useCases/UpdateUser';
import { listUsersController } from './useCases/ListUsers';

const usersController = require('./controllers/usersController');
const groupsController = require('./controllers/groupsController');
const router = express.Router();


//USERS

// router.get('/api/users', async (req: Request, res: Response) => {
//   await usersController.get(req, res);
// })

// router.get('/api/users/groups', async (req: Request, res: Response) => {
//   await usersController.getByGroup(req, res);
// })

// router.post('/api/user', async (req: Request, res: Response) => {
//   await usersController.create(req, res);
// })

// router.put('/api/user/:userid', async (req: Request, res: Response) => {
//   await usersController.update(req, res);
// })

// router.delete('/api/user/:userid', async (req: Request, res: Response) => {
//   await usersController.remove(req, res);
// })




router.get('/api/users', async (req: Request, res: Response) => {
  await listUsersController.handle(req, res);
})

router.post('/api/user', async (req: Request, res: Response) => {
  await createUserController.handle(req, res);
})

router.put('/api/user/:userid', async (req: Request, res: Response) => {
  await updateUserController.handle(req, res);
})





//GROUPS

router.get('/api/groups', async (req: Request, res: Response) => {
  await groupsController.get(req, res);
})

router.post('/api/group', async (req: Request, res: Response) => {
  await groupsController.create(req, res);
})

router.put('/api/group/:group_id', async (req: Request, res: Response) => {
  await groupsController.update(req, res);
})

router.delete('/api/group/:group_id', async (req: Request, res: Response) => {
  await groupsController.remove(req, res);
})



export { router as MainRouter }