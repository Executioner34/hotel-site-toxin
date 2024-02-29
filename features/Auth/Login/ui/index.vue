<template>
  <form action="#" class="login">
    <Card class="login__card">
      <template #header>
        <h3 class="login__header">Войти</h3>
      </template>
      <template #default>
        <Input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          class="login__email"
        ></Input>
        <Input
          id="password"
          v-model="password"
          type="password"
          placeholder="Пароль"
          class="login__password"
        ></Input>
        <Button
          color="primary"
          size="large"
          class="login__btn-login"
          @click.stop.prevent="onLoginHandler"
        >
          Войти
        </Button>
        <div class="login__footer">
          <p class="login__text">Нет аккаунта на Toxin?</p>
          <Button color="secondary" size="medium">Создать</Button>
        </div>
      </template>
    </Card>
  </form>
</template>

<script setup lang="ts">
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useRequestHeaders } from "#app";

const email = ref("");
const password = ref("");

const onLoginHandler = async () => {
  const headers = useRequestHeaders(["cookie"]);
  const { data } = await useFetch("http://localhost:7000/auth/sign-in/", {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  console.log(data);
};
</script>

<style lang="scss" scoped>
.login {
  &__header {
    @include h1Text;
    margin-bottom: 20px;
    text-transform: none;
  }

  &__email {
    margin-bottom: 10px;
  }

  &__password {
    margin-bottom: 20px;
  }

  &__btn-login {
    margin-bottom: 30px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    color: $black;
    line-height: 20px;
  }
}
</style>
