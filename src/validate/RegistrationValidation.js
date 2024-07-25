import * as Yup from "yup";

export const registrationError = Yup.object({
  fullName: Yup.string().min(3).max(15).required("Enter valide name"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Enter valide email"),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must be use 1 special charecter"
    )
    .required("Enter valide password"),
});
