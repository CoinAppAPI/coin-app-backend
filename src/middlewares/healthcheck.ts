import { Request, Response } from 'express';
import logger from '../common/Logger';
import { StatusCodes } from 'http-status-codes';

export default class HealthCheck {
	static check(req: Request, res: Response) {
		logger.info({
			event: 'HealthCheck.check',
			details: 'SYSTEM IS UP AND RUNNING',
		});

		res.status(StatusCodes.OK).json({ message: 'HEALTHY' }); // TODO: lembrar de criar uma classe RequestContext
	}
}
