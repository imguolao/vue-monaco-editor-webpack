import { defineComponent, onMounted } from '@vue/composition-api'
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
// import * as monaco from 'monaco-editor'
import create from '../dist/index';

export default defineComponent({
  setup() {
    onMounted(() => {
      // monaco.editor.create(document.getElementById('editor') as HTMLElement, {
      //   value: 'console.log("Hello, world")',
      //   language: 'html',
      //   theme: 'vs-dark',
      // });
      create('editor')
    })
  },
  render() {
    return (
      <div id="editor" style="height: 100%; width: 100%;"></div>
    )
  }
})
