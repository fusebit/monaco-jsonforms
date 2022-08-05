## ℹ︎ About

The Fusebit Monaco jsonforms package enables you to easily integrate a monaco code editor to react with jsonforms.

## 📦 Install

```javascript

npm i @fusebit/monaco-jsonforms

```

## 🔨 Usage

In raw HTML:
```html
<script src="https://cdn.fusebit.io/fusebit/js/fusebit-form/latest/jsonforms-core.js"></script>
<script src="https://cdn.fusebit.io/fusebit/js/fusebit-form/latest/jsonforms-react.js"></script>
<script src="https://cdn.fusebit.io/fusebit/js/fusebit-form/latest/jsonforms-material.js"></script>
<script src="https://unpkg.com/@fusebit/monaco-jsonforms@latest/dist/cjs/index.js"></script>
...
<JSONFormsReact.JsonForms
  renderers={[...JSONFormsMaterial.materialRenderers, MonacoJSONForms.MonacoEditorControl]}
  ...
/> 
```

Use it in JSONForms as a custom render by importing the controls and adding them to your JSONForms renderers

```javascript
import { JsonForms } from "@jsonforms/react";
import { MonacoEditorControl } from "@fusebit/monaco-jsonforms";

return (
  <JsonForms
    {...props}
    cells={materialCells}
    renderers={[...materialRenderers, MonacoEditorControl]}
  />
);
```

## In the form

For `schema.json`:
```json
{
  "type": "object",
  "properties": {
    "mappingCode": {
      "type": "string",
      "title": "Transformation JavaScript function",
      "isExpandable": false
    }
  }
}
```

Note: the `isExpandable` flag allows for the editor to vertically expand to fit the code supplied.


For `uischema.json`:
```json
{
  "type": "CodeBlock",
  "scope": "#/properties/mappingCode",
  "label": "Customer Transform"
}
```               

## Build

```shell
npm install && npm run-script build
```
