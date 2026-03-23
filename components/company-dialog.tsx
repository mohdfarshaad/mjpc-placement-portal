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

export function CompanyDialog({ open, onOpenChange, company }: CompanyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{company.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 relative rounded-2xl border bg-white p-2">
                <Image src={company.image} alt={company.name} fill className="object-contain p-2" />
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Interview Location</p>
                <p className="text-lg font-bold text-primary">{company.room}</p>
                <p className="text-sm font-medium">{company.floor} Floor</p>
            </div>
          </div>

          <div className="grid gap-4 border-t pt-4">
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">{company.location}</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Job Roles / Vacancy</span>
                <span className="text-sm bg-muted p-2 rounded-lg">{company.vacancy || "Not specified"}</span>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}