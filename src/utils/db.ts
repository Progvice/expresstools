import { Schema, connect} from 'mongoose';
import IORedis from 'ioredis';

export const connectMongoDB = async () => {
    if (typeof process.env.MONGO_DB_USERNAME !== 'string' ||
    typeof process.env.MONGO_DB_PASSWORD !== 'string' ||
    typeof process.env.MONGO_DB_PROTOCOL !== 'string' ||
    typeof process.env.MONGO_DB_HOST !== 'string') {
        console.error('Mongodb username or password is not set in environment variable');
        return;
    } 
    const additionalParameters = typeof process.env.MONGO_DB_PARAMS === 'string' ? process.env.MONGO_DB_PARAMS : '';
    connect(`${process.env.MONGO_DB_PROTOCOL}://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${additionalParameters}`)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

export const connectRedis = async () => {
    if (typeof process.env.REDIS_DB_USERNAME !== 'string' ||
        typeof process.env.REDIS_DB_PASSWORD !== 'string' ||
        typeof process.env.REDIS_PROTOCOL !== 'string' ||
        typeof process.env.REDIS_PORT !== 'string' ||
        typeof process.env.REDIS_DB_HOST !== 'string') {
            console.error('Redis username or password is not set in environment variable');
            return;
    }
    return new IORedis(`${process.env.REDIS_PROTOCOL}://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
}