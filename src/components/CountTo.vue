<!--
 * @Author: your name
 * @Date: 2021-04-23 10:27:48
 * @LastEditTime: 2021-04-23 15:49:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \count-to-vue3\src\components\CountTo.vue
-->
<template>
    <div id="count_to_box">
        <div class="count_to_item_num" v-for="(i, k) in nums" :key="k">
            <div
                class="count_to_item_num_scroll"
                :style="{
                    top: `${-1 * i}em`,
                    transitionDuration: `${0.137 * i}s`,
                }"
            >
                <p class="count_to_num" v-for="n in 10" :key="n">{{ n - 1 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs, ref, watchEffect, nextTick } from "vue";
export default {
    name: "CountTo",
    props: {
        num: {
            require: true,
            default: 0,
        },
    },
    setup(props) {
        const nums = ref([]);
        const { num } = toRefs(props);
        /**
         * @description:将数字转化为数组
         * @param {*}
         * @return {*}
         *
         */
        watchEffect(() => {
            const _num = num.value.toString().split("");
            if (nums.value.length < 1) {
                while (true) {
                    if (nums.value.length == _num.length) {
                        break;
                    }
                    nums.value.push(0);
                }
                nextTick(() => {
                    setTimeout(() => {
                        nums.value = _num;
                    }, 1000);
                });
            } else {
                nums.value = _num;
            }
        });
        // const _num = computed(() => {
        //   return num.value.toString().split('')
        // })

        return {
            nums,
        };
    },
};
</script>

<style lang="scss" scoped>
#count_to_box {
    display: flex;
    justify-content: center;
    .count_to_item_num {
        position: relative;
        width: 0.5em;
        padding-right: 1px;
        height: 1em;
        overflow: hidden;
        .count_to_item_num_scroll {
            position: absolute;
            width: 100%;
            transition: all;
            left: 0;
            .count_to_num {
                height: 1em;
                margin: 0;
                text-align: center;
                line-height: 1;
            }
        }
    }
}
</style>
