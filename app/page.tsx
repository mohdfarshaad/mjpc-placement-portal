"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Briefcase,
  Search,
  X,
  Users,
  Filter,
  GraduationCap,
  Calendar,
  Sparkles,
  Building2,
  MapPin,
  Banknote,
  MessageCircle,
  FileEdit,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Branch,
  BRANCH_CODES,
  BRANCH_COLORS,
  BRANCH_MAP,
  COMPANIES,
  QUOTES,
} from "./data";
import { ModeToggle } from "../components/mode-toggle";
import { CompanyDialog } from "../components/company-dialog";
import CompanyCard from "@/components/company-card";
import Image from "next/image";
import Link from "next/link";

export default function PlacementPortal() {
  const [query, setQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<
    (typeof COMPANIES)[0] | null
  >(null);

  useEffect(() => {
    const id = setInterval(
      () => setQuoteIndex((i) => (i + 1) % QUOTES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const filtered = useMemo(() => {
  const q = query.toLowerCase().trim();
  return COMPANIES.filter((c) => {
    const matchesQuery =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.room.toLowerCase().includes(q) || 
      c.floor.toLowerCase().includes(q) || 
      c.branches.some(b => b.toLowerCase().includes(q)) ||
      c.location.toLowerCase().includes(q);
    
    const matchesBranch = !activeBranch || c.branches.includes(activeBranch);
    return matchesQuery && matchesBranch;
  });
}, [query, activeBranch]);

  const hasFilters = query.trim() !== "" || activeBranch !== null;

  const clearAll = () => {
    setQuery("");
    setActiveBranch(null);
  };

  const toggleBranch = (branch: Branch) => {
    setActiveBranch((prev) => (prev === branch ? null : branch));
    setQuery("");
  };
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        {/* ── Header ── */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
            {/* Left */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary/80 shadow-lg overflow-hidden border border-border/50">
  <Image 
    src="/mjpc-logo.jpeg" 
    alt="logo" 
    height={40} 
    width={40} 
    className="h-full w-full object-cover" 
  />
</div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight tracking-tight sm:text-base">
                  Majlis Placement Drive
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  Campus Recruitment Portal 2026
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-4">
              <ModeToggle />

              <Badge
                variant="outline"
                className="hidden sm:inline-flex text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-sm dark:from-green-950/40 dark:to-emerald-950/40 dark:text-green-400 dark:border-green-800"
              >
                <Calendar className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </header>

        {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-12 text-center md:py-16">
  {/* Animated background decoration */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
  </div>

  <div className="mx-auto max-w-4xl">
    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15 border-none px-3 py-1 text-xs font-semibold tracking-wide">
      <Sparkles className="h-3 w-3 mr-1" />
      Recruitment Season 2026
    </Badge>
    
    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-linear-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
      {QUOTES[quoteIndex]}
    </h1>

    {/* CTA Buttons */}
    <div className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-4">
      <Link 
        href="https://chat.whatsapp.com/K1dzuf90q960lduulTPz59" 
        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
      >
        <MessageCircle className="h-4 w-4" />
        Join WhatsApp
      </Link>
      <Link 
        href="https://forms.gle/HXyZYJ5mBxNKxoJM6" 
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white dark:text-black  transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
      >
        <FileEdit className="h-4 w-4" />
        Register Now
      </Link>
    </div>

    {/* Stats row */}
    <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
      {[
        {
          icon: Building2,
          label: "Companies",
          value: COMPANIES.length,
          color: "from-blue-500/10 to-blue-500/5",
        },
        {
          icon: MapPin,
          label: "Locations",
          // Fixed split logic to be more robust
          value: new Set(COMPANIES.flatMap((c) => c.location.split(",").map(s => s.trim()))).size,
          color: "from-emerald-500/10 to-emerald-500/5",
        },
        {
          icon: GraduationCap,
          label: "Branches",
          value: BRANCH_CODES.length,
          color: "from-purple-500/10 to-purple-500/5",
        },
        {
          icon: Banknote,
          label: "Open Vacancies",
          // Calculate total from the new vacancy strings
          value: COMPANIES.reduce((acc, curr) => acc + (parseInt(curr.vacancy) || 0), 0) || "1800+",
          color: "from-amber-500/10 to-amber-500/5",
        },
      ].map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${color} shadow-sm border border-white/10`}
          >
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold tracking-tight">
              {value}
            </span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ── Search & Filters ── */}
        <section className="sticky top-15.25 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 py-4 shadow-sm">
          <div className="mx-auto max-w-7xl space-y-4">
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-11 pl-10 pr-10 text-base rounded-xl border-muted-foreground/20 focus-visible:ring-primary/30"
                placeholder="Search by company name, branch, location, or role..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveBranch(null);
                }}
              />
              {query && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setQuery("")}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Branch filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter by branch:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {BRANCH_CODES.map((code) => {
                  const isActive = activeBranch === code;
                  const branchColor =
                    BRANCH_COLORS[code] ||
                    "bg-muted text-muted-foreground border-border";
                  return (
                    <Tooltip key={code}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => toggleBranch(code)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? `${branchColor} ring-2 ring-primary/40 ring-offset-1 ring-offset-background shadow-sm`
                              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {code}
                          {isActive && <X className="h-3 w-3" />}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-sm">
                        <p>{BRANCH_MAP[code] ?? code}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
          {/* Results meta */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="text-sm px-3 py-1 font-normal"
              >
                <Users className="h-3.5 w-3.5 mr-1.5" />
                {filtered.length} / {COMPANIES.length} companies
              </Badge>
              {activeBranch && (
                <Badge
                  variant="outline"
                  className="text-sm px-3 py-1 font-normal gap-1.5 bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3 w-3" />
                  {BRANCH_MAP[activeBranch] ?? activeBranch}
                </Badge>
              )}
              {query && (
                <Badge
                  variant="outline"
                  className="text-sm px-3 py-1 font-normal gap-1.5"
                >
                  <Search className="h-3 w-3" />
                  {query}
                </Badge>
              )}
            </div>
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                className="h-8 text-sm gap-1.5 hover:bg-muted"
              >
                <X className="h-3.5 w-3.5" /> Clear all filters
              </Button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/20 py-16 text-center">
              <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-muted p-4">
                <Image
                  src="/not-found.svg"
                  alt="not found"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-semibold">No companies found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or remove the active filters.
              </p>
              <Button
                variant="outline"
                size="default"
                className="mt-6"
                onClick={clearAll}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((company) => (
                <CompanyCard
                  key={company.sl}
                  company={company}
                  activeBranch={activeBranch}
                  onBranchClick={toggleBranch}
                  onClick={() => setSelectedCompany(company)}
                />
              ))}
            </div>
          )}
        </main>

        <footer className="border-t bg-muted/20">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Majlis Placement Drive
              </span>
            </div>

            {/* Center */}
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © 2026 Majlis Polytechnic — Empowering campus talent for
              tomorrow’s industry.
            </p>

            {/* Right */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground sm:justify-end">
              <span>{COMPANIES.length}+ Companies</span>
              <span>•</span>
              <span>{BRANCH_CODES.length} Branches</span>
            </div>
          </div>
        </footer>
        {selectedCompany && (
          <CompanyDialog
            open={!!selectedCompany}
            company={selectedCompany}
            onOpenChange={(open) => {
              if (!open) setSelectedCompany(null);
            }}
          />
        )}
      </div>
    </TooltipProvider>
  );
}
