
"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface SidebarItem {
  label: string;
  targetId: string;
}

const sidebarLinks: Record<string, SidebarItem[]> = {
  "/": [
    { label: "About", targetId: "about" },
    { label: "Skills", targetId: "skills" },
    { label: "Projects", targetId: "projects" },
    { label: "Experience", targetId: "experience" },
    { label: "Reviews", targetId: "reviews" },
    { label: "Contact", targetId: "contact" },
  ],
  "/blogs": [
    { label: "Blog", targetId: "blog" },
    { label: "Newsletter", targetId: "newsletter" },
  ],
  "/thirdpage": [
    { label: "Section 1", targetId: "section1" },
    { label: "Section 2", targetId: "section2" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname() ?? "";

  const items: SidebarItem[] = useMemo(() => {
    return sidebarLinks[pathname] || [];
  }, [pathname]);

  const [activeId, setActiveId] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  // Only show sidebar if screen is >= 900px
  useEffect(() => {
    const checkWidth = () => setShowSidebar(window.innerWidth >= 900);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!items.length) {
      setActiveId("");
      return;
    }

    const headerOffset = 80;
    const topBuffer = 10;

    const handleScrollSpy = () => {
      const firstEl = document.getElementById(items[0].targetId);
      if (firstEl) {
        const firstRect = firstEl.getBoundingClientRect();
        if (firstRect.top > headerOffset + topBuffer) {
          setActiveId("");
          return;
        }
      }

      let candidate = "";
      let maxTop = -Infinity;

      items.forEach(({ targetId }) => {
        const el = document.getElementById(targetId);
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top <= headerOffset + topBuffer) {
          if (rect.top > maxTop) {
            maxTop = rect.top;
            candidate = targetId;
          }
        }
      });

      setActiveId(candidate);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [items]);

  if (!showSidebar) return null; // Don't render sidebar on small devices

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-16 left-0 h-[calc(100%-4rem)] w-52 z-40"
      style={{
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        backdropFilter: "blur(20px) saturate(180%)",
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex flex-col h-full py-4">
        <nav className="flex flex-col space-y-1">
          {items.map((item, i) => (
            <motion.button
              key={item.targetId}
              onClick={() => handleScroll(item.targetId)}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i }}
              className={`px-3 py-2 text-left rounded-md text-sm transition-colors
                ${
                  activeId === item.targetId
                    ? "bg-white/20 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <p className="text-xs text-gray-400 px-3">© {new Date().getFullYear()} Aviral Yadav</p>
        </div>
      </div>
    </motion.aside>
  );
}
