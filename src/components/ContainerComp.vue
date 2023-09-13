<script setup>
/**
 * ContainerComp.vue
 * The main container for the other components of the application.
 */

    import HeaderComp from './HeaderComp.vue';
    import LinksComp from './LinksComp.vue';
    import FileInputComp from './FileInputComp.vue';
    import ConvertComp from './ConvertComp.vue';
    import ErrorComp from './ErrorComp.vue';
    import DownloadComp from './DownloadComp.vue';
    import { ref } from 'vue';

    import { handleDrop, handleFileInput } from './HandleUpload.js';
    import { convert } from './XSLTProcess.js';

    // Defines the props used by the child components
    defineProps({
        fileInput: Object,
        fileDownload: Object,
        errorState: Object,
        errorType: Object,
        fileInputFunc: Function,
        setFileInput: Function,
        setFileDownload: Function,
        clearDownload: Function,
        setErrorState: Function,
        convert: Function
    })

    // Whether a file is currently being dragged in the window
    let dragState = ref(false);

    // Uploaded file data
    // @property {file} file file data
    // @property {xmlDoc} xml file contents parsed as xml 
    let fileInput = ref({});
    
    // Downloadable file
    // @property {string} name filename
    // @property {string} url file download link
    let fileDownload = ref({});
    
    // Error data
    let errorState = ref(false);
    
    // Type of the error
    // @values false, transformation, filetype
    let errorType = ref(false);
    
    // Sets the fileInput variable
    // @arg {object} val
    function setFileInput(val){
        fileInput.value = val;
    }

    // Sets the fileDownloadvariable
    // @arg {object} val
    function setFileDownload(val){
        fileDownload.value = val;
    }

    // Clears the values in the fileDownload variable
    function clearDownload(){
        fileDownload.value = {};
    }

    // Set the errorState and errorType variables
    // @arg {object} err error data
    // @arg {string} type error type
    function setErrorState(err, type){
        errorState.value = err;
        errorType.value = type;
    }
</script>

<template>
    <div id='container' @drop.stop.prevent="handleDrop(setFileInput, clearDownload, setErrorState, $event); dragState=false" :class="{drag: dragState, nodrag: !dragState}" @dragover.prevent="dragState=true" @dragend="dragState=false" @dragleave="dragState=false">
        <HeaderComp />
        <LinksComp />
        <FileInputComp :fileInputFunc="handleFileInput" :setFileInput="setFileInput" :clearDownload="clearDownload" :setErrorState="setErrorState" />
        <ConvertComp :fileInput="fileInput" :convert="convert" :setFileDownload="setFileDownload" :setErrorState="setErrorState" />
        <ErrorComp :errorState="errorState" :errorType="errorType" />
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
