<template>
    <div class="admin__page">
        <AdminMenu />
        <AdminProduct />
    </div>
</template>

<script>
import AdminMenu from "@/components/Admin/AdminMenu"
import AdminProduct from "@/components/Admin/AddProduct"
export default {
    components: {AdminMenu,AdminProduct}
}
</script>

<style>
.admin__page{
    display: flex;
}
</style>