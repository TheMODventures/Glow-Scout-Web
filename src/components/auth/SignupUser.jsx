"use client";
import { SignupSchema } from "@/validation/auth.validation";
import Signup from "./Signup";

function SignupForm() {
  function onUserSubmit(data) {
    console.log(data);
  }

  return (
    <Signup
      title="Sign Up as User"
      schema={SignupSchema}
      linkText="Are you a business? "
      linkHref="/auth/business"
      onSubmit={onUserSubmit}
    />
  );
}

export default SignupForm;
