<script setup>
const props = defineProps([
    "fileInput", "convert", "setFileDownload"
    ]);
</script>

<template>
    <div id="convertComp" class="flex" v-if="props.fileInput.file">
        <p>Click the CONVERT button to convert the CMME XML file</p>
        <p class="filename">{{ props.fileInput.file.name }}</p>
        <button id="convertBtn" class="btn" @click="props.convert(props.fileInput, props.setFileDownload)">Convert</button>
    </div>
</template>

<style>
#convertComp{
    box-sizing: border-box;
    border-top: 2px solid var(--color-border)
    /* outline: 2px solid firebrick; */
}
</style>
