<template>
  <form @submit.prevent="handleSignup" class="w-96 overflow-x-hidden signup">
    <TheInput
      label="Name"
      placeholder="Danyal"
      id="name-input"
      :required="true"
      inputType="text"
      :modelValue="name"
      @update:modelValue="name = $event"
    />
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
    <div class="mt-10">
      <the-button name="Signup" :next="true" :blue="true" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import TheInput from "./TheInput.vue";
import TheButton from "./TheButton.vue";

export default {
  components: { TheInput, TheButton },
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const handleSignup = () => {
      if (
        !!name.value &&
        !!password.value &&
        !!email.value &&
        name.value.length >= 3 &&
        password.value.length >= 8
      ) {
        console.log("ok");
      } else {
        console.log("eror");
      }
    };
    return { name, email, password, handleSignup };
  },
};
</script>

<style></style>
