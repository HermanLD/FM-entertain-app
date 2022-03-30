<script setup>
import { ref, reactive } from "vue";
// import { useUserStore } from "@/stores/user";
import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

// const user = useUserStore();

// TODO - Use Vee Validate and setup

const loginForm = ref(true);
const passwordCheck = ref("");
const formData = reactive({
  email: "",
  password: "",
});

const toggleLogin = () => (loginForm.value = !loginForm.value);
const loginUser = () => {
  console.log(formData);
};
const signUpUser = () => {
  console.log();
  if (passwordCheck.value === formData.password) {
    console.log(formData.password);
    console.log("passwords do not match!");
  }
};
</script>

<template>
  <form>
    <div v-if="loginForm">
      <!-- LOGIN FORM -->
      <AppInput v-model="formData.email" />
      <AppInput v-model="formData.password" />
      <AppButton @clickEvent="loginUser">Login to your account</AppButton>
      <p>
        Don't have an account?
        <span class="text-primary cursor-pointer" @click="toggleLogin"
          >Sign up</span
        >
      </p>
    </div>
    <div v-else>
      <!-- SIGNIN FORM -->
      <AppInput v-model="formData.email" />
      <AppInput v-model="formData.password" />
      <AppInput v-model="passwordCheck" />
      <AppButton @clickEvent="signUpUser">Create an account</AppButton>
      <p>
        Already have an account?
        <span class="text-primary cursor-pointer" @click="toggleLogin"
          >Login</span
        >
      </p>
    </div>
  </form>
</template>
