"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  if (!email || !name || !password) {
    return {
      error: "Please fill in all fields.",
    };
  }
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 character long.",
    };
  }
  if (password !== confirmPassword) {
    return {
      error: "Password do not match.",
    };
  }
  //Get account imstance
  const { account } = await createAdminClient();

  try {
    //create user
    await account.create(ID.unique(), email, password, name);
    return {
      success: true,
    };
  } catch (error) {
    console.log("registration error");

    return {
      error: "Could not register user",
    };
  }
}
export default createUser;
