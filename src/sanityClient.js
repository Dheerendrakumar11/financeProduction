// sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'l0ay2hgi',    
  dataset: 'production',         
  apiVersion: '2024-10-23',      
  useCdn: true,                  
});

export default client;
