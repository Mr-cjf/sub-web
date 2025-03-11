<template>
  <div>
    <!-- ... existing code ... -->
    <el-form-item label="订阅短链:">
      <el-input v-model="curtomShortSubUrl" class="copy-content" disabled>
        <template #append>
          <el-button ref="copy-btn" icon="el-icon-document-copy" @click="copyShortUrl">复制</el-button>
        </template>
      </el-input>
    </el-form-item>
    <!-- ... existing code ... -->
  </div>
</template>

<script>

export default {
  methods: {
    copyShortUrl() {
      this.$copyText(this.curtomShortSubUrl).then(() => {
        this.$message.success("短链接已复制到剪贴板");
      }).catch(() => {
        this.$message.error("复制失败");
      });
    },
  },
};
</script>