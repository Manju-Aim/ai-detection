import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  location: string;
  device: string;
  merchant: string;
  riskScore: number;
  status: "Safe" | "Fraud";
  date: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  showUserId?: boolean;
}

export function TransactionTable({ transactions, showUserId = false }: TransactionTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card overflow-hidden"
    >
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Transaction ID</TableHead>
              {showUserId && <TableHead className="text-muted-foreground">User ID</TableHead>}
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Location</TableHead>
              <TableHead className="text-muted-foreground">Merchant</TableHead>
              <TableHead className="text-muted-foreground">Device</TableHead>
              <TableHead className="text-muted-foreground">Risk Score</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, i) => (
              <TableRow key={tx.id} className="border-border hover:bg-muted/30 transition-colors">
                <TableCell className="font-mono-data text-xs text-accent">{tx.id}</TableCell>
                {showUserId && (
                  <TableCell className="font-mono-data text-xs">{tx.userId}</TableCell>
                )}
                <TableCell className="font-semibold">${tx.amount.toLocaleString()}</TableCell>
                <TableCell>{tx.location}</TableCell>
                <TableCell>{tx.merchant}</TableCell>
                <TableCell>{tx.device}</TableCell>
                <TableCell>
                  <span className={`font-mono-data text-sm font-semibold ${tx.riskScore > 60 ? "text-destructive" : "text-success"}`}>
                    {tx.riskScore}%
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={tx.status === "Fraud" ? "destructive" : "default"}
                    className={tx.status === "Safe" ? "bg-success/20 text-success border-success/30" : ""}
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{tx.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
