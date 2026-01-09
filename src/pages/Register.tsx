import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Seo from "@/components/Seo";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [libraryCard, setLibraryCard] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <MainLayout>
      <Seo
        title="Create account"
        description="Create your LibraryOne account to access digital library services, demos, and resources."
        path="/register"
      />
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-semibold mb-2">Create Account</h1>
            <p className="text-muted-foreground">
              Join LibraryOne and start reading today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                required
              />
            </div>

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
              <label htmlFor="libraryCard" className="block text-sm font-medium mb-2">
                Library Card Number
              </label>
              <input
                id="libraryCard"
                type="text"
                value={libraryCard}
                onChange={(e) => setLibraryCard(e.target.value)}
                placeholder="Enter your library card number"
                className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link to="/login" className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Register;
