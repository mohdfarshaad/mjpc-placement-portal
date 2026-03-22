"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Briefcase,
  Search,
  X,
  MapPin,
  Users,
  Filter,
  GraduationCap,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BRANCH_CODES,
  BRANCH_COLORS,
  BRANCH_MAP,
  COMPANIES,
  QUOTES,
} from "./data";
import Image from "next/image";

export default function PlacementPortal() {
  const [query, setQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState<string | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

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
        c.branches.some(
          (b) =>
            BRANCH_MAP[b]?.toLowerCase().includes(q) ||
            b.toLowerCase().includes(q),
        ) ||
        c.vacancy.toLowerCase().includes(q) ||
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

  const toggleBranch = (branch: string) => {
    setActiveBranch((prev) => (prev === branch ? null : branch));
    setQuery("");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
        {/* ── Header ── */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg">
                <Briefcase className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-base font-semibold leading-tight tracking-tight">
                  Majlis Placement Drive
                </p>
                <p className="text-xs text-muted-foreground">
                  Campus Recruitment Portal 2026
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="text-sm font-medium px-3 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-sm dark:from-green-950/40 dark:to-emerald-950/40 dark:text-green-400 dark:border-green-800"
            >
              <Calendar className="h-3 w-3 mr-1" />
              Active Now
            </Badge>
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
            <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-linear-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
              {QUOTES[quoteIndex]}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Discover your dream opportunity from{" "}
              <strong className="text-foreground font-semibold">
                {COMPANIES.length}+
              </strong>{" "}
              top companies actively recruiting from campus. Filter by branch,
              search by name, and take the next step in your career journey.
            </p>

            {/* Stats row */}
            {/* <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
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
                  value: new Set(
                    COMPANIES.flatMap((c) => c.location.split(", ")),
                  ).size,
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
                  label: "With Stipend",
                  value: COMPANIES.filter((c) => c.salary).length,
                  color: "from-amber-500/10 to-amber-500/5",
                },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${color} shadow-sm`}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold tracking-tight">
                      {value}
                    </span>
                    <span className="ml-1 text-xs font-medium text-muted-foreground">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
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
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Briefcase className="h-7 w-7 text-muted-foreground" />
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
                />
              ))}
            </div>
          )}
        </main>

        {/* ── Footer ── */}
        <footer className="mt-8 border-t py-8 text-center text-sm text-muted-foreground">
          <div className="mx-auto max-w-7xl px-4">
            <p>
              © 2026{" "}
              <span className="font-semibold text-foreground">
                Majlis Placement Drive
              </span>{" "}
              — Empowering campus talent for tomorrow&qoute s industry.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

function CompanyCard({
  company,
  activeBranch,
  onBranchClick,
}: {
  company: (typeof COMPANIES)[0];
  activeBranch: string | null;
  onBranchClick: (branch: string) => void;
}) {
  return (
    <Card className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 pointer-events-none" />

      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm">
            <Image
              src={"/building.svg"}
              alt={`${company.name} logo`}
              className="h-full w-full object-contain p-1.5"
              width={50}
              height={50}
            />
          </div>

          {/* Company Name and Salary */}
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold leading-tight tracking-tight line-clamp-2">
              {company.name}
            </CardTitle>
            {company.salary && (
              <Badge className="mt-1.5 inline-flex bg-linear-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 dark:from-green-950/60 dark:to-emerald-950/60 dark:text-green-300 dark:border-green-800 text-xs font-semibold px-2.5 py-1">
                💰 {company.salary}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 pb-5">
        {/* Branch badges */}
        <div className="flex flex-wrap gap-1.5">
          {company.branches.map((b) => (
            <Tooltip key={b}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onBranchClick(b)}
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
                    BRANCH_COLORS[b] ??
                    "bg-muted text-muted-foreground border-border"
                  } ${
                    activeBranch === b
                      ? "ring-2 ring-offset-1 ring-primary/50 scale-105"
                      : "hover:scale-105 hover:shadow-sm"
                  }`}
                >
                  {b}
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-sm">
                <p>{BRANCH_MAP[b] ?? b}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Separator className="my-1" />

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{company.location}</span>
        </div>

        {/* Vacancy */}
        {company.vacancy && company.vacancy !== "—" && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-2 text-sm">{company.vacancy}</span>
          </div>
        )}

        {/* Footer with serial number and view details */}
        <div className="mt-4 flex items-center justify-between pt-1 border-t border-border/40">
          <span className="text-[11px] text-muted-foreground/40 font-mono tracking-wide">
            #{String(company.sl).padStart(2, "0")}
          </span>
          {/* <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-1.5">
            View details
            <ChevronRight className="h-3.5 w-3.5" />
          </span> */}
        </div>
      </CardContent>
    </Card>
  );
}
