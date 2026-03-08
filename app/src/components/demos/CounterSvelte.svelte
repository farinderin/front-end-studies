<script lang="ts">
  let count = $state(0);
</script>

<div class="flex flex-col items-center gap-3 p-4">
  <div class="text-4xl font-bold" style="color: #FF3E00">{count}</div>
  <div class="flex gap-2">
    <button onclick={() => count--} class="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors">−</button>
    <button onclick={() => count = 0} class="px-3 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm transition-colors">reset</button>
    <button onclick={() => count++} class="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors">+</button>
  </div>
</div>
