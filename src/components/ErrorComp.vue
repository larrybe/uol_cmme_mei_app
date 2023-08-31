<script setup>
    const props = defineProps([
    'errorState', 'errorType'
    ]);
</script>

<template>
    <div id="errorComp" class="flex" v-if="props.errorState">
        <div>
            <h2 id="errhead">Error</h2>
            <div v-if="props.errorType=='transformation'">
                <p>Sorry, your file could not be converted.</p>
                <p>code: {{props.errorState.code}}</p>
                <p>message: {{props.errorState.message}}</p>
                <p>xslt line: {{props.errorState.xsltLineNr}}</p>
            </div>
            <div v-if="props.errorType=='filetype'">
                <p>Sorry, your file could not be accepted.</p>
                <p>{{props.errorState}} is not in the "cmme.xml" format</p>
            </div>
        </div>
    </div>
</template>

<style>
#errorComp{
    box-sizing: border-box;
    border-top: 2px solid var(--color-border);
}

#errhead{
    color: var(--color-error);
}
</style>