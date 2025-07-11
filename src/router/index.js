import {createRouter, createWebHashHistory} from 'vue-router';
import Mods from '../views/mod/mods/mods.vue';
import Contact from '../views/mod/mods/contact.vue';
import Donate from '../views/mod/mods/donate.vue';
import MC from '@/views/mod/mc.vue'
import Dragonpro from "@/views/mod/mods/dragonpro/Dragonpro.vue";
import Dragonpro_Description from "@/views/mod/mods/dragonpro/Description.vue";
import Dragonpro_Files from '@/views/mod/mods/dragonpro/Files.vue'
import Dragonpro_Images from '@/views/mod/mods/dragonpro/images.vue'
import Dragonpro_Relations from '@/views/mod/mods/dragonpro/relations.vue'
import Dragonpro_Fabric from '@/views/mod/mods/dragonpro/version/Fabric.vue'
import Dragonpro_Forge from '@/views/mod/mods/dragonpro/version/Forge.vue'

const routes = [
    {path: '/', redirect: '/mc'},
    {//mods路由区
        path: '/mc', component: MC,
        redirect: '/mc/mods',
        name: 'mc',
        children: [
            {
                path: 'mods', component: Mods,
                name: 'mods',
                children: [
                    {
                        path: 'dragonpro', component: Dragonpro,
                        redirect: '/mc/mods/dragonpro/description',
                        name: 'mods_dragonpro',
                        children: [
                            {
                                path: 'description', component: Dragonpro_Description,
                                name: 'mods_dragonpro_description',redirect: '/mc/mods/dragonpro/description/items',
                                children: [
                                    {
                                        path: 'items',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Items.vue'),
                                        name: 'items'
                                    },
                                    {
                                        path: 'blocks',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Blocks.vue'),
                                        name: 'blocks'
                                    },
                                    {
                                        path: 'effects',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Effects.vue'),
                                        name: 'effects'
                                    },
                                    {
                                        path: 'enchantments',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Enchantments.vue'),
                                        name: 'enchantments'
                                    },
                                    {
                                        path: 'entities',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Entities.vue'),
                                        name: 'entities'
                                    },
                                    {
                                        path: 'dimensions',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Dimensions.vue'),
                                        name: 'dimensions'
                                    },
                                    {
                                        path: 'events',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Events.vue'),
                                        name: 'events'
                                    },
                                    {
                                        path: 'others',
                                        component: () => import('@/views/mod/mods/dragonpro/content/Others.vue'),
                                        name: 'others'
                                    },

                                ]
                            },
                            {
                                path: 'files', component: Dragonpro_Files,
                                redirect: '/mc/mods/dragonpro/files/fabric',
                                name: 'mods_dragonpro_files',
                                children: [
                                    {
                                        path: 'fabric', component: Dragonpro_Fabric,
                                        name: 'mods_dragonpro_files_fabric'
                                    },
                                    {
                                        path: 'forge', component: Dragonpro_Forge,
                                        name: 'mods_dragonpro_files_forge'
                                    },
                                ]
                            },
                            {
                                path: 'images', component: Dragonpro_Images,
                                name: 'mods_dragonpro_images'
                            },
                            {
                                path: 'relations', component: Dragonpro_Relations,
                                name: 'mods_dragonpro_relations'
                            }
                        ]
                    },
                    {
                        path: 'shadowdragon', component: () => import('@/views/mod/mods/shadowdragon/Introduction.vue'),
                        name: 'mods_shadowdragon'
                    }
                ]

            },
            {path: 'contact', component: Contact},
            {path: 'donate', component: Donate}
        ]
    },


];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
