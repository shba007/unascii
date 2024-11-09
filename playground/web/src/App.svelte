<script lang="ts">
  import { asciiPrint } from 'unascii'
  import { useMediaQuery } from '@svelte-use/core'

  const isMDScreen = useMediaQuery('(min-width: 768px)')

  let url = ''
  let width = 50
  let isLoading = false
  let renderError: null | string = null
  let image = ''
  let fontSize = 16

  async function render() {
    isLoading = true
    try {
      const print = await asciiPrint(url, {
        width: width,
        widthSkew: 2.75,
        output: 'dom',
        characters: 'alphabetic',
        grayscale: false,
      })

      image = await print.getImage()
      fontSize = 20 / width
    } catch (error) {
      renderError = error as string
    }
    isLoading = false
  }
</script>

<main class="relative flex h-screen w-screen flex-col items-center justify-center gap-4 p-4">
  <div class="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-md md:flex-row">
    <div class="flex size-full items-center justify-center overflow-hidden rounded-md bg-black">
      {#if url}
        <img src={url} alt="preprocess" class="w-full object-contain" />
      {/if}
    </div>
    <div class="flex size-full items-center justify-center overflow-hidden rounded-md bg-black">
      {#if image}
        <pre style="font-size:{fontSize * (!$isMDScreen ? 3.25 : 1.625)}vw">{@html image}</pre>
      {/if}
    </div>
  </div>
  <div class="fixed bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-700 p-2">
    <input name="url" type="text" placeholder="URL" bind:value={url} />
    <input name="width" type="number" placeholder="Width" class="appearance-none" min="10" max="500" step="10" bind:value={width} />
    <button on:click={render} disabled={isLoading} class="rounded-full bg-sky-500 px-6 py-1.5 hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-sky-800 disabled:text-opacity-50">
      {isLoading ? 'Loading' : 'Render'}
    </button>
  </div>
</main>
