<template>
  <form class="signup">
    <TheInput
      label="Name"
      placeholder="Danyal"
      id="name-input"
      :required="true"
      inputType="text"
      :modelValue="name"
      @update:modelValue="name = $event"
      placeholderWhite
    />
    <TheInput
      label="Email"
      placeholder="example@gmail.com"
      id="email-input"
      :required="true"
      inputType="email"
      :modelValue="email"
      @update:modelValue="email = $event"
      placeholderWhite
    />
    <TheInput
      label="Password"
      placeholder
      id="password-input"
      :required="true"
      inputType="password"
      :modelValue="password"
      @update:modelValue="password = $event"
      placeholderWhite
    />
    <div class="mt-10">
      <the-button name="Signup" :next="true" :blue="true" />
    </div>
    {{ name }}
    {{ email }}
    {{ password }}
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
    return { name, email, password };
  },
};
</script>

<style></style>
