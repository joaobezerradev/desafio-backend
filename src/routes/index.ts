import { Router } from 'express';

import personsRouter from './persons.router';
import sessionsRouter from './sessions.router';
import usersRouter from './users.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/persons', personsRouter);

export default routes;
