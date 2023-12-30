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

function getCursorStyleConfig(mode: Mode): string {
    const config = vscode.workspace.getConfiguration('vimKeymaps');
    let cursorStyle: string | undefined

    switch (mode) {
        case Mode.Insert:
            cursorStyle = config.get('cursorStyle.insertMode');
            break
        case Mode.Normal:
            cursorStyle = config.get('cursorStyle.normalMode');
            break
        case Mode.Visual:
            cursorStyle = config.get('cursorStyle.visualMode');
            break
        case Mode.VisualLine:
            cursorStyle = config.get('cursorStyle.visualLine');
            break
        default:
            throw new Error(`Unknown mode "${mode}"`);
    }

    if (cursorStyle === undefined) {
        throw new Error('Cannot find cursor style in configuration');
    }

    return cursorStyle
}

export function setModeCursorStyle(mode: Mode, editor: vscode.TextEditor): void {
    const cursorStyle = getCursorStyleConfig(mode)

    switch (cursorStyle) {
        case 'line':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.Line
            break
        case 'block':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.Block
            break
        case 'underline':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.Underline
            break
        case 'lineThin':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.LineThin
            break
        case 'blockOutline':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.BlockOutline
            break
        case 'underlineThin':
            editor.options.cursorStyle = vscode.TextEditorCursorStyle.UnderlineThin
            break
        default:
            throw new Error(`Cursor style "${cursorStyle}" is not valid`);
    }
}
