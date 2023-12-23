import { pgSchema } from 'drizzle-orm/pg-core';
import { POSTGRES_DATABASE } from './databaseConnection';


export const mySchema = pgSchema(POSTGRES_DATABASE!);
