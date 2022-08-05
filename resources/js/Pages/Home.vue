<template>
    <div class="grid grid-cols-4 grid-flow-row gap-4 min-h-screen">
        <div class="row-span-3 bg-gradient-to-b h-full from-indigo-500 to-blue-600 bg-fixed">01</div>


        <div class="row-span-1 col-span-2 relative group rounded flex items-end p-4 bg-gradient-to-br h-full from-indigo-500 to-red-600 bg-fixed">
            <div class="mt-auto bg-gray-50 rounded-sm px-4 py-2 w-fit tracking-wider lowercase shadow-inner font-light">
                Menus
            </div>
        </div>


        <div class="row-span-2 col-span-1 bg-black">03</div>
        <div class="row-span-2 col-span-2 bg-black">04</div>
        <div class="row-span-3 col-span-1 bg-black">05</div>
        <div class="row-span-2 col-span-2 bg-black">06</div>
        <div class="row-span-2 col-span-1 bg-black">07</div>



    </div>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    layout: [AppLayout],

}
</script>

<style>

</style>