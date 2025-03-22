import { 
  users, 
  waitlistEntries, 
  contactMessages, 
  type User, 
  type InsertUser, 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntry(id: number): Promise<WaitlistEntry | undefined>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getAllWaitlistEntries(): Promise<WaitlistEntry[]>;
  
  // Contact methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  private contacts: Map<number, ContactMessage>;
  
  private currentUserId: number;
  private currentWaitlistId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.contacts = new Map();
    
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentContactId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Waitlist methods
  async createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentWaitlistId++;
    const createdAt = new Date();
    // Ensure company is null if not provided
    const { company, ...rest } = entry;
    const waitlistEntry: WaitlistEntry = { 
      ...rest, 
      company: company ?? null, 
      id, 
      createdAt 
    };
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistEntry(id: number): Promise<WaitlistEntry | undefined> {
    return this.waitlist.get(id);
  }
  
  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email === email
    );
  }
  
  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }
  
  // Contact methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const createdAt = new Date();
    const contactMessage: ContactMessage = { ...message, id, createdAt };
    this.contacts.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contacts.get(id);
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
