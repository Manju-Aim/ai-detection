import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FraudResultCard } from "@/components/FraudResultCard";
import { predictFraud, type PredictionResult, type TransactionInput } from "@/services/api";

const DetectFraud = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [form, setForm] = useState<TransactionInput>({
    amount: 0,
    time: "",
    location: "",
    merchant_category: "",
    device_type: "",
    ip_address: "",
    transactions_last_hour: 0,
    account_age: 0,
  });

  const handleChange = (field: keyof TransactionInput, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await predictFraud(form);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Detect Transaction Fraud</h1>
        <p className="text-muted-foreground mt-1">Enter transaction details for AI analysis</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="glass-card p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Transaction Amount ($)</label>
            <Input
              type="number"
              placeholder="5000"
              value={form.amount || ""}
              onChange={(e) => handleChange("amount", Number(e.target.value))}
              className="bg-input border-border input-focus-glow h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Transaction Time</label>
            <Input
              type="datetime-local"
              value={form.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className="bg-input border-border input-focus-glow h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Transaction Location</label>
            <Input
              placeholder="New York, USA"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="bg-input border-border input-focus-glow h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Merchant Category</label>
            <Select onValueChange={(v) => handleChange("merchant_category", v)}>
              <SelectTrigger className="bg-input border-border h-12">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {["Electronics", "Groceries", "Jewelry", "Luxury", "Travel", "Food", "Transport", "Crypto", "Clothing"].map((c) => (
                  <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Device Type</label>
            <Select onValueChange={(v) => handleChange("device_type", v)}>
              <SelectTrigger className="bg-input border-border h-12">
                <SelectValue placeholder="Select device" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="pos">POS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">IP Address</label>
            <Input
              placeholder="192.168.1.1"
              value={form.ip_address}
              onChange={(e) => handleChange("ip_address", e.target.value)}
              className="bg-input border-border input-focus-glow h-12 font-mono-data"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Transactions in Last Hour</label>
            <Input
              type="number"
              placeholder="5"
              value={form.transactions_last_hour || ""}
              onChange={(e) => handleChange("transactions_last_hour", Number(e.target.value))}
              className="bg-input border-border input-focus-glow h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Account Age (days)</label>
            <Input
              type="number"
              placeholder="400"
              value={form.account_age || ""}
              onChange={(e) => handleChange("account_age", Number(e.target.value))}
              className="bg-input border-border input-focus-glow h-12"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-14 gradient-bg gradient-bg-hover text-foreground font-semibold text-lg transition-all duration-200 hover:scale-[0.98] active:scale-[0.96] pulse-ring"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
              Analyzing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Analyze Transaction
            </div>
          )}
        </Button>
      </motion.form>

      <FraudResultCard result={result} />
    </div>
  );
};

export default DetectFraud;
