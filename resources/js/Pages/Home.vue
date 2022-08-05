<template>
    <div class="gap-4 min-h-screen" :class="!view ? 'flex flex-col' : 'grid grid-cols-4 grid-flow-row'">
        <HomeContainer :grid="'row-span-3 col-span-1'" :bg="'bg-gradient-to-b h-full from-indigo-500 to-blue-600'"/>
        <HomeContainer :grid="'row-span-1 col-span-2'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
        <HomeContainer :grid="'row-span-2 col-span-1'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
        <HomeContainer :grid="'row-span-2 col-span-2'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
        <HomeContainer :grid="'row-span-3 col-span-1'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
        <HomeContainer :grid="'row-span-2 col-span-2'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
        <HomeContainer :grid="'row-span-2 col-span-1'" :bg="'bg-gradient-to-br from-black to-red-600 bg-fixed'"/>
    </div>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import HomeContainer from '@/Components/HomeContainer.vue'

export default {
    components: {
        HomeContainer
    },

    layout: [AppLayout],

    data() {
        return {
            view: 0
        }
    },

    mounted() {
        this.view = localStorage.getItem('view');
    }

}
</script>

<style>

</style>