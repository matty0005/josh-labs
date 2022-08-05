<template>
    <div class="relative group rounded flex items-end p-4 h-full bg-fixed" :class="`${bg} ${grid}`">
            <div class="mt-auto bg-gray-50 rounded-sm px-4 py-2 w-fit tracking-wider lowercase shadow-inner font-light">
                Example
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
        }
    }

}
</script>

<style>

</style>