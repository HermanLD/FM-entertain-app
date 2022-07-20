<script setup>
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import useUserStore from "@/stores/user";

import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

// TODO - Setup User store
const user = useUserStore();
const router = useRouter();

// TODO - Use VeeValidate and setup
const errorMsgs = {
  require: "Can't be empty",
  email: "Must be an email",
  min: "Minimum 8 characters ",
};

// Define a validation schema
const formSchema = object({
  email_login: string().required(errorMsgs.require).email(errorMsgs.email),
  password_login: string().required(errorMsgs.require).min(8, errorMsgs.min),
});

// Create a form context with the validation schema
const { handleSubmit, resetForm } = useForm({ validationSchema: formSchema });

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email_login");
const { value: password, errorMessage: passwordError } =
  useField("password_login");

const onSubmit = handleSubmit(async (values) => {
  const uniformValues = {
    email: values.email_login,
    password: values.password_login,
  };
  try {
    await user.logInUser(uniformValues);
    resetForm();

    router.push({ name: "home" });
  } catch (e) {
    alert(e);
    resetForm();
  }
});
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="p-8 rounded-[20px] bg-neutral-2 inline-block text-white"
  >
    <!-- LOGIN FORM -->
    <h1 class="mb-6 header-lg">Login</h1>
    <AppInput
      label="Email address"
      name="email_login"
      v-model="email"
      :errorMsg="emailError"
    />
    <AppInput
      label="Password"
      name="password_login"
      v-model="password"
      :error-msg="passwordError"
    />
    <AppButton>Login to your account</AppButton>
    <p class="text-center">
      Don't have an account?
      <router-link to="/sign-up" class="text-primary"> Sign up</router-link>
    </p>
  </form>
</template>
