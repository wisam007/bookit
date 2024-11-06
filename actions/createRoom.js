"use server";

import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
async function createRoom(previousState, formData) {
  //get databases instance

  const { databases } = await createAdminClient();
  try {
    const { user } = await checkAuth();
    if (!user) {
      return { error: "You must belogged in to create a room" };
    }
    //create room

    const newRoom = await databases.createDocument();
  } catch (error) {}
}
export default createRoom;
