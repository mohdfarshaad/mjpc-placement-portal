import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";
import { BRANCH_MAP, Company } from "../app/data";
import Image from "next/image";

interface CompanyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  company: Company;
}

export function CompanyDialog({
  open,
  onOpenChange,
  company,
}: CompanyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">{company.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          {/* Company Logo */}
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm">
              <Image
                src="/company-logo-placeholder.svg"
                alt={`${company.name} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain p-1.5"
                priority
              />
            </div>
          </div>
          {/* Branches */}
          <div className="flex flex-wrap gap-2">
            {company.branches.map((b) => (
              <Badge key={b} variant="outline">
                {BRANCH_MAP[b] ?? b}
              </Badge>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{company.location}</span>
          </div>

          {/* Vacancy */}
          {company.vacancy && (
            <div className="flex items-start gap-2 text-muted-foreground">
              <Users className="h-4 w-4 mt-0.5" />
              <span>{company.vacancy}</span>
            </div>
          )}

          {/* Salary */}
          {company.salary && (
            <div className="font-medium text-green-600">
              💰 {company.salary}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
