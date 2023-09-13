<script setup>
/**
 * ConvertComp.vue
 * Component for the file conversion functionality
 * 
 * prop {object} fileInput contains the file input data
 * prop {function} convert The data conversion function
 * prop {function} setFileDownload 
 * prop {function} setErrorState 
 */
const props = defineProps([
    "fileInput", "convert", "setFileDownload", "setErrorState"
    ]);
</script>

<template>
    <div id="convertComp" class="flex" v-if="props.fileInput.file">
        <p>Click the CONVERT button to convert the CMME XML file</p>
        <p class="filename">{{ props.fileInput.file.name }}</p>
        <button id="convertBtn" class="btn" @click="props.convert(props.fileInput, props.setFileDownload, props.setErrorState)">Convert</button>
    </div>
</template>

<style>
#convertComp{
    box-sizing: border-box;
    border-top: 2px solid var(--color-border)
}
</style>
