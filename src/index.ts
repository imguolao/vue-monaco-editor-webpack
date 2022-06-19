import * as monaco from 'monaco-editor';

function create(id: string) {
  monaco.editor.create(document.getElementById(id) as HTMLElement, {
    value: 'console.log("Hello, world")',
    language: 'html'
  });
}

export default create;
