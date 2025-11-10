"use client";

import React, { useState } from "react";
import { Percent, X, ExternalLink } from "lucide-react";

const BlackFridayCTA = () => {
  const [visible, setVisible] = useState(true);

  const handleCatalogClick = () => {
    window.open("https://catalogo.bmimports.com.br", "_blank");
  };

  const handleContactClick = () => {
    const el = document.getElementById("contato");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs sm:max-w-sm">
      <div className="relative rounded-2xl p-5 shadow-premium border border-red-600/40 bg-gradient-to-br from-black/85 via-slate-900/85 to-red-900/60 backdrop-blur-md">
        <button
          aria-label="Fechar aviso de Black Friday"
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-black/70 text-white rounded-full p-2 shadow-soft hover:bg-black motion-premium"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-medium">
            <Percent size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Black Friday BM Imports</p>
            <p className="text-slate-200 text-xs">
              Ofertas exclusivas e condições imperdíveis.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleCatalogClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-semibold motion-premium hover:scale-105 shadow-large flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10">Ver Ofertas</span>
            <ExternalLink size={16} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button
            onClick={handleContactClick}
            className="w-full glass-effect hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-medium motion-premium hover:scale-105 shadow-soft"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayCTA;