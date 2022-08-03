## ℹ︎ About

The Fusebit Monaco jsonforms package enables you to easily integrate a monaco code editor to react with jsonforms.

## 📦 Install

```javascript

npm i @fusebit/monaco-jsonforms

```

## 🔨 Usage

If you want to use the base MonacoEditor

```javascript
import { MonacoEditor } from "@fusebit/monaco-jsonforms";

return (
  <MonacoEditor
    defaultValue={props.defaultValue}
    onChange={(value: string) => props.handleChange(value)}
    label={props.label}
    isExpandable={props.isExpandable}
  />
);
```

If you want to use it in JSONForms as a custom render, import the controls and add them to your JSONForms renderers

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
