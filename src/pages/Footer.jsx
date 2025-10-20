import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} Sky Food. All rights reserved.</p>
      <p className="text-sm mt-1">
        Developed by <span className="text-blue-400 font-semibold">Hussien</span> — FlowTech Team
      </p>
    </footer>
  );
}
