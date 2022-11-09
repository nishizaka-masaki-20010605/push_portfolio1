<script setup>
import { ref } from "vue";
import Upload from '../chat/Upload.vue'

const emit = defineEmits(['sendMessage']);

const update = (value) => {
  const messageObj = {
    displayName: "自分さん",

    message: value,
  }
  emit('sendMessage', messageObj)
}
const input = ref('');
const doSend = () => {
  if (input.value === '') return;
  update(input.value); 
  input.value = '';
}


</script>

<template>
  <div class="input-group mb-3">
    <!-- <Upload /> -->

    <input
      type="text"
      class="form-control"
      placeholder="メッセージを入力してください"
      v-model="input" 
    />
    <button
      class="btn btn-outline-secondary js-send-message"
      type="button"
      @click="doSend()"
    >
      メッセージ送信
    </button>
  </div>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 1rem;
}

.Image{
  height : 480px;
  weight : 640px;
}
</style>