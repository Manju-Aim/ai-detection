import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  index?: number;
}

export function StatCard({ title, value, icon: Icon, trend, trendUp, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 group hover:glow-cyan transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {trend && (
            <p className={`text-xs mt-2 ${trendUp ? "text-success" : "text-destructive"}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
          <Icon className="h-6 w-6 text-foreground" />
        </div>
      </div>
    </motion.div>
  );
}
