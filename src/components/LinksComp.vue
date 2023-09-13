<script setup>
/**
 * LinksComp.vue
 * Displays links at the top of the page
 */
</script>

<template>
    <div id="linksComp" class="flex">
        <p>The <a href="https://github.com/larrybe/uol_cmme_mei_xsl" target="_blank" rel="noreferrer">XSL file</a> and this <a href="https://github.com/larrybe/uol_cmme_mei_app" target="_blank" rel="noreferrer">app's code</a> is on GitHub</p>
        <p>The CMME repository is available at the <a href="https://cmme.org/database" target="_blank" rel="noreferrer">CMME website</a> and <a href="https://github.com/tdumitrescu/cmme-music" target="_blank" rel="noreferrer">GitHub</a></p>
    </div>
</template>

<style>
#linksComp a, #linksComp a:visited{
    color: var(--color-link);
}
</style>
