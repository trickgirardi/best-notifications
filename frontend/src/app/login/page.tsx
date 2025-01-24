"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  password: z.string().min(8, "A senha precisa de 8 caracteres ou mais"),
  confirmPassword: z.string(),
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas precisam ser iguais'
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

const RegisterFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
  });

  console.log(errors);
  function createUser(data: object) {
    console.log(data);
  }

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center flex-col">
      <Card className="p-2 space-y-2 w-1/5 h-fit">
        <CardHeader>
          <CardTitle>Bem-vindo, futuro usuário de Cashimbo</CardTitle>
          <CardDescription>Cadastre-se para iniciar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit(createUser)} className="space-y-3">
            <div className="flex flex-col gap-1">
              <Label className="ml-1" htmlFor="name">
                Nome
              </Label>
              <Input
                type="name"
                placeholder="insira seu nome completo"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-sm text-destructive">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="ml-1" htmlFor="email">
                E-Mail
              </Label>
              <Input
                type="email"
                placeholder="insira seu e-mail"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-sm text-destructive">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="ml-1" htmlFor="password">
                Senha
              </Label>
              <Input
                type="password"
                placeholder="insira sua senha"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-sm text-destructive">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="ml-1" htmlFor="password">
                Confirmar senha
              </Label>
              <Input
                type="password"
                placeholder="repita a senha"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="text-sm text-destructive">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2">
                <Link href="">
                  {" "}
                  <Github />
                </Link>
                <Link href="">
                  {" "}
                  <Mail />
                </Link>
              </div>
              <Button className="justify-end" type="submit">
                Cadastrar
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Link href="">Já tenho uma conta</Link>{" "}
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterFormPage;
