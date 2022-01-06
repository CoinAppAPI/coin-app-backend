import express from 'express';
import logger from './common/Logger';
import routes from './router/Routes';

const app = express();

app.use(routes.getRouter());

app.listen(3333, () => {
	logger.debug('Server is up and running');
});
