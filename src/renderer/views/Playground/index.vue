<template>
  <div>
    <div
      v-if="testFile"
    >
      {{ testFile.name }}
      <video
        v-if="testVideoSrc"
        :src="testVideoSrc"
      />
    </div>
    <t-button
      @click="onClickTestButton"
    >
      testButton
    </t-button>
    <t-file-drag-and-drop
      @uploaded="uploadedFile"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TFileDragAndDrop from '@/components/tailwind/input/dragAndDrop/File/index.vue'
import { downloadFileInHTML } from '@/utils/download'

export default defineComponent({
  name: 'Playground',
  components: { TFileDragAndDrop, TButton },
  setup () {
    const testFile = ref<File | null>(null)

    const testVideoSrc = computed(() => testFile.value ? window.URL.createObjectURL(testFile.value) : '')

    const onClickTestButton = () => {
      console.log('onClickTestButton')
      if (testFile.value)
        downloadFileInHTML(testFile.value, '테스팅..!')
    }

    const uploadedFile = (file: File) => {
      console.log('uploadedFile', file)
      testFile.value = file
    }

    return {
      testFile,
      testVideoSrc,
      onClickTestButton,
      uploadedFile,
    }
  }
})
</script>
