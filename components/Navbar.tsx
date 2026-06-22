"use client";

import { Download, Moon, RotateCcw, Sun, Upload } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { navigationItems } from "@/data/navigation";
import { useProgress } from "@/components/ProgressProvider";

type ThemeMode = "dark" | "light";
type ThemeBurst = {
  id: number;
  theme: ThemeMode;
  x: number;
  y: number;
};

const THEME_STORAGE_KEY = "jared-platform-engineering-launchpad:theme";

export function Navbar() {
  const pathname = usePathname();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const themeButtonRef = useRef<HTMLButtonElement | null>(null);
  const themeTimeoutRef = useRef<number | null>(null);
  const { isLoaded, exportProgress, importProgress, resetProgress } = useProgress();
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [themeBurst, setThemeBurst] = useState<ThemeBurst | null>(null);

  const title = navigationItems.find((item) => item.href === pathname)?.label ?? "Launchpad";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: ThemeMode = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    return () => {
      if (themeTimeoutRef.current) {
        window.clearTimeout(themeTimeoutRef.current);
      }
    };
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    const buttonRect = themeButtonRef.current?.getBoundingClientRect();
    const x = buttonRect ? buttonRect.left + buttonRect.width / 2 : window.innerWidth - 96;
    const y = buttonRect ? buttonRect.top + buttonRect.height / 2 : 36;

    if (themeTimeoutRef.current) {
      window.clearTimeout(themeTimeoutRef.current);
    }

    document.documentElement.classList.add("theme-animating");
    setThemeBurst({ id: Date.now(), theme: nextTheme, x, y });
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    themeTimeoutRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-animating");
      setThemeBurst(null);
    }, 820);
  }

  function showMessage(nextMessage: string) {
    setMessage(nextMessage);
    window.setTimeout(() => setMessage(""), 2200);
  }

  function handleExport() {
    const blob = new Blob([exportProgress()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `jared-launchpad-progress-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showMessage("Progress exported");
  }

  async function handleImport(file: File) {
    try {
      const raw = await file.text();
      importProgress(raw);
      showMessage("Progress imported");
    } catch {
      showMessage("Import failed");
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  function handleReset() {
    const confirmed = window.confirm("Reset all saved launchpad progress?");
    if (confirmed) {
      resetProgress();
      showMessage("Progress reset");
    }
  }

  return (
    <>
      {themeBurst ? (
        <span
          key={themeBurst.id}
          className={`theme-transition-burst theme-transition-burst-${themeBurst.theme}`}
          style={
            {
              "--theme-x": `${themeBurst.x}px`,
              "--theme-y": `${themeBurst.y}px`
            } as CSSProperties
          }
          aria-hidden="true"
        />
      ) : null}
      <header className="app-navbar sticky top-0 z-30 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="flex min-h-[73px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase text-cyan-100">{isLoaded ? "Progress saved locally" : "Loading local progress"}</p>
          <h1 className="mt-1 text-lg font-semibold text-white">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          {message ? <span className="hidden text-sm text-cyan-100 sm:inline">{message}</span> : null}
          <button
            ref={themeButtonRef}
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-button focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.1] text-slate-100 shadow-pill transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span key={theme} className="theme-toggle-icon">
              {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </span>
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.1] px-3 py-2 text-sm font-medium text-slate-100 shadow-pill transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            aria-label="Export progress as JSON"
            title="Export progress"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.1] px-3 py-2 text-sm font-medium text-slate-100 shadow-pill transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            aria-label="Import progress JSON"
            title="Import progress"
          >
            <Upload className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Import</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                void handleImport(file);
              }
            }}
          />
          <button
            type="button"
            onClick={handleReset}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.1] px-3 py-2 text-sm font-medium text-slate-100 shadow-pill transition hover:border-rose-300/40 hover:bg-rose-300/10"
            aria-label="Reset all progress"
            title="Reset progress"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
      </header>
    </>
  );
}
