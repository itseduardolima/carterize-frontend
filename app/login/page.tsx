"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Img from "../../public/assets/images/E-Wallet-pana.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt", { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden  md:w-1/2 md:flex md:items-center md:justify-center"
        >
          <Image
            src={Img}
            alt="Login illustration"
            objectFit="cover"
            width={700}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8"
        >
          <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-purple-400">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <CreditCard className="mr-2 h-6 w-6" />
                  Carterize
                </motion.div>
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Entre para gerenciar suas finanças
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                >
                  <Lock className="mr-2 h-4 w-4" /> Entrar
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Esqueceu sua senha?
              </Button>
              <div className="text-sm text-gray-400">
                Não tem uma conta?{" "}
                <Link
                  href="/register"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Registre-se
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
