import { motion } from "framer-motion";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  BarChart, Bar,
} from "recharts";
import { chartDataPie, chartDataMonthly, chartDataDevice, chartDataLocation } from "@/data/mockData";

const tooltipStyle = {
  contentStyle: { backgroundColor: "hsl(217, 33%, 17%)", border: "1px solid hsl(215, 25%, 27%)", borderRadius: "8px" },
  labelStyle: { color: "hsl(210, 40%, 98%)" },
  itemStyle: { color: "hsl(210, 40%, 98%)" },
};

const Analytics = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Fraud Analytics</h1>
        <p className="text-muted-foreground mt-1">In-depth fraud analysis and trends</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fraud Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Fraud Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartDataPie} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={120} strokeWidth={0} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {chartDataPie.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Fraud by Location */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Fraud by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartDataLocation} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 27%)" />
              <XAxis type="number" stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <YAxis dataKey="location" type="category" stroke="hsl(215, 17%, 63%)" fontSize={11} width={110} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="fraud" fill="hsl(350, 89%, 60%)" radius={[0, 4, 4, 0]} />
              <Bar dataKey="safe" fill="hsl(160, 84%, 39%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Monthly Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Monthly Fraud Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartDataMonthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 27%)" />
              <XAxis dataKey="month" stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <YAxis stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <Tooltip {...tooltipStyle} />
              <Line type="monotone" dataKey="fraud" stroke="hsl(270, 91%, 65%)" strokeWidth={3} dot={{ fill: "hsl(270, 91%, 65%)", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Device-based Fraud */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Fraud by Device Type</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartDataDevice}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 27%)" />
              <XAxis dataKey="device" stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <YAxis stroke="hsl(215, 17%, 63%)" fontSize={12} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="fraud" fill="hsl(350, 89%, 60%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="safe" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
