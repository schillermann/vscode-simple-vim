import * as vscode from 'vscode';

import { Mode } from './modes_types';
import { VimState } from './vim_state_types';

export function enterInsertMode(vimState: VimState): void {
    vimState.mode = Mode.Insert;
    setModeContext('extension.vimKeymaps.insertMode');
}

export function enterNormalMode(vimState: VimState): void {
    vimState.mode = Mode.Normal;
    setModeContext('extension.vimKeymaps.normalMode');
}

export function enterVisualMode(vimState: VimState): void {
    vimState.mode = Mode.Visual;
    setModeContext('extension.vimKeymaps.visualMode');
}

export function enterVisualLineMode(vimState: VimState): void {
    vimState.mode = Mode.VisualLine;
    setModeContext('extension.vimKeymaps.visualLineMode');
}

function setModeContext(key: string) {
    const modeKeys = [
        'extension.vimKeymaps.insertMode',
        'extension.vimKeymaps.normalMode',
        'extension.vimKeymaps.visualMode',
        'extension.vimKeymaps.visualLineMode',
    ];

    modeKeys.forEach(modeKey => {
        vscode.commands.executeCommand('setContext', modeKey, key === modeKey);
    });
}

export function setModeCursorStyle(mode: Mode, editor: vscode.TextEditor): void {
    if (mode === Mode.Insert) {
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.Line;
    } else if (mode === Mode.Normal) {
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.Underline;
    } else if (mode === Mode.Visual || mode === Mode.VisualLine) {
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.LineThin;
    }
}
