import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const waitlistFormSchema = insertWaitlistEntrySchema.extend({
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an area of interest"),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function WaitlistSection() {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();
  const { ref: formSectionRef, isVisible: formSectionVisible } = useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: null,
      interest: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: (data: WaitlistFormValues) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for joining our waitlist! We'll be in touch soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: WaitlistFormValues) {
    waitlistMutation.mutate(data);
  }

  return (
    <section id="waitlist" className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className={`max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-700 ${
            containerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-primary p-8 text-white">
              <div>
                <h2 className="text-2xl font-bold mb-4">Join Our HR Innovation Waitlist</h2>
                <p className="mb-6">
                  Be the first to access our upcoming HR tools and services. Sign up to get early access and exclusive professional resources.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mt-1 mr-2"></i>
                    <span>Early access to new HR solutions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mt-1 mr-2"></i>
                    <span>Exclusive HR resources and templates</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mt-1 mr-2"></i>
                    <span>Priority consulting services</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle mt-1 mr-2"></i>
                    <span>Latest HR trends and best practices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              ref={formSectionRef}
              className={`md:w-1/2 p-8 transform transition-all duration-700 ${
                formSectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={field.value || ''} 
                            onChange={(e) => field.onChange(e.target.value || null)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested In</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="recruitment">Recruitment & Staffing</SelectItem>
                            <SelectItem value="compliance">HR Compliance</SelectItem>
                            <SelectItem value="performance">Performance Management</SelectItem>
                            <SelectItem value="training">Training & Development</SelectItem>
                            <SelectItem value="organizational">Organizational Development</SelectItem>
                            <SelectItem value="employee-relations">Employee Relations</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
                    disabled={waitlistMutation.isPending}
                  >
                    {waitlistMutation.isPending ? "Processing..." : "Join Waitlist"}
                  </Button>
                  
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
