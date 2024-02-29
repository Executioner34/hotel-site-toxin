<template>
  <div class="auth-component">
    <template v-if="props.view === 'login'">
      <Login></Login>
    </template>
    <template v-else-if="props.view === 'signup'">
      <SignUp></SignUp>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Login } from "@/features/Auth/Login";
import { SignUp } from "@/features/Auth/SignUp";

interface IProps {
  view: "login" | "signup";
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.auth-component {
  max-width: 380px;
  width: 100%;
}
</style>
