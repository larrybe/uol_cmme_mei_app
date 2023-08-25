<script setup>
const props = defineProps([
    "fileDownload"
    ]);
</script>

<template >
    <div id="downloadComp" class="flex" v-if="props.fileDownload.name">
        <p>Click on DOWNLOAD to download the MEI file</p>
        <p class="filename">{{ props.fileDownload.name }}</p>
        <a id="downloadBtn" class="btn" :href="props.fileDownload.url" :download="props.fileDownload.name">Download</a>
    </div>
</template>

<style>
#downloadComp{
    box-sizing: border-box;
    border-top: 2px solid var(--color-border)
}

#downloadBtn{
    padding: .2em;
}
</style>