import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    transactions: {
      id: string;
      description: string;
      amount: number;
      created_at: string;
      session_id?: string;
    };
  }
}
