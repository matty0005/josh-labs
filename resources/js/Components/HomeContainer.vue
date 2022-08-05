<template>
    <div class="relative group rounded flex items-end py-4 px-3 h-full bg-4x bg-fixed animate-gradient" :style="`${bg}`" :class="`${grid}`">
            <div class="flex flex-row rounded-sm px-4 py-2 w-full h-full gap-x-2">
                <div class="self-end shadow-md bg-gray-50 peer rounded-sm tracking-wider px-4 py-2 lowercase shadow-inner font-light">
                    {{ title }}
                </div>
                <div class="hidden peer-hover:block bg-gray-50 px-4 py-2 w-full h-full rounded-sm">
                    Content
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        bg: {
            type: String,
            required: true,
        },

        grid: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: 'Example',
        }

    }

}
</script>

<style>
</style>