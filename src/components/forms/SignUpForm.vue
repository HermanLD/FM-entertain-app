<script setup>
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import { ref, object, string } from "yup";
import { useUserStore } from "@/stores/user";

import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

const user = useUserStore();
const router = useRouter();

const errorMsgs = {
  match: "Match password",
  require: "Can't be empty",
  email: "Must be an email",
  min: "Minimum 8 characters ",
};

// Define a validation schema
const formSchema = object({
  email_signin: string().required(errorMsgs.require).email(errorMsgs.email),
  password_signin: string().required(errorMsgs.require).min(8, errorMsgs.min),
  password_confirm_signin: string()
    .required(errorMsgs.require)
    .oneOf([ref("password_signin")], errorMsgs.match),
});
// Create a form context with the validation schema
const { handleSubmit, resetForm } = useForm({ validationSchema: formSchema });

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email_signin");
const { value: password, errorMessage: passwordError } =
  useField("password_signin");
const { value: passwordConfirm, errorMessage: passwordConfirmError } = useField(
  "password_confirm_signin"
);

const onSubmit = handleSubmit(async (values) => {
  const uniformValues = {
    email: values.email_signin,
    password: values.password_signin,
  };
  console.log(JSON.stringify(uniformValues));

  try {
    await user.createUser(uniformValues);
    resetForm();

    router.push({ name: "home" });
  } catch (e) {
    alert(e);
  }
});
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="p-8 rounded-[20px] bg-neutral-2 inline-block text-white"
  >
    <!-- SIGNIN FORM -->
    <h1 class="mb-6 header-lg">Sign Up</h1>
    <AppInput
      label="Email address"
      name="email_signin"
      v-model="email"
      :error-msg="emailError"
    />
    <AppInput
      label="Password"
      name="password_signin"
      v-model="password"
      :error-msg="passwordError"
    />
    <AppInput
      label="Repeat password"
      name="password_confirm_signin"
      v-model="passwordConfirm"
      :error-msg="passwordConfirmError"
    />
    <AppButton>Create an account</AppButton>
    <p class="text-center">
      Already have an account?
      <router-link to="/login" class="text-primary">Login</router-link>
    </p>
  </form>
</template>
