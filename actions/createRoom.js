"use server";

import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
async function createRoom(previousState, formData) {
  //get databases instance

  const { databases, storage } = await createAdminClient();
  try {
    const { user } = await checkAuth();
    if (!user) {
      return { error: "You must belogged in to create a room" };
    }
    // uploading image
    let imageID;
    const image = formData.get("image");
    if (image && image.size > 0 && image.name !== "undefined") {
      try {
        //upload
        const response = await storage.createFile("rooms", ID.unique(), image);
        console.log(response);
        imageID = response.$id;
      } catch (error) {
        console.log("error uploading image");
        return {
          error: "Error uploading image",
        };
      }
    } else {
      console.log("No image file is provided or invalid file format.");
    }
    //create room

    const newRoom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS,
      ID.unique(),
      {
        user_id: user.id,
        name: formData.get("name"),
        description: formData.get("description"),
        sqft: formData.get("sqft"),
        capacity: formData.get("capacity"),
        location: formData.get("location"),
        address: formData.get("address"),
        availability: formData.get("availability"),
        price_per_hour: formData.get("price_per_hour"),
        amenities: formData.get("amenities"),
        image: imageID,
      }
    );
    revalidatePath("/", "layout");
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response.message || "An unexpected error has occured";
    return { error: errorMessage };
  }
}
export default createRoom;
