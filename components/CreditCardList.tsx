import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CreditCard } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface CreditCardListProps {
  cards: Array<{
    card_id: string;
    bank_name: string;
    last_four_digits: string;
    card_holder_name: string;
    available_limit: number;
    credit_limit: number;
  }>;
}

const CreditCardList = ({ cards }: CreditCardListProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.card_id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium text-purple-400">
                {card.bank_name}
              </CardTitle>
              <CreditCard className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 text-gray-100">
                **** **** **** {card.last_four_digits}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                {card.card_holder_name}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(card.available_limit / card.credit_limit) * 100}%`,
                }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Progress
                  value={(card.available_limit / card.credit_limit) * 100}
                  className="h-2 mb-2 bg-gray-700"
                />
              </motion.div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-green-400">
                  Disponível: {formatCurrency(card.available_limit)}
                </span>
                <span className="text-purple-400">
                  Limite: {formatCurrency(card.credit_limit)}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CreditCardList;
