<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="onClick">emit</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Hello></Hello>
</template>

<script setup>
/* setup选项  1 组件只需导入 无须注册 */
import { defineProps, reactive, defineEmit, useContext } from "vue";
import Hello from "./Hello.vue";

// 外部传入数据
defineProps({
  msg: String,
});

// 获取上下文 ctx 即setup函数的第二个参数 content 可以拿到props slots expose emit

const { emit } = useContext();

// 派发自定义事件
// 定义事件
const myemit = defineEmit(["myClick"]);

const state = reactive({ count: 0 });

const onClick = () => {
  // myemit('myClick')
  emit("myClick");
};

// 对外暴露内容 expose 闭包？
/* ctx.expose({
  say(){
    console.log('my name is erdan')
  }
}) */
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
