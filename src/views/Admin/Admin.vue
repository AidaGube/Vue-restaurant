<template>
    <div class="admin__page">
        <AdminMenu />
        <AdminHome />
    </div>
</template>

<script>
import AdminMenu from "@/components/Admin/AdminMenu"
import AdminHome from "@/components/Admin/AdminHome"
export default {
    components: {AdminMenu,AdminHome}
}
</script>

<style>

</style>