<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<ra-button onclick={increment}>
  count is {count}
</ra-button>
