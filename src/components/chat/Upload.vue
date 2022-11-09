
<!-- <script>
  export default {
    data() {
        return {
          filePreview: null
        };
      },
    methods: {
        chooseFile () {
            this.$refs.fileInput.click()
        },
        selectImgFile () {
          let fileInput = this.$refs.fileInput
          let imgFile = fileInput.files

          if (imgFile && imgFile[0]) {
            let reader = new FileReader
            reader.onload = e => {
              this.filePreview = e.target.result
            }
            reader.readAsDataURL(imgFile[0])
            this.$emit('fileInput', imgFile[0])
          }
        }
    }
  }
</script>

<template>
  <div class="container">
      <div
        class="previewBlock"
        @click="chooseFile"
        :style="{ 'background-image': `url(${filePreview})` }">
      </div>

      <div>
        <input
          class="form-control form-control-lg"
          ref="fileInput"
          type="file"
          id="formFileLg"
          @input="selectImgFile">
      </div>
      
  </div>
</template>

<style scoped lang="css">
  .container {
      max-width: 600px;
  }
  .previewBlock {
      display: block;
      cursor: pointer;
      width: 300px;
      height: 280px;        
      margin: 0 auto 20px;
      background-position: center center;
      background-size: cover;
  }
</style> -->
<script>
export default {
  data(){
    return{
      url:null
    }
  },
  methods:{
    uploadImage:function(){
      this.url = URL.createObjectURL(this.$refs.image.files[0]);
    }
  }
}
</script>


<template>
  <div>
    <img :src="url" class = Image>
    <input type="file" accept="image/*"  @change="uploadImage" ref="image">
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