// sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'l0ay2hgi',    
  dataset: 'production',         
  apiVersion: '2024-10-23',      
  useCdn: true,   
  // token: "sko4cHoiMG1tA28Yy1V9QtIL9BBWNKIOwmrK6PnOiLleQ7r8Hjb3cdK10DRLni1kd9sDZvg4p4bK2KEI3jodbYpjDSN4nYpgnCMJwsNO4L18inL539QLQGxcD1d742JncCmciBwohJbFmhwrGfJdKaG6EZ2peIGxaoycBkjBDYxu3x2DAA9v"               
  token:process.env.SANITY_TOKEN
});

export default client;
