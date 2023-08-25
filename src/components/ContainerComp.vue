<script setup>
    import HeaderComp from './HeaderComp.vue';
    import LinksComp from './LinksComp.vue';
    import FileInputComp from './FileInputComp.vue';
    import ConvertComp from './ConvertComp.vue';
    import DownloadComp from './DownloadComp.vue';
    import { ref } from 'vue';

    import { handleDrop, handleFileInput } from './HandleUpload.js';
    import { convert } from './XSLTProcess.js';

    defineProps({
        fileInput: Object,
        fileDownload: Object,
        fileInputFunc: Function,
        setFileInput: Function,
        setFileDownload: Function,
        clearDownload: Function,
        convert: Function
    })

    let dragState = ref(false);

    let fileInput = ref({});
    let fileDownload = ref({});
    

    function setFileInput(val){
        fileInput.value = val;
    }

    function setFileDownload(val){
        fileDownload.value = val;
    }

    function clearDownload(){
        fileDownload.value = {};
    }
</script>

<template>
    <div id='container' @drop.stop.prevent="handleDrop(setFileInput, clearDownload, $event); dragState=false" :class="{drag: dragState, nodrag: !dragState}" @dragover.prevent="dragState=true" @dragend="dragState=false" @dragleave="dragState=false">
        <HeaderComp />
        <LinksComp />
        <FileInputComp :fileInputFunc="handleFileInput" :setFileInput="setFileInput" :clearDownload="clearDownload" />
        <ConvertComp :fileInput="fileInput" :convert="convert" :setFileDownload="setFileDownload" />
        <DownloadComp :fileDownload="fileDownload" />
    </div>
</template>

<style>
#container{
    background-color: var(--color-background);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 10% repeat(3, auto);
    border-width: 1em;
    border-style: solid;
    text-align: center;
}

.nodrag{
    border-color: var(--color-background);
}

.drag{
    border-color: var(--color-border-hover);
}
</style>