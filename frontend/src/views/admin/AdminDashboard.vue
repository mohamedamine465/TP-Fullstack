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
          Teachers (No Link)
        </div>

        <div class="sidebar-item">
          Analytics (No Link)
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
            {{ stats.students }}
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Formations
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            {{ stats.formations }}
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Teachers
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            9 (Static)
          </h2>

        </div>

        <div class="stat-card">

          <p class="text-gray-500">
            Revenue
          </p>

          <h2 class="text-5xl font-bold mt-4 text-[#003049]">
            $24K (Static)
          </h2>

        </div>

      </div>

      <!-- TABLE -->
      <div class="bg-white rounded-3xl p-8 mt-10 shadow-sm">

        <div class="flex items-center justify-between mb-8">

          <div>

            <h2 class="text-2xl font-bold">
              Formations List
            </h2>

            <p class="text-gray-500 mt-2">
              Manage available formations
            </p>

          </div>

          <button class="secondary-btn" @click="addFormation">
            Add Formation
          </button>

        </div>

        <table class="w-full">

          <thead>

            <tr class="text-left border-b">

              <th class="pb-5">
                Title
              </th>

              <th class="pb-5">
                Duration (h)
              </th>

              <th class="pb-5">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            <tr v-for="f in formations" :key="f.id_formation" class="border-b">

              <td class="py-5">
                {{ f.titre }}
              </td>

              <td>
                {{ f.duree }}
              </td>

              <td>
                <button @click="deleteForm(f.id_formation)" class="text-red-500">Delete</button>
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
import { onMounted, reactive, ref } from "vue";
import api from "../../api/axios";

const router = useRouter();
const formations = ref([]);
const stats = reactive({
    students: 0,
    formations: 0
});

const fetchFormations = async () => {
    try {
        const response = await api.get("/formation");
        formations.value = response.data.data;
        stats.formations = formations.value.length;
    } catch (err) {
        console.error("Error fetching formations", err);
    }
};

onMounted(async () => {
    await fetchFormations();
});

const addFormation = async () => {
    const titre = prompt("Formation Title:");
    const duree = prompt("Duration (hours):");
    if (titre && duree) {
        try {
            await api.post("/formation", { titre, duree });
            fetchFormations();
        } catch (err) {
            alert("Error adding formation");
        }
    }
};

const deleteForm = async (id) => {
    if (confirm("Delete this formation?")) {
        try {
            await api.delete(`/formation/${id}`);
            fetchFormations();
        } catch (err) {
            alert("Error deleting formation");
        }
    }
};

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
