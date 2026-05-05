"use client";

import Link from "next/link";
import { Search, Bell, ChevronDown, Plus, HeartPulse, Menu } from "lucide-react";
import { useMobileNav } from "./mobile-nav-context";

export function HospitalHeader() {
  const { toggle } = useMobileNav();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 z-50">
      {/* Left side / Brand & Search Bar */}
      <div className="flex items-center gap-4 sm:gap-10">
        <button 
          onClick={toggle}
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-xl"
        >
          <Menu size={24} />
        </button>

        <Link href="/" className="flex items-center gap-3">
          <div className="bg-brand-500 p-2 rounded-xl text-white shadow-sm shadow-brand-500/20">
            <HeartPulse size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
            Marybegg<span className="text-brand-600">Admin</span>
          </span>
        </Link>

        <div className="relative w-80 hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search patients, doctors, IDs..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        {/* Quick Actions */}
        <button className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
          <Plus size={16} />
          <span>New Admission</span>
        </button>

        <div className="w-px h-6 bg-slate-200 hidden md:block" />

        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-50">
          <Bell size={20} strokeWidth={2} />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-1.5 pr-3 rounded-full transition-all hover:bg-slate-100 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
            SJ
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-slate-800 leading-tight">Dr. Sarah Jenkins</p>
            <p className="text-xs text-brand-600 font-medium">Chief of Surgery</p>
          </div>
          <ChevronDown size={16} className="text-slate-400 ml-1" />
        </button>
      </div>
    </header>
  );
}
