import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Seo from "@/components/Seo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <MainLayout>
      <Seo
        title="Login"
        description="Sign in to your LibraryOne account to access your library tools and services."
        path="/login"
      />
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-semibold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to access your library account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                required
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Login;
