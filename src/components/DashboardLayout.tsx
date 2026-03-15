import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Bell, User } from "lucide-react";

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between border-b border-border px-6 glass-card rounded-none">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground hidden sm:block">
                AI Fraud Detection System
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
              </button>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                  <User className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-sm font-medium hidden md:block">Admin</span>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
