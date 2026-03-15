import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Lock, Bell, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@fraudshield.ai",
    phone: "+1 234 567 8900",
    currentPassword: "",
    newPassword: "",
  });

  const [notifications, setNotifications] = useState({
    fraudAlerts: true,
    dailyReports: true,
    systemUpdates: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </motion.div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <User className="h-5 w-5 text-accent" /> Profile Information
          </h3>

          <div className="flex items-center gap-6 mb-4">
            <div className="h-20 w-20 rounded-2xl gradient-bg flex items-center justify-center text-2xl font-bold">
              AU
            </div>
            <div>
              <Button type="button" variant="outline" size="sm" className="border-border text-muted-foreground hover:text-foreground">
                Upload Photo
              </Button>
              <p className="text-xs text-muted-foreground mt-1">JPG, PNG. Max 2MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="pl-10 bg-input border-border input-focus-glow h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="pl-10 bg-input border-border input-focus-glow h-12" />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="pl-10 bg-input border-border input-focus-glow h-12" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Password */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-8 space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Lock className="h-5 w-5 text-accent" /> Change Password
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Password</label>
              <Input type="password" placeholder="••••••••" value={form.currentPassword} onChange={(e) => setForm({ ...form, currentPassword: e.target.value })} className="bg-input border-border input-focus-glow h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">New Password</label>
              <Input type="password" placeholder="••••••••" value={form.newPassword} onChange={(e) => setForm({ ...form, newPassword: e.target.value })} className="bg-input border-border input-focus-glow h-12" />
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-8 space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5 text-accent" /> Notification Preferences
          </h3>
          <div className="space-y-4">
            {[
              { key: "fraudAlerts" as const, label: "Fraud Alerts", desc: "Get notified when fraud is detected" },
              { key: "dailyReports" as const, label: "Daily Reports", desc: "Receive daily fraud analysis reports" },
              { key: "systemUpdates" as const, label: "System Updates", desc: "Updates about system maintenance" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Switch
                  checked={notifications[item.key]}
                  onCheckedChange={(v) => setNotifications({ ...notifications, [item.key]: v })}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <Button
          type="submit"
          className="w-full h-12 gradient-bg gradient-bg-hover text-foreground font-semibold transition-all duration-200 hover:scale-[0.98] active:scale-[0.96]"
        >
          <Save className="h-4 w-4 mr-2" /> Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Settings;
