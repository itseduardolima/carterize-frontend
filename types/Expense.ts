import { Category } from "./Category";
import { ThirdParty } from "./ThirdParty";

export interface Expense {
  expense_id: string;
  amount: number;
  is_third_party: boolean;
  createdAt: string;
  status: boolean;
  credit_card: {
    card_id: string;
    bank_name: string;
    last_four_digits: string;
  };
  category: Category;
  third_party: ThirdParty | null;
}