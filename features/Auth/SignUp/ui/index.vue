<script setup lang="ts">
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Radio } from "~/shared/ui/radio";
import { DatePicker } from "~/shared/ui/datepicker";
import { Toggle } from "~/shared/ui/toggle";

const signupData = reactive({
  firstName: "",
  lastName: "",
  gender: "male",
  birthday: "",
  email: "",
  password: "",
  subscribe: false,
});
</script>

<template>
  <Card class="signup">
    <template #header>
      <h3 class="signup__title">Регистрация аккаунта</h3>
    </template>
    <template #default>
      <form action="#" class="signup__form">
        <Input
          id="first-name"
          v-model="signupData.firstName"
          type="text"
          placeholder="Имя"
          class="signup__first-name"
        ></Input>
        <Input
          id="last-name"
          v-model="signupData.lastName"
          type="text"
          placeholder="Фамилия"
          class="signup__last-name"
        ></Input>
        <div class="signup__radio-buttons">
          <Radio id="male" v-model="signupData.gender">Мужчина</Radio>
          <Radio id="female" v-model="signupData.gender">Женщина</Radio>
        </div>
        <DatePicker
          v-model="signupData.birthday"
          label="Дата рождения"
          class="signup__birthday"
        ></DatePicker>
        <Input
          id="email"
          v-model="signupData.email"
          type="email"
          label="данные для входа в сервис"
          placeholder="Email"
          class="signup__email"
        ></Input>
        <Input
          id="password"
          v-model="signupData.password"
          type="password"
          placeholder="Пароль"
          class="signup__last-name"
        ></Input>
        <Toggle
          id="subscribe"
          v-model="signupData.subscribe"
          class="signup__subscribe"
        >
          Получать спецпредложения
        </Toggle>
        <Button color="primary" size="large" class="signup__btn-regist">
          зарегистрироваться
        </Button>
        <div class="signup__footer">
          <p class="signup__text">Нет аккаунта на Toxin?</p>
          <Button color="secondary" size="medium">Создать</Button>
        </div>
      </form>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.signup {
  &__title {
    @include h1Text;
    margin-bottom: 20px;
    text-transform: none;
  }

  &__first-name,
  &__last-name,
  &__email {
    margin-bottom: 10px;
  }

  &__radio-buttons {
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-bottom: 20px;
  }

  &__birthday,
  &__subscribe {
    margin-bottom: 20px;
  }

  &__btn-regist {
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
