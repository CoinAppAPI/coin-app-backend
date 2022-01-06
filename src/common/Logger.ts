import winston from 'winston';
import CONFIG from '../config/environment';

class Logger {
	private readonly levels = {
		error: 0,
		warn: 1,
		info: 2,
		http: 3,
		debug: 4,
	};

	private readonly colors = {
		error: 'red',
		warn: 'yellow',
		info: 'green',
		http: 'magenta',
		debug: 'white',
	};

    public createLogger() {
        winston.addColors(this.colors);

		return winston.createLogger({
			level:  Logger.setLevel(),
			levels: this.levels,
			format: Logger.setFormat(),
			transports: Logger.setTransports(),
		});
    }

	static setLevel(): string {
		const isDevelopment = CONFIG.ENV === 'dev';
		return isDevelopment ? 'debug' : 'warn';
	}

	static setFormat(): winston.Logform.Format {
		return winston.format.combine(
			winston.format.timestamp(),
			winston.format.colorize({ all: true }),
			winston.format.printf((info) => {
				return `[${info.timestamp}] [${info.level}]: [${info.reqID}] ${info.message}`;
			}),
		);
	}

	static setTransports(): Array<winston.transport> {
		return [new winston.transports.Console()];
	}
}

export default new Logger().createLogger();
