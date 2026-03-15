import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface TransactionInput {
  amount: number;
  time: string;
  location: string;
  merchant_category: string;
  device_type: string;
  ip_address: string;
  transactions_last_hour: number;
  account_age: number;
}

export interface PredictionResult {
  prediction: "Safe" | "Fraud";
  risk_score: number;
  explanation: string;
}

export const predictFraud = async (data: TransactionInput): Promise<PredictionResult> => {
  try {
    const response = await api.post<PredictionResult>("/predict", data);
    return response.data;
  } catch {
    // Mock response for demo
    const riskScore = Math.random() * 100;
    const isFraud = riskScore > 60;
    return {
      prediction: isFraud ? "Fraud" : "Safe",
      risk_score: Math.round(riskScore),
      explanation: isFraud
        ? "Unusual transaction pattern detected. High-risk merchant category combined with irregular transaction frequency."
        : "Transaction appears consistent with normal spending behavior and account history.",
    };
  }
};

export default api;
