import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

const Login = () => {

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <Card className="p-2 space-y-2 w-1/5 h-2/6">
        <CardHeader>
          <CardTitle>Bem-vindo, usuário de Cashimbo</CardTitle>
          <CardDescription>Faça seu login para acessar sua conta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form action="handleSubmit" className="space-y-2">
            <Input placeholder="e-mail"></Input>
            <Input placeholder="senha"></Input>
            <Button>Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-row gap-2">
            <Link href=""> <Github /></Link>
            <Link href=""> <Mail /></Link>
          </div>
          <Link href="">Redefinir senha</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login
