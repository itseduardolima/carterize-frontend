import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

interface RecentExpensesProps {
  expenses: Array<{
    expense_id: string;
    amount: number;
    is_third_party: boolean;
    createdAt: string;
    status: boolean;
    credit_card: {
      bank_name: string;
      last_four_digits: string;
    };
    category: {
      category_name: string;
    };
    third_party?: {
      third_party_name: string;
    } | null;
  }>;
}

const RecentExpenses = ({ expenses }: RecentExpensesProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const recentExpenses = expenses.slice(0, 4);

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {recentExpenses.map((expense, index) => (
        <motion.div
          key={expense.expense_id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
        >
          <Card
            className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group cursor-pointer"
            onClick={() =>
              setExpandedCard(
                expandedCard === expense.expense_id ? null : expense.expense_id
              )
            }
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-lg font-medium text-white leading-none group-hover:text-purple-400 transition-colors duration-300">
                    {expense.category.category_name}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {expense.credit_card.bank_name} (*
                    {expense.credit_card.last_four_digits})
                  </p>
                  {expense.is_third_party && expense.third_party && (
                    <p className="text-sm text-purple-400 mt-1">
                      {expense.third_party.third_party_name}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {formatCurrency(expense.amount)}
                  </span>
                  {expandedCard === expense.expense_id ? (
                    <ChevronUp className="h-4 w-4 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-purple-400" />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {expandedCard === expense.expense_id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <p className="text-sm text-gray-300">
                      Data: {formatDate(expense.createdAt)}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      Status:{" "}
                      <span
                        className={
                          expense.status ? "text-green-400" : "text-red-400"
                        }
                      >
                        {expense.status ? "Pago" : "Pendente"}
                      </span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RecentExpenses;
