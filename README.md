## ℹ︎ About

The Fusebit Monaco jsonforms package enables you to easily integrate a monaco code editor to react with jsonforms.

## 📦 Install

```javascript

npm i @fusebit/monaco-jsonforms

```

## 🔨 Usage

In raw HTML:
```html
<script src="https://unpkg.com/@fusebit/monaco-jsonforms@latest/dist/cjs/index.js">
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

## Build

```shell
npm install && npm run-script build
```
