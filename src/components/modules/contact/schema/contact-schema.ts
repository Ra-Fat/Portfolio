import * as v from "valibot";
import {
  isRequiredEmail,
  isRequiredString,
  isOptionalString,
} from "../../../../utils/validation/validation";

export const ContactSchema = v.object({
  name: isRequiredString("Name is required"),
  email: isRequiredEmail("Please enter a valid email"),
  message: isOptionalString(),
});

export type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};
