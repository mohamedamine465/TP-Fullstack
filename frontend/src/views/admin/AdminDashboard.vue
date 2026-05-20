<template>
  <div class="min-h-screen flex">

    <!-- SIDEBAR -->
    <aside class="w-72 gradient-bg text-white p-8 flex flex-col">

      <div>

        <h1 class="text-3xl font-bold">
          FormationHub
        </h1>

        <p class="text-gray-300 mt-2">
          Admin Panel
        </p>

      </div>

      <div class="mt-14 space-y-3">

        <div class="sidebar-item bg-white/10">
          Dashboard
        </div>

        <div class="sidebar-item">
          Students
        </div>

        <div class="sidebar-item">
          Formations
        </div>

        <div class="sidebar-item">
          Teachers
        </div>

        <div class="sidebar-item">
          Analytics
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

    <!-- CONTENT -->
    <main class="flex-1 p-10">

      <!-- TOP -->
      <div class="flex items-center justify-between">

        <div>

          <h1 class="text-4xl font-bold text-[#003049]">
            Dashboard
          </h1>

          <p class="text-gray-500 mt-2">
            Welcome back admin
          </p>

        </div>

        <div class="bg-white px-6 py-4 rounded-2xl shadow-sm">
          Admin
        </div>

      </div>

      <!-- STATS -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        <div class="stat-card">

          <p class="text-gray-500">
            Students
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            120
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Formations
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            15
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Teachers
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            9
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Revenue
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            $24K
          </h2>

        </div>

      </div>

      <!-- TABLE -->
      <div class="bg-white rounded-3xl p-8 mt-10 shadow-sm">

        <div class="flex items-center justify-between mb-8">

          <div>

            <h2 class="text-2xl font-bold">
              Students List
            </h2>

            <p class="text-gray-500 mt-2">
              Manage registered students
            </p>

          </div>

          <button class="secondary-btn">
            Add Student
          </button>

        </div>

        <table class="w-full">

          <thead>

            <tr class="text-left border-b">

              <th class="pb-5">
                Name
              </th>

              <th class="pb-5">
                Email
              </th>

              <th class="pb-5">
                Formation
              </th>

              <th class="pb-5">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr class="border-b">

              <td class="py-5">
                John Doe
              </td>

              <td>
                john@test.com
              </td>

              <td>
                Web Development
              </td>

              <td>
                Active
              </td>

            </tr>

            <tr>

              <td class="py-5">
                Sarah Smith
              </td>

              <td>
                sarah@test.com
              </td>

              <td>
                Cybersecurity
              </td>

              <td>
                Active
              </td>

            </tr>

          </tbody>

        </table>

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
