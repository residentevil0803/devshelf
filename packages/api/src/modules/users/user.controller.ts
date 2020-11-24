import { Router } from 'express';
import { getUsers, findOne, getFeedback } from './users.service';

export const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json({ users });
});

usersRouter.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await findOne(userId);
  return res.status(200).json({ user });
});

usersRouter.get('/:id/feedback', async (req, res) => {
  const userId = req.params.id;
  const feedback = await getFeedback(userId);
  return res.status(200).json({ feedback });
});
