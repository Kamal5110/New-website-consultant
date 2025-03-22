import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema, insertContactMessageSchema } from "@shared/schema";
import { z, ZodError } from "zod";
import { ValidationError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist routes
  app.post("/api/waitlist", async (req, res) => {
    try {
      const entry = insertWaitlistEntrySchema.parse(req.body);
      const result = await storage.createWaitlistEntry(entry);
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Failed to add to waitlist" });
    }
  });

  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      return res.json(entries);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch waitlist entries" });
    }
  });

  // Contact message routes
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertContactMessageSchema.parse(req.body);
      const result = await storage.createContactMessage(message);
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.json(messages);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
