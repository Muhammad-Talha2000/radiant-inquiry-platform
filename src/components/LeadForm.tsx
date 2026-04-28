import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});

type FormValues = z.infer<typeof schema>;

interface LeadFormProps {
  ctaLabel?: string;
  compact?: boolean;
}

export const LeadForm = ({ ctaLabel = "Get my free audit", compact = false }: LeadFormProps) => {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", website: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          website: data.website || "—",
          message: data.message,
          to_email: "hello@orbitp1.com",
        },
        { publicKey },
      );

      setDone(true);
      toast.success("Thanks! We'll be in touch within 24 hours.");
    } catch (err) {
      console.error("Lead form submission failed:", err);
      toast.error("Couldn't send your message. Please email hello@orbitp1.com directly.");
    }
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
    <form
      onSubmit={handleSubmit(onSubmit, (errs) => {
        const first = Object.values(errs)[0];
        if (first?.message) toast.error(String(first.message));
      })}
      className={compact ? "space-y-5" : "glass-card p-8 md:p-10 space-y-6"}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">Name</Label>
          <Input id="name" placeholder="Jane Doe" maxLength={80} className="h-12 text-base" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">Email</Label>
          <Input id="email" type="email" placeholder="jane@company.com" maxLength={255} className="h-12 text-base" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-base">Website (optional)</Label>
        <Input id="website" placeholder="https://yourcompany.com" maxLength={255} className="h-12 text-base" {...register("website")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">How can we help?</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your goals, current traffic, and what you'd like to improve."
          rows={5}
          maxLength={1500}
          className="text-base"
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="w-full text-base">
        {isSubmitting ? "Sending…" : ctaLabel}
        <Send className="h-5 w-5" />
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        We reply within 24h. No spam, ever.
      </p>
    </form>
  );
};
