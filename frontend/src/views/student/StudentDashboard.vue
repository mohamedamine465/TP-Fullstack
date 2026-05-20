<template>
  <div class="min-h-screen flex">

    <!-- SIDEBAR -->
    <aside class="w-72 gradient-bg text-white p-8 flex flex-col">

      <div>

        <h1 class="text-3xl font-bold">
          FormationHub
        </h1>

        <p class="text-gray-300 mt-2">
          Student Space
        </p>

      </div>

      <div class="mt-14 space-y-3">

        <div class="sidebar-item bg-white/10">
          Dashboard
        </div>

        <div class="sidebar-item">
          My Courses
        </div>

        <div class="sidebar-item">
          Schedule (No Link)
        </div>

        <div class="sidebar-item">
          Progress (No Link)
        </div>

        <div class="sidebar-item">
          Certificates (No Link)
        </div>

      </div>

      <div class="mt-auto">

        <button
          @click="logout"
          class="primary-btn w-full"
        >
          Logout
        </button>

      </div>

    </aside>

    <!-- MAIN -->
    <main class="flex-1 p-10">

      <!-- TOP -->
      <div class="flex items-center justify-between">

        <div>

          <h1 class="text-4xl font-bold text-[#003049]">
            Welcome Back, {{ user.prenom }}
          </h1>

          <p class="text-gray-500 mt-2">
            Continue your learning journey
          </p>

        </div>

        <div class="bg-white px-6 py-4 rounded-2xl shadow-sm">
          Student
        </div>

      </div>

      <!-- HERO -->
      <div class="gradient-bg rounded-[32px] p-10 mt-10 text-white relative overflow-hidden">

        <div class="max-w-2xl">

          <h2 class="text-5xl font-bold leading-tight">
            Upgrade Your Skills
            With Modern Formations
          </h2>

          <p class="mt-6 text-lg text-gray-300">
            Access premium learning resources,
            practical projects and mentorship.
          </p>

          <button class="mt-8 secondary-btn">
            Explore Courses
          </button>

        </div>

        <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full"></div>

      </div>

      <!-- STATS -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div class="stat-card">

          <p class="text-gray-500">
            Completed Courses
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            6 (Static)
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Current Courses
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            {{ formation ? 1 : 0 }}
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Certificates
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            2 (Static)
          </h2>

        </div>

      </div>

      <!-- COURSES -->
      <div class="mt-12">

        <div class="flex items-center justify-between mb-8">

          <div>

            <h2 class="text-3xl font-bold">
              My Formation
            </h2>

            <p class="text-gray-500 mt-2">
              Continue learning
            </p>

          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <!-- CARD -->
          <div v-if="formation" class="bg-white rounded-3xl overflow-hidden shadow-sm">

            <div class="h-44 bg-[#003049]"></div>

            <div class="p-6">

              <div class="flex items-center justify-between">

                <span class="bg-[#669BBC]/20 text-[#003049] px-3 py-1 rounded-full text-sm">
                  Formation
                </span>

                <span class="text-gray-500 text-sm">
                  Active
                </span>

              </div>

              <h3 class="text-2xl font-bold mt-5">
                {{ formation.titre }}
              </h3>

              <p class="text-gray-500 mt-3 leading-relaxed">
                Duration: {{ formation.duree }} hours
              </p>

              <button class="primary-btn w-full mt-6">
                Continue Learning
              </button>

            </div>

          </div>

          <div v-else class="text-gray-500">
            You are not enrolled in any formation yet.
          </div>

        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import api from "../../api/axios";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user") || "{}");
const formation = ref(null);

onMounted(async () => {
    if (user.etudiant?.id_etudiant) {
        try {
            const response = await api.get(`/etudiant/${user.etudiant.id_etudiant}/formation`);
            formation.value = response.data.data;
        } catch (err) {
            console.error("Error fetching student formation", err);
        }
    }
});

const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (err) {
    console.error("Logout error", err);
  }
  localStorage.clear();
  router.push("/");
};
</script>
