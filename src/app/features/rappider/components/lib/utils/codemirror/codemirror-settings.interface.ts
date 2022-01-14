import { CodeMirrorMode } from './codemirror-mode.enum';
import { CodeMirrorObjectMode } from './codemirror-object-mode.interface';
import { CodeMirrorTheme } from './codemirror-theme.enum';

export interface CodeMirrorSettings {
  mode?: CodeMirrorMode | CodeMirrorObjectMode;
  theme?: CodeMirrorTheme;
  lineNumbers?: boolean;
  autoRefresh?: boolean;
  autoCloseBrackets?: boolean;
  fixedGutter?: boolean;
  lint?: boolean;
  lineWrapping?: boolean;
  foldGutter?: boolean;
  gutters?: any[];
  matchBrackets?: boolean;
}
