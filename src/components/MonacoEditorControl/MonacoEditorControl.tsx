import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { rankWith, ControlProps, JsonSchema, and, uiTypeIs } from '@jsonforms/core';
import MonacoEditor from '../MonacoEditor/MonacoEditor';

type CustomProps = {
  isExpandable: boolean;
  language: string;
};

type JsonSchemaWithCustomProps = JsonSchema & CustomProps;

const MonacoEditorControlVanillaRenderer = ({ data, handleChange, path, ...props }: ControlProps) => {
  const schema = props.schema as JsonSchemaWithCustomProps;

  return (
    <MonacoEditor
      value={data}
      onChange={(value: string) => handleChange(path, value)}
      label={schema.title}
      isExpandable={schema.isExpandable}
      language={schema.language}
    />
  );
};

const MonacoEditorControlTester = rankWith(3, and(uiTypeIs('CodeBlock')));
const MonacoEditorControlRenderer = withJsonFormsControlProps(MonacoEditorControlVanillaRenderer);

const MonacoEditorControl = {
  tester: MonacoEditorControlTester,
  renderer: MonacoEditorControlRenderer,
};

export { MonacoEditorControl, MonacoEditorControlTester, MonacoEditorControlRenderer };

export default MonacoEditorControl;
