<template>
    <div class="admin__page">
        <AdminMenu />
        <div>
            <AdminEdit />
        </div>
    </div>
</template>

<script>
import AdminMenu from "@/components/Admin/AdminMenu"
import AdminEdit from "@/components/Admin/AdminEdit"

export default {
    components: {AdminMenu,AdminEdit}
}
</script>

<style>

</style>