<template>
  <nav v-if="user" class="flex px-5 py-3 justify-between">
    <div>
      <p>Welcome {{ user.displayName }}</p>
      <p>you're logged in with ... {{ user.email }}</p>
    </div>
    <router-link :to="{ name: 'Welcome' }">
      <TheButton @click="handleLogout" name="logout" :blue="true" />
    </router-link>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import TheButton from "../components/TheButton";
import { error, logout } from "../composable/logout";
import { user } from "../composable/getUser";
export default {
  components: { TheButton },
  setup(props, context) {
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push("/");
      }
    };
    return { logout, handleLogout, user };
  },
};
</script>

<style></style>
