"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CreditCardList from "@/components/CreditCardList";
import RecentExpenses from "@/components/RecentExpenses";
import { cardsMock } from "@/mock/cards";
import { expensesMock } from "@/mock/expenses";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <header className="bg-gray-900 p-4 flex justify-between items-center md:hidden">
          <h1 className="text-2xl font-bold text-purple-400">Carterize</h1>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6 text-gray-400" />
          </Button>
        </header>
        <main className="p-8">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl font-bold mb-4 text-left text-purple-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Painel Carterize
            </motion.h1>
            <motion.p
              className="text-xl mb-12 text-left text-gray-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bem-vindo ao seu painel financeiro pessoal. Gerencie seus cartões
              e despesas com facilidade.
            </motion.p>
            <CreditCardList cards={cardsMock} />
            <motion.div
              className="mt-16 mb-8 flex justify-between items-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-left text-purple-400">
                Despesas Recentes
              </h2>
            </motion.div>
            <RecentExpenses expenses={expensesMock} />
            <Link
              href="/expenses"
              className="flex items-center justify-end mt-5 hover:bg-gray-800 transition-colors duration-200"
            >
              <Button
                variant="outline"
                className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900"
              >
                Ver todas as despesas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
