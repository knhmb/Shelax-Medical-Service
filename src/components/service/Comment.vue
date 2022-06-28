<template>
  <div class="comment">
    <p class="comment-title">{{ $t("comment_title") }}</p>
    <p class="comment-description">
      {{ $t("comment_description") }}
    </p>
    <p v-if="$i18n.locale === 'en-US'" class="comment-date">
      Reviewed on {{ updatedAt }}
    </p>
    <p v-else class="comment-date">於 {{ updatedAt }} 評價</p>
  </div>
</template>

<script>
export default {
  props: ["updatedAt"],
};
</script>


<style scoped>
.comment {
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 16px;
  margin-top: 1rem;
}

.comment p {
  margin: 0;
}

.comment .comment-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #262626;
}

.comment .comment-description {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #525252;
  margin-top: 0.3rem;
}

.comment .comment-date {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #525252;
  margin-top: 1.5rem;
}
</style>