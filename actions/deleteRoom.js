"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function deleteRoom(roomId) {
  const sessionCookie = cookies().get("appwrite-session");
  if (!sessionCookie) {
    redirect("/login");
  }

  try {
    const { account, databases } = await createSessionClient(
      sessionCookie.value
    );
    //Get user's ID
    const user = await account.get();
    const userId = user.$id;
    //Fetch user's rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal("user_id", userId)]
    );
    //Find room to delete

    const roomToDelete = rooms.find((room) => room.$id === roomId);
    // delee the room
    if (roomToDelete) {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        roomToDelete.$id
      );
      // Revalidate the my rooms and all rooms
      revalidatePath("/rooms/my", "layout");
      revalidatePath("/", "layout");

      return { success: "Room deleted successfully!!!" };
    } else {
      return { error: "Room not found" };
    }
  } catch (error) {
    console.log("Failed to delete rooms", error);
  }
}
export default deleteRoom;
