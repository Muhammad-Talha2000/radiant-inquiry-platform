import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
  website: z.string().trim().max(255).optional(),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});

interface LeadFormProps {
  ctaLabel?: string;
  compact?: boolean;
}

export const LeadForm = ({ ctaLabel = "Get my free audit", compact = false }: LeadFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      website: String(fd.get("website") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    // Simulate submission — wire to backend later
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  if (done) {
    return (
      <div className="glass-card p-8 text-center animate-scale-in">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary shadow-glow mb-4">
          <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">You're in.</h3>
        <p className="text-muted-foreground">
          We'll review your details and get back to you within 24 hours with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "glass-card p-6 md:p-8 space-y-5"}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required maxLength={80} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required maxLength={255} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website (optional)</Label>
        <Input id="website" name="website" placeholder="https://yourcompany.com" maxLength={255} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your goals, current traffic, and what you'd like to improve."
          rows={5}
          required
          maxLength={1500}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : ctaLabel}
        <Send className="h-4 w-4" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We reply within 24h. No spam, ever.
      </p>
    </form>
  );
};
