"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import Img from "../../public/assets/images/E-Wallet-amico.svg";
import Image from "next/image";
import { AuthForm } from "@/components/AuthForm";
import { registerSchema } from "@/schemas/registerSchema";
import Link from "next/link";

const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Seu nome completo",
    label: "Nome",
  },
  {
    name: "email",
    type: "email",
    placeholder: "seu@email.com",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Digite sua senha",
    label: "Senha",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirme sua senha",
    label: "Confirmar Senha",
  },
];

export default function RegisterPage() {
  const onSubmit = (data: any) => {
    console.log("Register attempt", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:w-1/2 md:flex md:items-center md:justify-center"
        >
          <Image src={Img} alt="Register illustration" width={700} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8"
        >
          <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-400">
                Carterize
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AuthForm
                schema={registerSchema}
                defaultValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={onSubmit}
                fields={fields}
                buttonText="Cadastrar"
                buttonIcon={<User className="mr-2 h-4 w-4" />}
              />
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-sm text-gray-400">
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Entre
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
