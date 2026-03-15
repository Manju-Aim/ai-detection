import { motion } from "framer-motion";
import { Activity, ShieldAlert, ShieldCheck, TrendingUp } from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar,
} from "recharts";
import { StatCard } from "@/components/StatCard";
import { TransactionTable } from "@/components/TransactionTable";
import { mockTransactions, chartDataDaily, chartDataPie } from "@/data/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Real-time fraud monitoring overview</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Transactions" value="12,847" icon={Activity} trend="+12.5% from last week" trendUp index={0} />
        <StatCard title="Fraudulent" value="234" icon={ShieldAlert} trend="+3.2% from last week" trendUp={false} index={1} />
        <StatCard title="Safe Transactions" value="12,613" icon={ShieldCheck} trend="+11.8% from last week" trendUp index={2} />
        <StatCard title="Fraud Risk Rate" value="1.82%" icon={TrendingUp} trend="-0.3% from last week" trendUp index={3} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Fraud vs Safe</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chartDataPie} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={100} strokeWidth={0}>
                {chartDataPie.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(217, 33%, 17%)", border: "1px solid hsl(215, 25%, 27%)", borderRadius: "8px" }}
                labelStyle={{ color: "hsl(210, 40%, 98%)" }}
                itemStyle={{ color: "hsl(210, 40%, 98%)" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Safe (90.2%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">Fraud (9.8%)</span>
            </div>
          </div>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="glass-card p-6 lg:col-span-2"
        >
          <h3 className="text-lg font-semibold mb-4">Daily Transactions</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartDataDaily}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 27%)" />
              <XAxis dataKey="day" stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <YAxis stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(217, 33%, 17%)", border: "1px solid hsl(215, 25%, 27%)", borderRadius: "8px" }}
                labelStyle={{ color: "hsl(210, 40%, 98%)" }}
                itemStyle={{ color: "hsl(210, 40%, 98%)" }}
              />
              <Line type="monotone" dataKey="safe" stroke="hsl(160, 84%, 39%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="fraud" stroke="hsl(350, 89%, 60%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Fraud Trends Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Fraud Trends (This Week)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartDataDaily}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 27%)" />
            <XAxis dataKey="day" stroke="hsl(215, 17%, 63%)" fontSize={12} />
            <YAxis stroke="hsl(215, 17%, 63%)" fontSize={12} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(217, 33%, 17%)", border: "1px solid hsl(215, 25%, 27%)", borderRadius: "8px" }}
              labelStyle={{ color: "hsl(210, 40%, 98%)" }}
              itemStyle={{ color: "hsl(210, 40%, 98%)" }}
            />
            <Bar dataKey="fraud" fill="hsl(270, 91%, 65%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <TransactionTable transactions={mockTransactions.slice(0, 5)} showUserId />
      </div>
    </div>
  );
};

export default Dashboard;
