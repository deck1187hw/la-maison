<template>
  <div v-if="items">
    <div v-for="(item, index) in items" :key="index">
      <p v-if="item.type=='paragraph'" class="main-paragraph">{{item.text}}</p>
      <h1 v-if="item.type=='heading1'">{{item.text}}</h1>
      <h2 v-if="item.type=='heading2'">{{item.text}}</h2>
      <h3 v-if="item.type=='heading3'">{{item.text}}</h3>
      <h4 v-if="item.type=='heading4'">{{item.text}}</h4>
      <h5 v-if="item.type=='heading5'">{{item.text}}</h5>

      <div class="list-item" v-if="item.type == 'list-item'">
          {{item.text}}
      </div>

      <p v-else-if="item.type=='image'" class="imig-cont">
        <b-img :src="item.url" fluid :alt="item.alt"></b-img>
      </p>
      <h1 class="lead" v-if="item.type=='heading1'">{{item.text}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items"]
};
</script>
<style scoped>
.imig-cont {
  margin-bottom: 10px;
  margin-top: 10px;
}
.main-paragraph {
  margin-bottom: 15px;
}
.list-item{
  padding-left: 10px;
  margin-bottom: 6px;
}
</style>