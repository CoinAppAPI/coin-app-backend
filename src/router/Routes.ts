import express from 'express';
import CONFIG from '../config/environment';
import HealthCheck from '../middlewares/healthcheck';

class Routes {
	private router;

	constructor() {
		this.router = express.Router();
		this.mapRoutes();
	}

	public getRouter(): express.Router {
		return this.router;
	}

	public mapRoutes() {
		this.router.get(CONFIG.ROUTES.HEALTHCHECK, HealthCheck.check);
	}
}

export default new Routes();
