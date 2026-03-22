"use client";

import { useMemo, useState } from "react";
import { BRANCH_LABELS, COMPANIES, QUOTES } from "./data";
import { Briefcase, Search, X } from "lucide-react";

export default function PlacementPortal() {
  const [query, setQuery] = useState("");
  const [activeBranch, setActiveBranch] = useState(null);
  const [activeQuote] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return COMPANIES.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.branches.some((b) => b.toLowerCase().includes(q)) ||
        c.vacancy.toLowerCase().includes(q);
      const matchesBranch = !activeBranch || c.branches.includes(activeBranch);
      return matchesQuery && matchesBranch;
    });
  }, [query, activeBranch]);

  const handleBranchClick = (branch) => {
    if (activeBranch === branch) {
      setActiveBranch(null);
      setQuery("");
    } else {
      setActiveBranch(branch);
      setQuery("");
    }
  };

  const clearAll = () => {
    setQuery("");
    setActiveBranch(null);
  };

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-dot" />
            <div>
              <div className="header-title">Majlis Placement Drive</div>
              <div className="header-subtitle">Campus Recruitment Portal</div>
            </div>
          </div>
          <div className="header-badge">2025 Active</div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Campus Placement Season 2025
          </div>
          <h1 className="hero-headline">
            {QUOTES[activeQuote]
              .split(" ")
              .map((w, i) => (i === 1 ? <em key={i}> {w} </em> : w + " "))}
          </h1>
          <p className="hero-quote">
            Explore {COMPANIES.length} companies actively recruiting from
            campus. Filter by branch, search by name, and discover your perfect
            opportunity.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <div className="search-wrapper">
          <div className="search-top">
            <Search
              size={18}
              className="search-icon"
              style={{ color: "#999" }}
            />
            <input
              className="search-input"
              placeholder="Search by company name, branch, or type..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveBranch(null);
              }}
            />
            {(query || activeBranch) && (
              <button className="search-clear" onClick={clearAll}>
                <X size={13} />
              </button>
            )}
          </div>
          <div className="branches-row">
            <span className="filter-label">Filter:</span>
            {BRANCH_LABELS.map((b) => {
              const isActive = activeBranch === b;
              return (
                <button
                  key={b}
                  className={`branch-badge${isActive ? " active" : ""}`}
                  onClick={() => handleBranchClick(b)}
                >
                  {b}
                  {isActive && <X size={11} />}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="content-section">
        <div className="results-header">
          <p className="results-count">
            Showing <strong>{filtered.length}</strong> of {COMPANIES.length}{" "}
            companies
            {activeBranch && (
              <>
                {" "}
                · <strong>{activeBranch}</strong>
              </>
            )}
            {query && (
              <>
                {" "}
                · "<strong>{query}</strong>"
              </>
            )}
          </p>
          {(query || activeBranch) && (
            <button className="clear-btn" onClick={clearAll}>
              Clear filters
            </button>
          )}
        </div>

        <div className="card-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <Briefcase size={28} />
              </div>
              <div className="empty-title">No companies found</div>
              <p className="empty-sub">
                Try a different search term or remove the active filter.
              </p>
              <button className="empty-reset" onClick={clearAll}>
                Reset Search
              </button>
            </div>
          ) : (
            filtered.map((company) => {
              return (
              
              );
            })
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">
          © 2025 <span>Majlis Placement Drive</span> · All rights reserved ·
          Built for Campus Excellence
        </p>
      </footer>
    </div>
  );
}
