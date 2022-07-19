<template>
    <div class="menu" :class="{active: activeMenu}">
        <ul class="menu__list">
            <router-link
                v-for="(item,index) in navItems"
                :key="item"
                @click="handleActiveItem(index)"
                :to="item.path"
            >
                <li class="nav__menu_item" :class="{active: activeItem === index}">{{item.title}}</li>
            </router-link>
        </ul>
        <!-- <Contacts /> -->
        <NavBar />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import Contacts from "./Contacts"
import NavBar from "@/components/Welcome/Navbar.vue"
export default {
    components: {Contacts,NavBar},
    props: ["activeMenu"],
    setup(props) {
        const navItems = [
            {
                title: "О ресторане",
                path: "/"
            },
            {
                title: "Акции",
                path: "/stock"
            },
            {
                title: "Возврат товара",
                path: "/delivery"
            },
            {
                title: "Условия доставки",
                path: "/cart/pay"
            },
        
        ]
        const activeItem = ref(0)

        const handleActiveItem = (index) => {
            activeItem.value = index
            document.body.classList.remove("_blocked")
        }

        return{
            navItems,
            activeItem,
            handleActiveItem,
        }
    }

}
</script>

<style lang="scss">
.menu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #44403F;
    transition: .3s all ease;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 40px;

    &.active{
        top: 0;
    }
    .menu__list{
        border-bottom: 1px solid #666160;
        width: 100%;
        padding-bottom: 30px;
        .nav__menu_item{
            margin-bottom: 13px;
            padding: 0;
            font-weight: 500;
            font-size: 24px;
            line-height: 24px;
            color: #fff;
            &.active{
                border: none;
                color: #65906C;
                font-weight: 700;
            }
        }
    }
}
</style>