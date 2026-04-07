import React from "react";

export const Logo = ({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center gap-3 group cursor-pointer" onClick={onClick}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
      <div className="absolute inset-0 bg-brand-bg rounded-xl m-[2px] flex items-center justify-center">
        <span className="text-xl font-black text-white leading-none tracking-tighter">SNK</span>
      </div>
    </div>
    <span className="text-xl font-bold tracking-tight hidden sm:block">
      Simhan N K<span className="text-brand-primary"></span>
    </span>
  </div>
);
