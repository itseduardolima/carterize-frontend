import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  CreditCard,
  PieChart,
  Settings,
  User,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/cards", icon: CreditCard, label: "Cartões" },
    { href: "/expenses", icon: PieChart, label: "Despesas" },
    { href: "/settings", icon: Settings, label: "Configurações" },
  ];

  return (
    <AnimatePresence>
      {(isOpen || !isMobile) && (
        <motion.div
          initial={{ x: isMobile ? "-100%" : 0 }}
          animate={{ x: 0 }}
          exit={{ x: isMobile ? "-100%" : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 h-full bg-gray-900 text-gray-100 z-50 ${
            isOpen ? "w-64" : "w-20"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <h2 className={`text-xl font-bold ${isOpen ? "" : "hidden"}`}>
                Carterize
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-gray-400 hover:text-white"
              >
                {isMobile ? (
                  <X className="h-6 w-6" />
                ) : isOpen ? (
                  <ChevronLeft className="h-6 w-6" />
                ) : (
                  <ChevronRight className="h-6 w-6" />
                )}
              </Button>
            </div>
            <nav className="flex-grow">
              <ul className="space-y-2 mt-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-4 hover:bg-gray-800 transition-colors duration-200 ${
                        pathname === item.href ? "bg-gray-800 text-purple-400" : ""
                      }`}
                    >
                      <item.icon className="h-6 w-6 mr-4" />
                      {isOpen && <span>{item.label}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t border-gray-800">
              <Link
                href="/profile"
                className="flex items-center p-2 hover:bg-gray-800 transition-colors duration-200"
              >
                <User className="h-6 w-6 mr-4" />
                {isOpen && <span>Perfil</span>}
              </Link>
              <button
                onClick={() => {
                  /* Implement logout logic */
                }}
                className="flex items-center p-2 w-full text-left hover:bg-gray-800 transition-colors duration-200"
              >
                <LogOut className="h-6 w-6 mr-4" />
                {isOpen && <span>Sair</span>}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
