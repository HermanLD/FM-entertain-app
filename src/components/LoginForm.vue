<script setup>
import { reactive, watch } from "vue";
import { useUserStore } from "@/stores/user";
import { useForm, useField } from "vee-validate";
import { object, string, ref } from "yup";
import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

const loginForm = reactive({ state: true });

// TODO - Setup User store
const user = useUserStore();

// TODO - Use VeeValidate and setup
const errorMsgs = {
  match: "Match password",
  require: "Can't be empty",
  email: "Must be an email",
  min: "Minimum 10 characters ",
};

// Define a validation schema
const formSchema = object({
  email: string().required(errorMsgs.require).email(errorMsgs.email),
  password: string().required(errorMsgs.require).min(10, errorMsgs.min),
  password_confirm: string()
    .required(errorMsgs.require)
    .oneOf([ref("password")], errorMsgs.match),
});

// Create a form context with the validation schema
const { handleSubmit, values } = useForm({ validationSchema: formSchema });

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: passwordConfirm, errorMessage: passwordConfirmError } =
  useField("password_confirm");

// Sync store state with vee-validate state
// This is a one way binding
watch(values, (newData) => {
  const newFormData = JSON.stringify(newData);
  user.updateFormData(newFormData);
});

// create a handler to submit the store state
// the store action will only run when the user submits valid form data
const onSubmit = handleSubmit(user.loadUser);

const toggleLogin = () => (loginForm.state = !loginForm.state);
</script>

<template>
  <form
    @submit="onSubmit"
    class="p-8 rounded-[20px] bg-neutral-2 inline-block text-white"
  >
    <!-- LOGIN FORM -->
    <div v-if="loginForm.state">
      <h1 class="mb-6 header-lg">Login</h1>
      <AppInput
        label="Email address"
        name="email"
        v-model="email"
        :errorMsg="emailError"
      />
      <AppInput
        label="Password"
        name="password"
        v-model="password"
        :error-msg="passwordError"
      />
      <AppButton>Login to your account</AppButton>
      <p class="text-center">
        Don't have an account?
        <span class="text-primary cursor-pointer" @click="toggleLogin"
          >Sign up</span
        >
      </p>
    </div>
    <!-- SIGNIN FORM -->
    <div v-else>
      <h1 class="mb-6 header-lg">Sign Up</h1>
      <AppInput
        label="Email address"
        name="email"
        v-model="email"
        :error-msg="emailError"
      />
      <AppInput
        label="Password"
        name="password"
        v-model="password"
        :error-msg="passwordError"
      />
      <AppInput
        label="Repeat password"
        name="password_confirm"
        v-model="passwordConfirm"
        :error-msg="passwordConfirmError"
      />
      <AppButton>Create an account</AppButton>
      <p class="text-center">
        Already have an account?
        <span class="text-primary cursor-pointer" @click="toggleLogin"
          >Login</span
        >
      </p>
    </div>
  </form>
</template>
