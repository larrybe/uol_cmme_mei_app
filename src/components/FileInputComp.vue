<script setup>
const props = defineProps([
    'fileInputFunc', 'setFileInput', 'clearDownload'
]);
</script>

<template>
    <div id="fileInput">
        <p>Drag and drop the cmme.xml file you want to convert into this window</p>
        <p>Or click the Upload button below for a file upload dialog box</p>
        <button id="uploadBtn" @click="this.$refs.uploadInput.click()">Upload</button>
        <input id="uploadInput" ref="uploadInput" type="file"
            @change="props.fileInputFunc(props.setFileInput, props.clearDownload, $event)" v-show="false" />
    </div>
</template>

<style>
#fileInput {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 2px solid blue;
    grid-row: 2;
}
</style>