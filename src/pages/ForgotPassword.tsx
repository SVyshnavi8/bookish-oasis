import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md px-6">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-serif font-semibold mb-2">Reset Password</h1>
                <p className="text-muted-foreground">
                  Enter your email and we'll send you a reset link
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
                    className="w-full h-12 px-4 bg-secondary/50 border-0 rounded-lg text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Reset Link
                </Button>
              </form>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8 hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </Link>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-serif font-semibold mb-2">Check Your Email</h1>
              <p className="text-muted-foreground mb-8">
                We've sent a password reset link to {email}
              </p>
              <Link to="/login">
                <Button variant="outline">Return to Sign In</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ForgotPassword;
