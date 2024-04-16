<template>
  <div class="flex flex-col">
    <div>
      <Button class="btn" type="primary" @click="getNumberIPFun">{{
        $t('postTest')
      }}</Button>
      <div class="m-2 w-80">
        <a-input-search
          v-model:value="phoneNumber"
          :placeholder="$t('inputNumber')"
          :enter-button="$t('search')"
          size="large"
          @search="getNumberIPFun"
        />
      </div>
      <span class="m-2">{{ $t('phoneNumberCity') }}{{ postTest }}</span>
    </div>
    <div class="m-2 w-80">
      <Button class="btn" type="primary" @click="getWeatherFun">{{
        $t('getTest')
      }}</Button>
      <div class="m-2">{{ $t('weatherFromBeijing') }}{{ getTest }}</div>
    </div>
    <!-- <a-upload name="file" action="" :custom-request="uploadFile"> -->
    <input
      class="m-2"
      type="file"
      name="Click to Upload (normal)"
      @change="uploadFile"
    />
    <a-upload
      class="btn"
      name="file"
      action=""
      :custom-request="uploadFileMultipart"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        {{ $t('uploadText') }} (multipart)
      </a-button>
    </a-upload>
    <a-upload
      class="btn"
      name="file"
      action=""
      :custom-request="uploadFileResume"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        {{ $t('uploadText') }}(resume)
      </a-button>
    </a-upload>
    <a-table
      class="m-2 w-80"
      :pagination="false"
      :data-source="dataSource"
      :columns="columns"
    />

    <div class="m-2 w-80">
      <a-input-search
        v-model:value="filename"
        :placeholder="$t('downloadText')"
        :enter-button="$t('download')"
        size="large"
        @search="downloadFile"
      />
    </div>
    <SvgCom name="vite-test1"></SvgCom>
    <SvgCom name="vite-test2"></SvgCom>
    <div
      class="fixed right-2 top-2 cursor-pointer rounded-xl bg-sky-600 p-2 text-white"
      @click="jump"
    >
      Back
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import { getNumberIP, getWeather } from 'api/index'
import { useOssStore } from 'store/oss'
import { getUserDevice } from 'utils/locationUtils'
import { router } from '@/router'
const store = useOssStore()
const dataSource = ref([
  {
    name: 'xx',
    url: 'xxx'
  }
])
const filename = ref()
const columns = ref([
  {
    title: '文件名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'url',
    dataIndex: 'url',
    key: 'url'
  }
])
const postTest = ref()
const getTest = ref()
const phoneNumber = ref()
onMounted(async () => {
  await store.getFileListOss()
  dataSource.value = store.list
  console.log(getUserDevice())
})
// 🌸 post 测试
const getNumberIPFun = async (): Promise<any> => {
  const res = await getNumberIP({
    mobile: phoneNumber.value
  })
  postTest.value = res.data.city
  console.log(res.data)
}
// 🌸 get测试
const getWeatherFun = async (): Promise<any> => {
  const res = await getWeather({
    areacode: 101010100
  })
  getTest.value = res.result.realtime.text
}
// 🌸 分片上传
const uploadFileMultipart = async (item): Promise<any> => {
  await store.MultipartUploadFileOss(item, 3, 1024 * 1024)
  await getFileList()
}
// 🌸 普通上传

const uploadFile = async (e): Promise<any> => {
  await store.uploadFileOss(e)
  await getFileList()
}

// 🌸 断点续传
const uploadFileResume = async (item): Promise<any> => {
  await store.resumeUploadFileOss(item)
  await getFileList()
}
// 🌸 文件下载
const downloadFile = async (): Promise<any> => {
  try {
    await store.getFileOss(filename.value)
  } catch (error) {
    console.log(error)
  }
}
// 🌸 获取文件列表
const getFileList = async (): Promise<any> => {
  const list = await store.getFileListOss()
  dataSource.value = list.objects
}
// 🌸 跳转
const jump = (): void => {
  router.push('/home')
}
</script>

<style scoped>
.btn {
  @apply m-2 h-7 w-28;
}
</style>
