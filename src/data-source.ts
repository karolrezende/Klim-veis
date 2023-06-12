import { DataSource, DataSourceOptions, Repository } from "typeorm";
import path from "path";
import "dotenv/config";
import { Address } from "./entities/address.entity";
import { Categories } from "./entities/categories.entity";
import { RealEstate } from "./entities/real_estate.entity";
import { Schedules } from "./entities/schedules.entity";
import { Users } from "./entities/users.entity";

const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

const AppDataSource = new DataSource(settings());

export const addressRepository : Repository<Address> = AppDataSource.getRepository(Address)
export const categoriesRepository : Repository<Categories> = AppDataSource.getRepository(Categories)
export const realEstateRepository : Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
export const SchedulesRepository : Repository<Schedules> = AppDataSource.getRepository(Schedules)
export const usersRepository : Repository<Users> = AppDataSource.getRepository(Users)

export { AppDataSource };
