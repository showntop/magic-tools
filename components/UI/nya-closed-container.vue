<template>
    <div class="nya-closed-container" >
        <div v-if="title" class="nya-closed-title">
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"></slot>
        </div>
         <div class="close" title="关闭" @click="close">
                <i class="eva eva-close-outline"></i>
            </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    },
    methods: {
        close() {
            this.$router.back()
            // return this.$emit("close")
        }
    }
};
</script>

<style lang="scss">
.nya-closed-container {
    .close {
        cursor: pointer;
        $width: 30px;
        position: absolute;
        right: 0px;
        top: -15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: $width;
        height: $width;
        border-radius: 50%;
        color: #fff;
        background-color: var(--theme);
        box-shadow: 0 8px 10px rgba(36, 159, 253, 0.30196);
    }
    position: relative;
    padding: 25px 32px;
    margin-top: 18px;
    margin-bottom: 50px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
        1px 3px 8px rgba(39, 44, 49, 0.03);
    background-color: #F0FFFF;
    border: none;
    border-radius: 8px;
    &.pt {
        padding-top: 35px;
    }
    &.transparent {
        background-color: rgba($color: #fff, $alpha: 0.65);
    }
    &:last-child {
        margin-bottom: 0;
    }
    .nya-stitle {
        position: absolute;
        right: 15px;
        top: 8px;
        font-size: 13px;
        color: rgb(177, 177, 177);
    }
    .nya-closed-title {
        position: absolute;
        width: 100%;
        left: 0px;
        top: -18px;
        padding: 8px 15px;
        font-weight: bold;
        font-size: 0;
        background-color: var(--theme);
        color: #fff;
        box-shadow: 0 8px 10px rgba(36, 159, 253, 0.30196);
        border-radius: 8px;
        i {
            margin-right: 5px;
            font-size: 20px;
            vertical-align: middle;
        }
        span {
            font-size: 17px;
            line-height: 20px;
            vertical-align: middle;
        }
    }

    @media (max-width: 600px) {
        padding: 15px;
        &.pt {
            padding-top: 30px;
        }
        .nya-title {
            left: 20px;
        }
    }

    .nya-list {
        margin: 0;
    }
}
</style>
