import { Client, Databases, Account, Storage } from "node-appwrite";

//Admin Client
const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) // Your project ID
    .setKey(process.env.NEXT_APPWRITE_KEY); // Your secret API key
  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get Storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRIE_PROJECT); // Your project ID4

  if (session) {
    client.setSession(session);
  }
  return {
    get account() {
      return new Account(client);
    },
    get dabtabase() {
      return new Databases(client);
    },
  };
};

export { createAdminClient, createSessionClient };
