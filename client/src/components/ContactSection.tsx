import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, DollarSign, Zap, Clock, CheckCircle2, Star, ArrowRight } from "lucide-react";
import { SiLinkedin, SiInstagram, SiDiscord, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import GlassCard from "./GlassCard";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  channelUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  packageType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const pricingTiers = [
  { value: "basic", label: "Basic - 1 Thumbnail ($15-20)" },
  { value: "standard", label: "Standard - 3 Thumbnails ($60)" },
  { value: "premium", label: "Premium - 5 Thumbnails ($90)" },
  { value: "monthly", label: "Monthly Package (Contact for price)" },
  { value: "none", label: "None of these" },
];

const platforms = [
  { icon: SiInstagram, href: "https://instagram.com/ankitrikrevo", label: "Instagram", color: "text-pink-500", bg: "bg-pink-500/10 dark:bg-pink-500/20" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/ankitrikrevoo/", label: "LinkedIn", color: "text-blue-500", bg: "bg-blue-500/10 dark:bg-blue-500/20" },
  { icon: SiDiscord, href: "https://discord.gg/zvWQJkKHvJ", label: "Discord", color: "text-indigo-500", bg: "bg-indigo-500/10 dark:bg-indigo-500/20" },
  { icon: SiX, href: "https://twitter.com/ankitrikrevo", label: "X", color: "text-black dark:text-white", bg: "bg-black/10 dark:bg-white/10" },
];

const features = [
  { icon: Zap, text: "Fast Turnaround", subtext: "24-48 hours delivery" },
  { icon: CheckCircle2, text: "Unlimited Revisions", subtext: "Until you're happy" },
  { icon: Star, text: "Premium Quality", subtext: "Click-worthy designs" },
];

const stats = [
  { value: "500+", label: "Thumbnails Created" },
  { value: "150+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      channelUrl: "",
      packageType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    toast({
      title: "Coming Soon",
      description: "The contact form will be available soon. Please reach out via email or social media for now.",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">Available for new projects</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground leading-[1.2] px-4">
            Let's Create Something
            <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to transform your YouTube channel with thumbnails that actually get clicks? Let's make it happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <GlassCard className="p-4 sm:p-6" animate={false}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", damping: 20, stiffness: 300 }}>
              <GlassCard className="p-6" delay={0.1} data-testid="card-contact-info">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", damping: 18, stiffness: 300 }}
                  >
                    <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
                </div>
              <div className="space-y-4">
                <a 
                  href="mailto:ankitrikrevo@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 group hover-elevate transition-all"
                  data-testid="link-email"
                >
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <Mail className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-muted-foreground block">Email</span>
                    <span className="font-medium text-foreground truncate block">ankitrikrevo@gmail.com</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </a>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <DollarSign className="w-5 h-5 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Starting at</span>
                    <span className="font-medium text-foreground">$15 per thumbnail</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Response Time</span>
                    <span className="font-medium text-foreground">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </GlassCard>
            </motion.div>

            <GlassCard className="p-6 hover-elevate" delay={0.2} data-testid="card-why-work">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Why Work With Me?</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1.5 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20">
                      <feature.icon className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground text-sm">{feature.text}</span>
                      <span className="text-xs text-muted-foreground block">{feature.subtext}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 hover-elevate" delay={0.3} data-testid="card-social-connect">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {platforms.map((platform, index) => (
                  <motion.a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl ${platform.bg} border border-white/20 dark:border-white/10 hover-elevate transition-all group`}
                    data-testid={`link-social-${platform.label.toLowerCase()}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 800, damping: 12 }}
                    >
                      <platform.icon className={`w-5 h-5 ${platform.color}`} />
                    </motion.div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{platform.label}</span>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8 hover-elevate" animate={false} data-testid="card-contact-form">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
                  <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 text-[10px] px-1.5 py-0">Coming Soon</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl h-11"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl h-11"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="channelUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">YouTube Channel URL (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://youtube.com/@yourchannel"
                            className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl h-11"
                            data-testid="input-channel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="packageType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Select Package</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl h-11" 
                              data-testid="select-package"
                            >
                              <SelectValue placeholder="Choose your package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper" sideOffset={4} className="z-[100] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-white/30 dark:border-white/10" data-testid="select-package-content">
                            {pricingTiers.map((tier) => (
                              <SelectItem 
                                key={tier.value} 
                                value={tier.value}
                                data-testid={`select-package-${tier.value}`}
                              >
                                {tier.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your channel, content style, and what kind of thumbnails you're looking for..."
                            rows={4}
                            className="bg-white/50 dark:bg-white/5 backdrop-blur border-white/30 dark:border-white/10 rounded-xl resize-none"
                            data-testid="input-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={true}
                    className="w-full bg-gradient-to-r from-red-500/50 to-orange-500/50 text-white rounded-xl py-6 text-base font-medium shadow-lg shadow-red-500/25 opacity-50 cursor-not-allowed"
                    data-testid="button-submit-contact"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Coming Soon
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Free consultation included with every inquiry
                  </p>
                </form>
              </Form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
