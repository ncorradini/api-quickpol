import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  entities: ['src/**/*.entity.ts'],
  synchronize: true,
  migrationsRun: false,
  migrations: ['migrations/*.ts'],
};

const dataSource = new DataSource(databaseConfig);

export default dataSource;
