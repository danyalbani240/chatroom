<template>
  <div class="bg-primary p-10 min-h-screen">
    <div class="welcome rounded-xl bg-white">
      <h1>Welcome</h1>
      <div class="flex flex-col items-center mt-20">
        <div v-if="showLogin">
          <LoginForm @login="enterChat" />
        </div>
        <div v-else>
          <signup-form @signup="enterChat" />
        </div>

        <p v-if="!showLogin">
          <a
            @click.prevent="toggleShowLogin"
            class="cursor-pointer underline font-extrabold text-accent"
            >Login Form</a
          >
        </p>
        <p v-else>
          didn't register yet ?
          <a
            @click.prevent="toggleShowLogin"
            class="cursor-pointer underline font-extrabold text-accent"
            >Sign Up Form</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import Button from "../components/TheButton.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm, Button },
  setup() {
    const showLogin = ref(true);
    const toggleShowLogin = () => {
      showLogin.value = !showLogin.value;
    };
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "chat" });
    };
    return { showLogin, toggleShowLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
