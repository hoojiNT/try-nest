import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Goal } from 'src/goals/entities/goal.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '<YOUR_DATABASE_PASSWORD>',
    database: 'goaltracker-db',
    entities: [Goal],
    synchronize: true,
  }),
);
