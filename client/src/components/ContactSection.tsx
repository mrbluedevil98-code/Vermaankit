import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, DollarSign, Youtube } from "lucide-react";
import { SiLinkedin, SiFiverr, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlassCard from "./GlassCard";
import { useToast } from "@/hooks/use-toast";

const pricingTiers = [
  { value: "basic", label: "Basic - 1 Thumbnail ($25)" },
  { value: "standard", label: "Standard - 3 Thumbnails ($60)" },
  { value: "premium", label: "Premium - 5 Thumbnails ($90)" },
  { value: "monthly", label: "Monthly Package (Contact for price)" },
];

const platforms = [
  { icon: Youtube, href: "#", label: "YouTube", color: "text-red-500" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiFiverr, href: "#", label: "Fiverr", color: "text-green-500" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channelUrl: "",
    package: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Request sent!",
      description: "I'll get back to you within 24 hours with a quote.",
    });
    
    setFormData({ name: "", email: "", channelUrl: "", package: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to level up your YouTube thumbnails? Get in touch and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <GlassCard className="p-6" delay={0.1}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <Mail className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Email</span>
                    <span className="font-medium text-foreground">thumbnails@alexdesigns.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <DollarSign className="w-5 h-5 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Starting at</span>
                    <span className="font-medium text-foreground">$25 per thumbnail</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <MessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Response Time</span>
                    <span className="font-medium text-foreground">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" delay={0.2}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Find Me On</h3>
              <div className="flex gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    className={`p-3 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-foreground/70 hover:text-red-500 dark:hover:text-red-400 hover:bg-white/70 dark:hover:bg-white/10 transition-all ${platform.color || ''}`}
                    data-testid={`link-social-${platform.label.toLowerCase()}`}
                  >
                    <platform.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard className="lg:col-span-3 p-6 md:p-8" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="channelUrl" className="text-foreground">YouTube Channel URL</Label>
                <Input
                  id="channelUrl"
                  name="channelUrl"
                  value={formData.channelUrl}
                  onChange={handleChange}
                  placeholder="https://youtube.com/@yourchannel"
                  className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl"
                  data-testid="input-channel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="package" className="text-foreground">Package</Label>
                <Select
                  value={formData.package}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, package: value }))}
                >
                  <SelectTrigger className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl" data-testid="select-package">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingTiers.map((tier) => (
                      <SelectItem key={tier.value} value={tier.value}>
                        {tier.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Tell me about your project</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What kind of thumbnails do you need? Any specific style or examples you like?"
                  required
                  rows={4}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl py-6"
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </motion.div>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Get a Quote
                  </span>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
