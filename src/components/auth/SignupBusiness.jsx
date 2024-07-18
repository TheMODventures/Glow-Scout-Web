"use client";
import { SignupSchema } from "@/validation/auth.validation";
import Signup from "./Signup";

function SignupForm() {
  function onUserSubmit(data) {
    console.log(data);
  }

  return (
    <Signup
      title="Sign Up as Business"
      schema={SignupSchema}
      linkText="Are you a user? "
      linkHref="/auth/user"
      onSubmit={onUserSubmit}
    />
  );
}

export default SignupForm;
