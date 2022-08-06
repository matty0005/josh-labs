<template>
    <Head title="Labs" />
    <button @click="view = !view">Click me {{view}} </button>
    <div class="grid grid-cols-4 grid-flow-row gap-4 min-h-screen">
        <HomeContainer :view="view" :grid="'row-span-3 col-span-1'" :bg="'background-color:hsla(0,100%,50%,1); background-image:radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);'"/>
        <HomeContainer :view="view" :grid="'row-span-1 col-span-2'" :bg="`background-color:#99b3ff;
background-image: radial-gradient(at 3% 88%, hsla(347,60%,67%,1) 0px, transparent 50%), radial-gradient(at 16% 31%, hsla(173,69%,62%,1) 0px, transparent 50%), radial-gradient(at 27% 54%, hsla(193,60%,63%,1) 0px, transparent 50%),
radial-gradient(at 47% 54%, hsla(335,72%,61%,1) 0px, transparent 50%),
radial-gradient(at 41% 98%, hsla(355,85%,67%,1) 0px, transparent 50%),
radial-gradient(at 15% 69%, hsla(162,79%,76%,1) 0px, transparent 50%),
radial-gradient(at 55% 30%, hsla(29,98%,70%,1) 0px, transparent 50%);`"/>
        <HomeContainer :view="view" :grid="'row-span-2 col-span-1'" :bg="`background-color:#af99ff;
background-image:
radial-gradient(at 69% 84%, hsla(328,82%,69%,1) 0px, transparent 50%),
radial-gradient(at 18% 61%, hsla(15,73%,61%,1) 0px, transparent 50%),
radial-gradient(at 83% 85%, hsla(206,99%,66%,1) 0px, transparent 50%),
radial-gradient(at 28% 73%, hsla(195,83%,73%,1) 0px, transparent 50%),
radial-gradient(at 60% 40%, hsla(243,67%,63%,1) 0px, transparent 50%),
radial-gradient(at 76% 77%, hsla(146,78%,65%,1) 0px, transparent 50%),
radial-gradient(at 7% 64%, hsla(111,64%,71%,1) 0px, transparent 50%);`"/>
        <HomeContainer :view="view" :grid="'row-span-2 col-span-2'" :bg="`background-color:#daff99;
background-image:
radial-gradient(at 16% 96%, hsla(226,76%,73%,1) 0px, transparent 50%),
radial-gradient(at 48% 5%, hsla(264,68%,74%,1) 0px, transparent 50%),
radial-gradient(at 89% 5%, hsla(46,99%,70%,1) 0px, transparent 50%),
radial-gradient(at 17% 42%, hsla(320,91%,64%,1) 0px, transparent 50%),
radial-gradient(at 92% 38%, hsla(216,79%,63%,1) 0px, transparent 50%),
radial-gradient(at 77% 75%, hsla(186,66%,67%,1) 0px, transparent 50%),
radial-gradient(at 31% 30%, hsla(168,82%,69%,1) 0px, transparent 50%);`"/>
        <HomeContainer :view="view" :grid="'row-span-3 col-span-1'" :bg="`background-color:#99ffb6;
background-image:
radial-gradient(at 96% 92%, hsla(182,84%,76%,1) 0px, transparent 50%),
radial-gradient(at 9% 27%, hsla(226,60%,61%,1) 0px, transparent 50%),
radial-gradient(at 4% 73%, hsla(330,90%,79%,1) 0px, transparent 50%),
radial-gradient(at 46% 99%, hsla(290,74%,67%,1) 0px, transparent 50%),
radial-gradient(at 26% 99%, hsla(126,90%,66%,1) 0px, transparent 50%),
radial-gradient(at 6% 88%, hsla(40,63%,60%,1) 0px, transparent 50%),
radial-gradient(at 15% 88%, hsla(86,88%,73%,1) 0px, transparent 50%);`"/>
        <HomeContainer :view="view" :grid="'row-span-2 col-span-2'" :bg="`background-color:#e299ff;
background-image:
radial-gradient(at 67% 5%, hsla(329,77%,60%,1) 0px, transparent 50%),
radial-gradient(at 72% 91%, hsla(42,68%,71%,1) 0px, transparent 50%),
radial-gradient(at 52% 51%, hsla(296,68%,74%,1) 0px, transparent 50%),
radial-gradient(at 43% 57%, hsla(149,72%,73%,1) 0px, transparent 50%),
radial-gradient(at 35% 7%, hsla(186,76%,72%,1) 0px, transparent 50%),
radial-gradient(at 40% 8%, hsla(32,79%,68%,1) 0px, transparent 50%),
radial-gradient(at 85% 2%, hsla(308,60%,63%,1) 0px, transparent 50%);`"/>
        <HomeContainer :view="view" :grid="'row-span-2 col-span-1'" :bg="`background-color:#99a2ff;
background-image:
radial-gradient(at 86% 94%, hsla(60,67%,61%,1) 0px, transparent 50%),
radial-gradient(at 45% 37%, hsla(358,96%,63%,1) 0px, transparent 50%),
radial-gradient(at 62% 41%, hsla(350,96%,76%,1) 0px, transparent 50%),
radial-gradient(at 27% 40%, hsla(33,98%,68%,1) 0px, transparent 50%),
radial-gradient(at 76% 58%, hsla(144,97%,76%,1) 0px, transparent 50%),
radial-gradient(at 47% 11%, hsla(1,82%,65%,1) 0px, transparent 50%),
radial-gradient(at 7% 96%, hsla(169,62%,69%,1) 0px, transparent 50%);`"/>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import HomeContainer from '@/Components/HomeContainer.vue'

export default {
    components: {
        HomeContainer,
        Head,
        Link
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