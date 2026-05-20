<template>
  <div class="min-h-screen flex">

    <!-- LEFT -->
    <div class="hidden lg:flex w-1/2 gradient-bg text-white p-16 flex-col justify-between">

      <div>
        <h1 class="text-5xl font-bold leading-tight">
          Formation
          Management
          Platform
        </h1>

        <p class="mt-6 text-lg text-gray-300 leading-relaxed">
          Manage students, formations,
          courses and administration
          in one centralized platform.
        </p>
      </div>

      <div class="flex gap-4">

        <div class="bg-white/10 p-6 rounded-2xl w-52">
          <h2 class="text-3xl font-bold">
            120+
          </h2>

          <p class="mt-2 text-gray-300">
            Active Students
          </p>
        </div>

        <div class="bg-white/10 p-6 rounded-2xl w-52">
          <h2 class="text-3xl font-bold">
            15
          </h2>

          <p class="mt-2 text-gray-300">
            Formations
          </p>
        </div>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex-1 flex items-center justify-center p-8">

      <div class="glass-card w-full max-w-md p-10">

        <div class="mb-10">

          <h2 class="text-4xl font-bold text-[#003049]">
            Welcome Back
          </h2>

          <p class="mt-3 text-gray-500">
            Login to continue
          </p>

        </div>

        <form
          class="space-y-6"
          @submit.prevent="handleLogin"
        >

          <div>
            <label class="block mb-2 font-medium">
              Email
            </label>

            <input
              v-model="form.email"
              type="email"
              class="input-modern"
              placeholder="admin@test.com"
            />
          </div>

          <div>
            <label class="block mb-2 font-medium">
              Password
            </label>

            <input
              v-model="form.password"
              type="password"
              class="input-modern"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            class="primary-btn w-full"
          >
            Login
          </button>

        </form>

        <p class="mt-8 text-center text-gray-500">

          Don't have an account ?

          <router-link
            to="/register"
            class="text-[#990000] font-bold"
          >
            Register
          </router-link>

        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../../api/axios";

const router = useRouter();
const error = ref("");

const form = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  try {
    error.value = "";
    const response = await api.post("/auth/login", {
        email: form.email,
        mot_de_passe: form.password
    });

    const { user, token } = response.data.data;
    
    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);
    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "ADMIN") {
      router.push("/admin");
    } else {
      router.push("/student");
    }
  } catch (err) {
    error.value = err.response?.data?.message || "Erreur de connexion";
  }
};
</script>
