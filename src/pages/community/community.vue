<template>
  <Header></Header>
  <Card></Card>
</template>

<script>
import Header from './components/header.vue'
import Card from './components/card.vue'
export default {
  data() {
    return {}
  },
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    Card,
  },
}
</script>

<style lang="scss"></style>
