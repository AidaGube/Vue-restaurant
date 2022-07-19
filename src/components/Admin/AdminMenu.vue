<template>
<div class="admin__menu" :class="{active: !activeMenu}">
    <svg @click="handleActiveMenu" class="admin__arrow" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 30L25 20L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <ul class="admin__menu-list">
        <router-link 
            @click="handleActiveMenuItem(index)" 
            v-for="(item,index) in menuItems" 
            :key="item"
            :to="item.path"
        >
            <li 
                class="admin__menu-list_item" 
                :class="{active:activeMenuItem === index}"
            >
                <img :src="item.iconPath" :alt="item.title">
                <p class="admin__menu-title">{{item.title}}</p>
            </li>
        </router-link>
    </ul>
</div>
</template>

<script>
import addIcon from "@/assets/images/add.svg"
import editIcon from "@/assets/images/edit.svg"
import homeIcon from "@/assets/images/home.svg"
import installIcon from "@/assets/images/install.svg"
import percentIcon from "@/assets/images/percent.svg"
import shieldIcon from "@/assets/images/shield.svg"
import { ref } from '@vue/reactivity'

export default {

    setup() {
        const menuItems = [
            {
                title: "Главная",
                iconPath: homeIcon,
                path: "/admin"
            },
            {
                title: "Добавить",
                iconPath: addIcon,
                path: "/admin/add/product"
            },
            {
                title: "Акции",
                iconPath: percentIcon,
                path: "/admin/add/stock"
            },
            {
                title: "Редактировать",
                iconPath: editIcon,
                path: "/admin/edit"
            },
            {
                title: "Архив",
                iconPath: installIcon,
                path: "/admin/add/product"
            },
            {
                title: "Админ",
                iconPath: shieldIcon,
                path: "/admin/add/product"
            },
        ]
        const activeMenuItem = ref(0)
        const activeMenu = ref(false)

        const handleActiveMenuItem = (index) => {
           activeMenuItem.value = index
        }
        const handleActiveMenu = () => {
           activeMenu.value = !activeMenu.value
        }

        return{
            menuItems,
            activeMenuItem,
            activeMenu,
            handleActiveMenuItem,
            handleActiveMenu
        }
    }
}
</script>

<style lang="scss">
.admin {

    &__arrow{
        cursor: pointer;
        transition: .3s all ease;
    }
    &__menu {
        // margin-right: 80px;
        // margin-top: 0;
        // top: 0;
        // position: fixed;
        height: 100vh;
        width: 260px;
        padding: 20px 7px;
        display: flex;
        flex-direction: column;
        // align-items: center;
        background: linear-gradient(90deg, #504B4A 0%, #494544 100%);
        transition: .3s all ease;

        .admin__menu-title{
            transform: translateX(0);
            transition: .3s all ease;
            opacity: 1;
        }

        &.active{
            width: 70px;
            .admin__menu-title{
                // display: none;
                transform: translateX(-200%);
                opacity: 0;
            }
            .admin__arrow{
                transform: rotate(180deg);
            }
        }
    }

    &__menu-list {

        &_item {
            padding: 12px 20px;
            background: linear-gradient(114.93deg, rgba(120, 120, 120, 0.2) 5.11%, #545555 94%);
            border-radius: 10px;
            height: 40px;
            margin-top: 10px;
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            line-height: 22px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;

            &:hover{
                transition: 0.3s all ease;
                background: linear-gradient(114.93deg, rgba(119, 129, 120, 0.44) 5.11%, rgba(85, 107, 88, 0.35) 94%);
            }

            &.active{
                background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
            }
        }
    }
}

</style>