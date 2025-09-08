import {ref} from "vue";

const property = ref([]);

const fetchBlocks = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/blocks.json`);
        const jsonData = await response.json();
        const baseUrl = import.meta.env.BASE_URL
        property.value = jsonData.map(item => {
            const key = Object.keys(item)[0];
            // 取出原始 additionalImg，可能是数组，也可能不存在
            const rawImgs = item[key].AdditionalImg || item[key].additionalImg || [];

            // 处理图片数组，给相对路径加前缀
            const fixedImgs = Array.isArray(rawImgs)
                ? rawImgs.map(img => (/^https?:\/\//.test(img) ? img : baseUrl + img.replace(/^\/+/, '')))
                : [];
            let icons = item[key].Icon || item[key].icon || '';
            icons=baseUrl+icons
            return {
                name: item[key].Name || item[key].name,
                icon: icons,
                approach: item[key].Approach || item[key].approach,
                usage: item[key].Usage || item[key].usage,
                additional: item[key].Additional || item[key].additional,
                additionalImg: fixedImgs
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};

const fetchItems = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/items.json`);
        const jsonData = await response.json();
        const baseUrl = import.meta.env.BASE_URL
        property.value = jsonData.map(item => {
            const key = Object.keys(item)[0];
            // 取出原始 additionalImg，可能是数组，也可能不存在
            const rawImgs = item[key].AdditionalImg || item[key].additionalImg || [];

            // 处理图片数组，给相对路径加前缀
            const fixedImgs = Array.isArray(rawImgs)
                ? rawImgs.map(img => (/^https?:\/\//.test(img) ? img : baseUrl + img.replace(/^\/+/, '')))
                : [];
            let icons = item[key].Icon || item[key].icon || '';
            icons=baseUrl+icons
            return {
                name: item[key].Name || item[key].name,
                icon: icons,
                approach: item[key].Approach || item[key].approach,
                usage: item[key].Usage || item[key].usage,
                sneak: item[key].Sneak || item[key].sneak,
                erupt: item[key].Erupt || item[key].erupt,
                attribute: item[key].Attribute || item[key].attribute,
                additional: item[key].Additional || item[key].additional,
                additionalImg: fixedImgs
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};

const fetchEffects = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/effects.json`);
        const jsonData = await response.json();
        const baseUrl = import.meta.env.BASE_URL
        property.value = jsonData.map(item => {
            const key = Object.keys(item)[0];
            // 取出原始 additionalImg，可能是数组，也可能不存在
            let icons = item[key].Icon || item[key].icon || '';
            icons=baseUrl+icons
            return {
                name: item[key].Name || item[key].name, // 适配不同的字段命名
                icon: icons, // 适配不同的字段命名
                approach: item[key].Approach || item[key].approach,
                usage: item[key].Usage || item[key].usage,
                sneak: item[key].Sneak || item[key].sneak,
                erupt: item[key].Erupt || item[key].erupt,
                attribute: item[key].Attribute || item[key].attribute,
                additional: item[key].Additional || item[key].additional
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};

const fetchEnchantments = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/enchantments.json`);
        const jsonData = await response.json();
        property.value = jsonData.map(item => {
            const key = Object.keys(item)[0];
            return {
                name: item[key].Name || item[key].name, // 适配不同的字段命名
                approach: item[key].Approach || item[key].approach,
                usage: item[key].Usage || item[key].usage,
                sneak: item[key].Sneak || item[key].sneak,
                erupt: item[key].Erupt || item[key].erupt,
                attribute: item[key].Attribute || item[key].attribute,
                additional: item[key].Additional || item[key].additional
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};

const fetchEntities = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/entities.json`);
        const jsonData = await response.json();
        const baseUrl = import.meta.env.BASE_URL
        property.value = jsonData.map(item => {
            const key = Object.keys(item)[0];
            const rawImgs = item[key].Images || item[key].images || [];

            // 处理图片数组，给相对路径加前缀
            const fixedImgs = Array.isArray(rawImgs)
                ? rawImgs.map(img => (/^https?:\/\//.test(img) ? img : baseUrl + img.replace(/^\/+/, '')))
                : [];
            let icons = item[key].Icon || item[key].icon || '';
            icons=baseUrl+icons
            let models = item[key].ModelUrl || item[key].modelUrl || '';
            models=baseUrl+models
            return {
                name: item[key].Name || item[key].name,
                icon: icons,
                additional: item[key].Additional || item[key].additional,
                hasModel: item[key].HasModel || item[key].hasModel,
                modelUrl: models,
                max_hp: item[key].Max_hp || item[key].max_hp,
                speed: item[key].Speed || item[key].speed,
                armor: item[key].Armor || item[key].armor,
                description: item[key].Description || item[key].description,
                attack_damage: item[key].Attack_damage || item[key].attack_damage,
                skill: item[key].Skill || item[key].skill,
                images: fixedImgs,
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};

const fetchStaffs=async (lang)=>{
    const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/staff_list.json`);
    property.value = await response.json();
    return property
}

const fetchDimensions = async (lang) => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/${lang}/dimension.json`);
        const jsonData = await response.json();
        property.value = jsonData.map(item => {
            return {
                title: item.title || "",
                name: item.name || "",
                subtitle: item.subtitle || "",
                introduction: item.introduction || [],
                warning: item.warning || [],
                detail: item.detail || []
            };
        });
        return property
    } catch (error) {
        console.error("加载 JSON 失败:", error);
    }
};
export {fetchEntities,fetchItems,fetchBlocks,fetchEffects,fetchEnchantments,fetchStaffs,fetchDimensions}