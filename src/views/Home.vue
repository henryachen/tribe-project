<template>
  <div class="home">
    <PokeTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeTable from '../components/PokeTable/PokeTable';

export default {
  name: 'home',
  components: {
    PokeTable,
  },
};
</script>
