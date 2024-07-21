import { Client, Account } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL
}

const client = new Client()
    .setEndpoint(appwriteConfig.url) 
    .setProject(appwriteConfig.projectId);    

export const account = new Account(client);

export default client;