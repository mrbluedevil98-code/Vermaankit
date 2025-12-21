import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { fromError } from "zod-validation-error";
import nodemailer from "nodemailer";

const GMAIL_USER = 'ankitrikrevo@gmail.com';
const GMAIL_PASSWORD = process.env.GMAIL_APP_PASSWORD;

// Initialize email transporter with explicit Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

// Verify connection when server starts (only if credentials are set)
if (GMAIL_PASSWORD) {
  transporter.verify((error: Error | null, success: boolean) => {
    if (error) {
      console.error('Email transporter error:', error);
    } else if (success) {
      console.log('Email transporter is ready to send messages');
    }
  });
}

async function sendContactEmailNotification(data: InsertContactMessage) {
  if (!GMAIL_PASSWORD) {
    console.error('GMAIL_APP_PASSWORD environment variable is not set');
    return;
  }

  try {
    const emailBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Package Type: ${data.packageType || 'Not specified'}
YouTube Channel: ${data.channelUrl || 'Not provided'}

Message:
${data.message}

---
This is an automated notification from your portfolio website.
`;

    await transporter.sendMail({
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Package Type:</strong> ${data.packageType || 'Not specified'}</p>
        <p><strong>YouTube Channel:</strong> ${data.channelUrl || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    console.log(`Email sent successfully to ${GMAIL_USER}`);
  } catch (error) {
    console.error('Failed to send email notification:', error);
    // Don't throw - let the contact form still succeed even if email fails
  }
}

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
      
      // Send email notification asynchronously (don't wait for it)
      sendContactEmailNotification(validationResult.data).catch(err => 
        console.error('Email send error:', err)
      );
      
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
