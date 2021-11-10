<template>
  <form @submit.prevent="handleLogin" class="w-96 overflow-x-hidden login">
    <div class="px-5 py-10 text-red-700" v-if="error">
      {{ error }}
    </div>
    <TheInput
      label="Email"
      placeholder="example@gmail.com"
      id="email-input"
      :required="true"
      inputType="email"
      :modelValue="email"
      @update:modelValue="email = $event"
    />
    <p v-if="nameError" class="text-red-500">{{ nameError }}</p>

    <TheInput
      label="Password"
      placeholder
      id="password-input"
      :required="true"
      inputType="password"
      :modelValue="password"
      @update:modelValue="password = $event"
    />
    <p v-if="passwordError" class="text-red-500">{{ passwordError }}</p>

    <div class="mt-10">
      <the-button name="Login" :next="true" :blue="true" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import TheInput from "./TheInput.vue";
import TheButton from "./TheButton.vue";
const nameError = ref("");
const passwordError = ref("");
import { login, error } from "../composable/login";
export default {
  components: { TheInput, TheButton },
  setup() {
    const email = ref("");
    const password = ref("");
    const handleLogin = async () => {
      if (!!password.value && !!email.value && password.value.length >= 8) {
        await login(email.value, password.value);
      } else if (name.value.length < 3) {
        nameError.value =
          "the Name value have to be more than three charachter or more";
      } else if (password.value.length < 8) {
        passwordError.value =
          "the Password value have to be more than eight charachter or more";
      }
    };
    return { email, password, handleLogin, nameError, passwordError, error };
  },
};
</script>

<style></style>
