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

import { Lock } from "lucide-react";
import Img from "../../public/assets/images/E-Wallet-pana.svg";
import Image from "next/image";
import { loginSchema } from "@/schemas/loginSchema";
import { AuthForm } from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fields = [
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
];

export default function LoginPage() {
  const onSubmit = (data: any) => {
    console.log("Login attempt", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div className="hidden md:w-1/2 md:flex md:items-center md:justify-center">
          <Image src={Img} alt="Login illustration" width={700} />
        </motion.div>
        <motion.div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-400">
                Carterize
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AuthForm
                schema={loginSchema}
                defaultValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
                fields={fields}
                buttonText="Entrar"
                buttonIcon={<Lock className="mr-2 h-4 w-4" />}
              />
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
