<template>
    <div class="relative group rounded flex items-end py-4 px-3 h-full bg-4x bg-fixed animate-gradient hover:outline" :style="`${bg}`" :class="`${grid}`">
            <div class="relative flex flex-row rounded-sm px-4 py-2 w-full h-full gap-x-2">
                <div class="relative z-1 self-end shadow-3xl bg-gray-50 rounded-sm tracking-wider hover:w-full px-4 py-2 lowercase shadow-inner font-light">
                    {{ title }} {{ view }}
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
        },
        view: {
            type: Boolean
        }

    }

}
</script>

<style>
</style>