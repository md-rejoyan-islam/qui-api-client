"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex relative h-screen ">
      <DashboardSidebar />
      {/* <DashboardAnimatedBackground /> */}
      <motion.div
        className="flex-1 overflow-auto mt-[70px] hide-scrollbar md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </main>
  );
}
