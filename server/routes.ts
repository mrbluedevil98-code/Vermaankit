import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactMessageSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const readableError = fromError(validationResult.error);
        return res.status(400).json({ 
          success: false, 
          message: readableError.toString() 
        });
      }

      const message = await storage.createContactMessage(validationResult.data);
      
      return res.status(201).json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you within 24 hours.",
        data: { id: message.id }
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Something went wrong. Please try again later." 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json({ success: true, data: messages });
    } catch (error) {
      console.error("Get messages error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  return httpServer;
}
