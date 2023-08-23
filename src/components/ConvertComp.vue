<script setup>
const props = defineProps([
    "fileInput", "convert", "setFileDownload"
    ]);
</script>

<template>
    <div id="convertComp" v-if="props.fileInput.file">
        <p>{{ props.fileInput.file.name }}</p>
        <button id="transformBtn" @click="props.convert(props.fileInput, props.setFileDownload)">Convert</button>
    </div>
</template>

<style>
#convertComp{
    box-sizing: border-box;
    outline: 2px solid firebrick;
}
</style>