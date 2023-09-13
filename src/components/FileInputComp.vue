<script setup>
/**
 * FileInputComp.vue
 * Component for uploading the CMME file
 * 
 * prop {function} fileInputFunc
 * prop {function} setFileInput
 * prop {function} clearDownload
 * prop {function} setErrorState
 */
const props = defineProps([
    'fileInputFunc', 'setFileInput', 'clearDownload', 'setErrorState'
]);

// Function for clicking the upload button
function uploadBtnClick(){
    document.querySelector("#uploadInput").click();
}
</script>

<template>
    <div id="fileInput" class="flex">
        <div>
            <p>Drag and drop the cmme.xml file you want to convert into this window</p>
            <p>Or click the Upload button below for a file upload dialog box</p>
            <button id="uploadBtn" class="btn" @click="uploadBtnClick">Upload</button>
            <input id="uploadInput" ref="uploadInput" type="file"
                @change="props.fileInputFunc(props.setFileInput, props.clearDownload, props.setErrorState, $event)" v-show="false" />
        </div>
    </div>
</template>

<style>
#fileInput {
    box-sizing: border-box;
    border-top: 2px solid var(--color-border);
    width: 100%;
    height: 100%;
    grid-row: 3;
}
</style>
