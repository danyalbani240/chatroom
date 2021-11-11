<template>
  <form @submit.prevent="handleSignup" class="w-96 overflow-x-hidden signup">
    <div class="px-5 py-10 text-red-700" v-if="error">
      {{ error }}
    </div>
    <TheInput
      label="Name"
      placeholder="Danyal"
      id="name-input"
      :required="true"
      inputType="text"
      :modelValue="name"
      @update:modelValue="name = $event"
    />
    <p v-if="nameError" class="text-red-500">{{ nameError }}</p>
    <TheInput
      label="Email"
      placeholder="example@gmail.com"
      id="email-input"
      :required="true"
      inputType="email"
      :modelValue="email"
      @update:modelValue="email = $event"
    />

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
      <the-button name="Signup" :next="true" :blue="true" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import TheInput from "./TheInput.vue";
import TheButton from "./TheButton.vue";
import { signup, error } from "../composable/signup";

export default {
  components: { TheInput, TheButton },
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const nameError = ref("");
    const passwordError = ref("");
    const handleSignup = async () => {
      nameError.value = "";
      passwordError.value = "";
      if (
        !!name.value &&
        !!password.value &&
        !!email.value &&
        name.value.length >= 3 &&
        password.value.length >= 8
      ) {
        await signup(email.value, password.value, name.value);
        // if There was no error redirect the user to the   chatroom page
        if (!error.value) {
          context.emit("signup");
        }
      } else if (name.value.length < 3) {
        nameError.value =
          "the Name value have to be more than three charachter or more";
      } else if (password.value.length < 8) {
        passwordError.value =
          "the Password value have to be more than eight charachter or more";
      }
    };
    return {
      name,
      email,
      password,
      handleSignup,
      nameError,
      passwordError,
      error,
    };
  },
};
</script>

<style></style>
