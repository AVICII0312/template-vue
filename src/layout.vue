<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TemplateLayout',
    data(){
        return{
            layoutClass:{
                hasSider: false
            }
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            console.log(vm.$options.name)
            if(vm.$options.name === 'Template-Sider'){
                console.log(1)
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>
