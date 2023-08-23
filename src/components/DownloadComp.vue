<script setup>
const props = defineProps([
    "fileDownload"
    ]);
</script>

<template >
    <div id="downloadComp" v-if="props.fileDownload.name">
        <p>{{ props.fileDownload.name }}</p>
        <a id="downloadBtn" :href="props.fileDownload.url" :download="props.fileDownload.name">Download</a>
    </div>
</template>

<style>
#downloadComp{
    box-sizing: border-box;
    outline: 2px solid salmon;
}
</style>