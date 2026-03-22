import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator, Tooltip } from "radix-ui";
import { TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { BRANCH_MAP } from "@/app/data";

export default function CompanyCard({
  company,
  activeBranch,
  onBranchClick,
  onClick,
}: {
  company: (typeof COMPANIES)[0];
  activeBranch: Branch | null;
  onBranchClick: (branch: Branch) => void;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
      onClick={onClick}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 pointer-events-none" />

      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm">
            <Image
              src={"/company-logo-placeholder.svg"}
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
          {company.branches.map((b) => {
            const isActive = activeBranch === b;

            return (
              <Tooltip key={b} asChild>
                <TooltipTrigger
                  onClick={(e) => {
                    e.stopPropagation();
                    onBranchClick(b);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-background"
                  }`}
                >
                  {BRANCH_MAP[b] ?? b}
                </TooltipTrigger>

                <TooltipContent side="top" className="text-sm">
                  <p>{BRANCH_MAP[b] ?? b}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
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
        </div>
      </CardContent>
    </Card>
  );
}
