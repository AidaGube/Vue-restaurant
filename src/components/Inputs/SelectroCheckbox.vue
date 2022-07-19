<template>
    <label class="selector__item">
        <input type="checkbox" class="input-checkbox">
        {{checkboxItem}}
    </label>
</template>

<script>
export default {
    props: ["checkboxItem"]

}
</script>

<style lang="scss">
.selector__item{
    // width: 180px !important;
    padding: 20px 50px;
    border: 1px solid #618967;
    cursor: pointer;
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;

    &:first-child {
        border-radius: 10px 0 0 10px;
    }
     &:last-child{
        border-radius: 0px 10px 10px 0px;
     }

    &.active{
        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
        // font-weight: 300;
        // line-height: 18px;
        border-right: none;
        border-left: none;
    }
    .input-checkbox{
        display: none;
    }

    @media (max-width: 768px) {
        padding: 20px 30px;
        font-size: 12px;
        font-weight: 300;
    }
    @media (max-width: 425px) {
        padding: 10px 25px;
    }
}
</style>