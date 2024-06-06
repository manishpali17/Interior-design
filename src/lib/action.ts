"use server";
import { sendEmail } from "./mail";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Please Provide full Name.",
    })
    .min(1, { message: "Please enter full Name" }),
  email: z.string().email({ message: "Invalid email address" }),
  description: z
    .string({
      invalid_type_error: "Please enter description",
    })
    .min(3, { message: "Please Provide at least few characters" }),
  additionalDetails: z.string().optional(),
});

export type State = {
  status: string;
  message?: string;
  errors?: {
    fullName?: string[];
    email?: string[];
    description?: string[];
    additionalDetails?: string[];
  };
  timestamp: number;
};

export async function createContact(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    description: formData.get("description"),
    additionalDetails: formData.get("additionalDetails"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      status: "ERROR",
      timestamp: Date.now(),
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please fill out all the fields..",
    };
  }

  // Prepare data for insertion into the database
  const { fullName, email, description, additionalDetails } =
    validatedFields.data;

  // Insert data into the database
  try {
    sendEmail(email, description, fullName, additionalDetails);
  } catch (error) {
    console.error(error);
    return {
      status:"ERROR",
      errors:{},
      timestamp:Date.now(),
      message: "Opps, something went wrong. Please try again later.",
    };
  }
  revalidatePath("/");
  return {
    status: "SUCCESS",
    timestamp: Date.now(),
    message:"Contact Successully"
  };
}
