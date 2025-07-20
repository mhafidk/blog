<script lang="ts">
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  import { onMount } from 'svelte';

  export let expression: string;
  export let displayMode: boolean = false;

  let container: HTMLSpanElement;

  onMount(() => {
    try {
      katex.render(expression, container, {
        displayMode,
        throwOnError: false,
        strict: "warn"
      });
    } catch (e) {
      container.innerHTML = `<span class="text-red-500">Invalid LaTeX</span>`;
      console.warn("KaTeX render error:", e);
    }
  });
</script>

<span
  bind:this={container}
  class={displayMode ? 'block my-4' : 'inline-block align-middle'}
></span>
