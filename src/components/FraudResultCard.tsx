import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShieldAlert, AlertTriangle } from "lucide-react";
import type { PredictionResult } from "@/services/api";

interface FraudResultCardProps {
  result: PredictionResult | null;
}

export function FraudResultCard({ result }: FraudResultCardProps) {
  if (!result) return null;

  const isFraud = result.prediction === "Fraud";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className={`glass-card p-8 ${isFraud ? "border-destructive/50" : "border-success/50"}`}
      >
        <div className="flex items-center gap-4 mb-6">
          {isFraud ? (
            <div className="h-16 w-16 rounded-2xl bg-destructive/20 flex items-center justify-center">
              <ShieldAlert className="h-8 w-8 text-destructive" />
            </div>
          ) : (
            <div className="h-16 w-16 rounded-2xl bg-success/20 flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-success" />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold">
              {isFraud ? "Fraud Detected" : "Transaction Safe"}
            </h3>
            <p className="text-muted-foreground">{result.prediction} Transaction</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Risk Score</span>
            <span className={`text-2xl font-bold font-mono-data ${isFraud ? "text-destructive" : "text-success"}`}>
              {result.risk_score}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.risk_score}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${isFraud ? "bg-destructive" : "bg-success"}`}
            />
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
          <AlertTriangle className={`h-5 w-5 mt-0.5 shrink-0 ${isFraud ? "text-destructive" : "text-success"}`} />
          <p className="text-sm text-muted-foreground">{result.explanation}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
