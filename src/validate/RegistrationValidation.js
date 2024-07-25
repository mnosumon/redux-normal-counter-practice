import * as Yup from "yup";

export const registrationError = Yup.object({
  fullName: Yup.string().min(3).max(15).required("Enter valide name"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Enter valide email"),
  password: Yup.string().min(8).required("Enter valide password"),
});
