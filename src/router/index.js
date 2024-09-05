import { createRouter, createWebHistory } from 'vue-router';
import Mods from '../views/mod/mods/mods.vue';
import Contact from '../views/mod/mods/contact.vue';
import Donate from '../views/mod/mods/donate.vue';
import MC from '@/views/mod/mc.vue'
import Dragonpro from "@/views/mod/mods/dragonpro/dragonpro.vue";
import Dragonpro_Description from "@/views/mod/mods/dragonpro/description.vue";
import Dragonpro_Files from '@/views/mod/mods/dragonpro/files.vue'
import Dragonpro_Images from '@/views/mod/mods/dragonpro/images.vue'
import Dragonpro_Relations from '@/views/mod/mods/dragonpro/relations.vue'
import Dragonpro_Fabric from '@/views/mod/mods/dragonpro/version/fabric.vue'
import Dragonpro_Forge from '@/views/mod/mods/dragonpro/version/forge.vue';
import {ref,watchEffect} from 'vue'

const routes = [
    { path: '/', redirect: '/mc' },
    {//mods路由区
        path: '/mc',component: MC,
        redirect: '/mc/mods',
        name:'mc',
        children:[
            { path: 'mods', component: Mods,
                name:'mods',
                children:[
                    {
                        path:'dragonpro',component: Dragonpro,
                        redirect:'/mc/mods/dragonpro/description',
                        name:'mods_dragonpro',
                        children:[
                            {
                                path:'description',component:Dragonpro_Description,
                                name:'mods_dragonpro_description'
                            },
                            {
                                path: 'files',component: Dragonpro_Files,
                                redirect:'/mc/mods/dragonpro/files/fabric',
                                name:'mods_dragonpro_files',
                                children:[
                                    {
                                        path:'fabric',component:Dragonpro_Fabric,
                                        name:'mods_dragonpro_files_fabric'
                                    },
                                    {
                                        path:'forge',component:Dragonpro_Forge,
                                        name:'mods_dragonpro_files_forge'
                                    },
                                ]
                            },
                            {
                                path: 'images',component: Dragonpro_Images,
                                name:'mods_dragonpro_images'
                            },
                            {
                                path: 'relations',component: Dragonpro_Relations,
                                name:'mods_dragonpro_relations'
                            }
                        ]
                    },
                ]

            },
            { path: 'contact', component: Contact },
            { path: 'donate', component: Donate }
        ]
    },


];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
