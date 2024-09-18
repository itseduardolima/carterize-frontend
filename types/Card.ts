import { User } from "./User";

export interface Card {
  card_id: string;
  bank_name: string;
  last_four_digits: string;
  card_holder_name: string;
  credit_limit: number;
  available_limit: number;
  createdAt: string;
  updatedAt: string;
  user: User;
}