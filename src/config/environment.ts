import dotenv from 'dotenv';

dotenv.config();

export default {
    HOST: '127.0.0.1',
    ENV: process.env.ENV || 'dev',
    PORT: process.env.PORT || 3333,

    ROUTES: {
        HOME: '/',
        HEALTHCHECK: '/healthcheck',
    }
}