<script lang="ts">
  import "./app.css";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button";
  // import { asciiPrint } from '../../../src/index'
  import { asciiPrint } from '@shba007/unascii'
  import { useMediaQuery } from './utils/useMediaQuery'
  
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
      console.error(error)
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
  <div class="flex fixed bottom-0 left-1/2 p-4 gap-2 items-end justify-center -translate-x-1/2 w-full max-w-xl bg-black rounded-sm">
    <Textarea name="url" bind:value={url} class="resize-none aspect-[53/8]" placeholder="Enter URL, Paste from Clipboard or Upload a File"/>
    <Button on:click={render} disabled={isLoading}>
      {isLoading ? 'Rendering' : 'Render'}
    </Button>
  </div>
</main>