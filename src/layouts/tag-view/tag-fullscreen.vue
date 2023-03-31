<template>
    <base-icon :svg-name="getTagFullscreen ? 'fullOutScreen' : 'fullScreen'" @click="toggleFullscreen" class="tag-fullscreen" :size="18" />
</template>

<script lang="ts" setup>
import { useTagStoreWithOut } from "@/stores/modules/tagView";

const tagStore = useTagStoreWithOut();

const toggleFullscreen = () => {
    tagStore.toggleFullscreen();
};

const getTagFullscreen = computed(() => tagStore.fullscreen);
</script>

<style scoped>
.tag-fullscreen {
    border-left: 1px solid var(--base-tag-border);
    border-right: 1px solid var(--base-tag-border);
}
</style>
