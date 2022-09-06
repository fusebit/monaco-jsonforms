import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div<{ isExpandable: boolean }>`
  margin-bottom: ${(props) => (props.isExpandable ? '24px' : 0)};
`;

const StyledEditor = styled(Editor)<{ isExpandable: boolean }>`
  background-color: white;
  box-shadow: 0px 20px 48px rgba(52, 72, 123, 0.1);
  border-radius: 8px;
  padding: ${(props) => !props.isExpandable && '4px 0'};

  .monaco-editor {
    padding: ${(props) => props.isExpandable && '4px 0'};
    .scroll-decoration {
      box-shadow: none;
    }

    .view-overlays .current-line {
      background: #f7f9f9;
      border: none;
    }

    .margin-view-overlays .line-numbers {
      text-align: left;
      padding-left: 4px;
    }

    .monaco-scrollable-element {
      left: 34px !important;
      width: calc(100% - 34px) !important;
    }
  }
`;

const StyledLabel = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 8px;
`;

interface Props {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  isExpandable?: boolean;
  language?: 'javascript' | 'json' | 'yaml' | string;
}

const LINE_HEIGHT = 20;
const DEFAULT_EDITOR_HEIGHT = 290;

const MonacoEditor = ({ value, onChange, label, isExpandable, language }: Props) => {
  const editorRef = useRef<any>(null);
  const [editorHeight, setEditorHeight] = useState(DEFAULT_EDITOR_HEIGHT);

  const handleOnMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <Wrapper isExpandable={!!isExpandable}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledEditor
        height={editorHeight}
        options={{
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: isExpandable ? 'hidden' : 'auto',
          },
          tabSize: 2,
        }}
        language={language || 'javascript'}
        theme="fusebit"
        value={value}
        onMount={handleOnMount}
        onChange={(val) => {
          onChange(val || '');

          if (!isExpandable) {
            return;
          }

          const linesOfCode = editorRef.current.getModel().getLineCount();
          const height = linesOfCode * LINE_HEIGHT;
          if (height > DEFAULT_EDITOR_HEIGHT) {
            setEditorHeight(height);
          }
        }}
        isExpandable={!!isExpandable}
      />
    </Wrapper>
  );
};

export default MonacoEditor;
