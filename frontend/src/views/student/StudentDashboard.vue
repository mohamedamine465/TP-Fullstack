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
          Schedule
        </div>

        <div class="sidebar-item">
          Progress
        </div>

        <div class="sidebar-item">
          Certificates
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
            Welcome Back
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
            6
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Current Courses
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            3
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Certificates
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            2
          </h2>

        </div>

      </div>

      <!-- COURSES -->
      <div class="mt-12">

        <div class="flex items-center justify-between mb-8">

          <div>

            <h2 class="text-3xl font-bold">
              My Courses
            </h2>

            <p class="text-gray-500 mt-2">
              Continue learning
            </p>

          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <!-- CARD -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm">

            <div class="h-44 bg-[#003049]"></div>

            <div class="p-6">

              <div class="flex items-center justify-between">

                <span class="bg-[#669BBC]/20 text-[#003049] px-3 py-1 rounded-full text-sm">
                  Development
                </span>

                <span class="text-gray-500 text-sm">
                  75%
                </span>

              </div>

              <h3 class="text-2xl font-bold mt-5">
                Web Development
              </h3>

              <p class="text-gray-500 mt-3 leading-relaxed">
                Learn frontend and backend
                technologies with real projects.
              </p>

              <div class="w-full h-2 bg-gray-100 rounded-full mt-6">

                <div class="w-3/4 h-full bg-[#990000] rounded-full"></div>

              </div>

              <button class="primary-btn w-full mt-6">
                Continue
              </button>

            </div>

          </div>

          <!-- CARD -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm">

            <div class="h-44 bg-[#669BBC]"></div>

            <div class="p-6">

              <div class="flex items-center justify-between">

                <span class="bg-[#669BBC]/20 text-[#003049] px-3 py-1 rounded-full text-sm">
                  Security
                </span>

                <span class="text-gray-500 text-sm">
                  40%
                </span>

              </div>

              <h3 class="text-2xl font-bold mt-5">
                Cybersecurity
              </h3>

              <p class="text-gray-500 mt-3 leading-relaxed">
                Learn modern security concepts,
                pentesting and defense techniques.
              </p>

              <div class="w-full h-2 bg-gray-100 rounded-full mt-6">

                <div class="w-2/5 h-full bg-[#990000] rounded-full"></div>

              </div>

              <button class="primary-btn w-full mt-6">
                Continue
              </button>

            </div>

          </div>

          <!-- CARD -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm">

            <div class="h-44 bg-[#990000]"></div>

            <div class="p-6">

              <div class="flex items-center justify-between">

                <span class="bg-[#669BBC]/20 text-[#003049] px-3 py-1 rounded-full text-sm">
                  Cloud
                </span>

                <span class="text-gray-500 text-sm">
                  90%
                </span>

              </div>

              <h3 class="text-2xl font-bold mt-5">
                Cloud Computing
              </h3>

              <p class="text-gray-500 mt-3 leading-relaxed">
                Learn cloud infrastructure,
                deployment and DevOps basics.
              </p>

              <div class="w-full h-2 bg-gray-100 rounded-full mt-6">

                <div class="w-[90%] h-full bg-[#990000] rounded-full"></div>

              </div>

              <button class="primary-btn w-full mt-6">
                Continue
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {

  localStorage.clear();

  router.push("/");
};
</script>
