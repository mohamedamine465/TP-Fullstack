<template>
  <div class="min-h-screen flex">

    <!-- LEFT -->
    <div class="hidden lg:flex w-1/2 gradient-bg text-white p-16 flex-col justify-between">

      <div>

        <div class="inline-block bg-white/10 px-5 py-2 rounded-full text-sm">
          Student Registration
        </div>

        <h1 class="text-5xl font-bold leading-tight mt-8">
          Start Your
          Learning Journey
        </h1>

        <p class="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
          Join our platform and access modern
          formations, expert instructors and
          interactive learning experiences.
        </p>

      </div>

      <div class="grid grid-cols-2 gap-5">

        <div class="bg-white/10 p-6 rounded-3xl">

          <h2 class="text-4xl font-bold">
            15+
          </h2>

          <p class="mt-2 text-gray-300">
            Available Formations
          </p>

        </div>

        <div class="bg-white/10 p-6 rounded-3xl">

          <h2 class="text-4xl font-bold">
            120+
          </h2>

          <p class="mt-2 text-gray-300">
            Active Students
          </p>

        </div>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex-1 flex items-center justify-center p-8">

      <div class="glass-card w-full max-w-2xl p-10">

        <div class="mb-10">

          <h1 class="text-4xl font-bold text-[#003049]">
            Create Account
          </h1>

          <p class="mt-3 text-gray-500">
            Register and access your dashboard
          </p>

        </div>

        <form
          class="space-y-6"
          @submit.prevent="handleRegister"
        >

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label class="block mb-2 font-medium">
                First Name
              </label>

              <input
                v-model="form.firstName"
                type="text"
                class="input-modern"
                placeholder="John"
              />

            </div>

            <div>

              <label class="block mb-2 font-medium">
                Last Name
              </label>

              <input
                v-model="form.lastName"
                type="text"
                class="input-modern"
                placeholder="Doe"
              />

            </div>

          </div>

          <div>

            <label class="block mb-2 font-medium">
              Email
            </label>

            <input
              v-model="form.email"
              type="email"
              class="input-modern"
              placeholder="john@example.com"
            />

          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <div>

              <label class="block mb-2 font-medium">
                Role
              </label>

              <select
                v-model="form.role"
                class="input-modern"
              >
                <option value="STUDENT">
                  Student
                </option>

                <option value="ADMIN">
                  Admin
                </option>
              </select>

            </div>

          </div>

          <div>

            <label class="block mb-2 font-medium">
              Formation
            </label>

            <select
              v-model="form.formation"
              class="input-modern"
            >
              <option>
                Web Development
              </option>

              <option>
                Cybersecurity
              </option>

              <option>
                Cloud Computing
              </option>

              <option>
                Data Science
              </option>
            </select>

          </div>

          <button
            type="submit"
            class="primary-btn w-full"
          >
            Create Account
          </button>

        </form>

        <p class="mt-8 text-center text-gray-500">

          Already have an account ?

          <router-link
            to="/"
            class="text-[#990000] font-bold"
          >
            Login
          </router-link>

        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "STUDENT",
  formation: "",
});

const handleRegister = () => {

  alert("Account Created");

  router.push("/");
};
</script>
