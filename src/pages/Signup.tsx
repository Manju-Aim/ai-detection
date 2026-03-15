import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Shield, Lock, Mail, User, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const passwordsMatch = form.password === form.confirmPassword || form.confirmPassword === "";

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex items-center gap-2 mb-8 justify-center">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold gradient-text">Detectly</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-center">Create Account</h2>
        <p className="text-muted-foreground mb-8 text-center">Join the fraud detection platform</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="pl-10 bg-input border-border input-focus-glow h-12"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="pl-10 bg-input border-border input-focus-glow h-12"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="pl-10 bg-input border-border input-focus-glow h-12"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="pl-10 pr-10 bg-input border-border input-focus-glow h-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className={`pl-10 bg-input border-border input-focus-glow h-12 ${!passwordsMatch ? "border-destructive" : ""}`}
              required
            />
          </div>
          {!passwordsMatch && (
            <p className="text-xs text-destructive">Passwords do not match</p>
          )}

          <Button
            type="submit"
            className="w-full h-12 gradient-bg gradient-bg-hover text-foreground font-semibold text-base transition-all duration-200 hover:scale-[0.98] active:scale-[0.96]"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center mt-6 text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
