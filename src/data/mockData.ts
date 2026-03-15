export const mockTransactions = [
  { id: "TXN-8A2F4B", userId: "USR-001", amount: 2500, location: "New York", device: "Mobile", merchant: "Electronics", riskScore: 23, status: "Safe" as const, date: "2026-03-15" },
  { id: "TXN-9C3E7D", userId: "USR-002", amount: 15000, location: "Lagos", device: "Desktop", merchant: "Jewelry", riskScore: 87, status: "Fraud" as const, date: "2026-03-15" },
  { id: "TXN-1D5F8A", userId: "USR-003", amount: 450, location: "London", device: "Mobile", merchant: "Groceries", riskScore: 12, status: "Safe" as const, date: "2026-03-14" },
  { id: "TXN-2E6G9B", userId: "USR-004", amount: 8900, location: "Delhi", device: "POS", merchant: "Luxury", riskScore: 76, status: "Fraud" as const, date: "2026-03-14" },
  { id: "TXN-3F7H0C", userId: "USR-005", amount: 320, location: "Tokyo", device: "Mobile", merchant: "Food", riskScore: 8, status: "Safe" as const, date: "2026-03-13" },
  { id: "TXN-4G8I1D", userId: "USR-006", amount: 6700, location: "Moscow", device: "Desktop", merchant: "Electronics", riskScore: 92, status: "Fraud" as const, date: "2026-03-13" },
  { id: "TXN-5H9J2E", userId: "USR-007", amount: 180, location: "Paris", device: "Mobile", merchant: "Transport", riskScore: 5, status: "Safe" as const, date: "2026-03-12" },
  { id: "TXN-6I0K3F", userId: "USR-008", amount: 12400, location: "São Paulo", device: "Desktop", merchant: "Crypto", riskScore: 95, status: "Fraud" as const, date: "2026-03-12" },
  { id: "TXN-7J1L4G", userId: "USR-009", amount: 560, location: "Berlin", device: "POS", merchant: "Clothing", riskScore: 18, status: "Safe" as const, date: "2026-03-11" },
  { id: "TXN-8K2M5H", userId: "USR-010", amount: 3200, location: "Dubai", device: "Mobile", merchant: "Travel", riskScore: 45, status: "Safe" as const, date: "2026-03-11" },
];

export const chartDataDaily = [
  { day: "Mon", safe: 120, fraud: 12 },
  { day: "Tue", safe: 98, fraud: 18 },
  { day: "Wed", safe: 145, fraud: 8 },
  { day: "Thu", safe: 132, fraud: 22 },
  { day: "Fri", safe: 178, fraud: 15 },
  { day: "Sat", safe: 89, fraud: 9 },
  { day: "Sun", safe: 67, fraud: 6 },
];

export const chartDataPie = [
  { name: "Safe", value: 829, fill: "hsl(160, 84%, 39%)" },
  { name: "Fraud", value: 90, fill: "hsl(350, 89%, 60%)" },
];

export const chartDataMonthly = [
  { month: "Jan", fraud: 45 },
  { month: "Feb", fraud: 52 },
  { month: "Mar", fraud: 38 },
  { month: "Apr", fraud: 65 },
  { month: "May", fraud: 48 },
  { month: "Jun", fraud: 72 },
  { month: "Jul", fraud: 58 },
  { month: "Aug", fraud: 43 },
  { month: "Sep", fraud: 67 },
  { month: "Oct", fraud: 55 },
  { month: "Nov", fraud: 82 },
  { month: "Dec", fraud: 61 },
];

export const chartDataDevice = [
  { device: "Mobile", fraud: 45, safe: 320 },
  { device: "Desktop", fraud: 38, safe: 280 },
  { device: "POS", fraud: 12, safe: 190 },
  { device: "Tablet", fraud: 8, safe: 95 },
];

export const chartDataLocation = [
  { location: "North America", fraud: 25, safe: 340 },
  { location: "Europe", fraud: 18, safe: 290 },
  { location: "Asia", fraud: 35, safe: 250 },
  { location: "Africa", fraud: 42, safe: 120 },
  { location: "South America", fraud: 30, safe: 150 },
  { location: "Middle East", fraud: 22, safe: 95 },
];
