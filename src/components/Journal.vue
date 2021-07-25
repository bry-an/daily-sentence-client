<template>
<div id="paper">
  <div id="pattern">
    <div id="content text-left">
    July 25
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'Journal',
};

</script>

<style lang="scss">
@import '../styles.scss';
#paper {
  width: 80%;
  height: 12rem;
  position: relative;
  margin: 20px auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: $latte;
  box-shadow: 0px 0px 5px 0px #888;
}

/* styling blue horizontal lines */
#pattern {
  height: 100%;
  background-image: repeating-linear-gradient($latte 0px, $latte 24px, $avocadoToast 25px);
}

/* styling text content */
#content {
  padding-top: 6px;
  padding-left: 56px;
  padding-right: 16px;
  line-height: 2.2rem;
  font-size: 2rem;
  letter-spacing: 1px;
  word-spacing: 5px;
}

</style>
