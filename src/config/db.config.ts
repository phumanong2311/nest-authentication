import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { resolve } from 'path';
import { Role, User } from 'src/infra/postgres/entities';

export const dbConfig: MikroOrmModuleSyncOptions = {
  dbName: 'warehouse',
  user: 'warehouse',
  password: 'warehouse',
  host: 'localhost',
  port: 5432,
  entities: [User, Role],
  debug: true,
  pool: { min: 5, max: 10 },
  logger: async function (message: string) {
    console.log(message);
  },
  seeder: {
    path: resolve(__dirname, '../seeders'),
  },
  migrations: {
    path: './migrations',
    pathTs: './migrations',
  },
  //change to TsMorphMetadataProvider (default is ReflectMetadataProvider)
  metadataProvider: TsMorphMetadataProvider,
};
