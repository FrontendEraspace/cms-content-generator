import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useState } from "react";
import { generateToken } from "@/utils/generate-token";
import { setCookie } from "@/utils/cookie";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_URL_ENDPOINT_ALT}`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        console.error(res.statusText);
      }

      const data = await res
        .json()
        .catch((err) => console.error(`Error parsing JSON ${err}`));

      if (data) {
        setCookie("token", generateToken(15), 1);
        router.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="youremail@example.com"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                className="w-full bg-[#153973] hover:bg-[#172554]"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
