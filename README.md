# VimKeymaps

An opinionated Vim-like extension for VSCode that prioritizes simplicity (of use and implementation) and integration with native VSCode features.

Once you enter Insert mode it will be a completely vanilla VSCode experience: the only event VimKeymaps will listen for is the `Escape` key to go back to Normal mode.

## Operators

Operators act on a range of text. In Normal mode the range is specified by the operator range typed after the operator. In Visual mode it is the visual selection.

| Keys | Description                         |
| ---- | ----------------------------------- |
| `d`  | Delete range.                       |
| `c`  | Delete range and enter insert mode. |
| `y`  | Yank range.                         |
| `r`  | Yank and delete range.              |
| `s`  | Select range and enter Visual mode. |

## Operator Ranges

Operator Ranges select a range for an Operator to act on. They must be used in Normal mode by typing an Operator and then an operator range.

| Keys         | Description                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `l`          | Character under cursor.                                                                                            |
| `h`          | Character to the left of cursor.                                                                                   |
| `k`          | Current line and line above.                                                                                       |
| `j`          | Current line and line below.                                                                                       |
| `w`          | From cursor to beginning of next word.                                                                             |
| `W`          | From cursor to beginning of next word (including punctuation).                                                     |
| `b`          | From cursor to beginning of previous word.                                                                         |
| `B`          | From cursor to beginning of previous word (including punctuation).                                                 |
| `e`          | From cursor to end of next word.                                                                                   |
| `E`          | From cursor to end of next word (including punctuation).                                                           |
| `iw`         | Word under cursor.                                                                                                 |
| `iW`         | Word (including punctuation) under cursor.                                                                         |
| `aw`         | Word under cursor and whitespace after.                                                                            |
| `aW`         | Word (including punctuation) under cursor and whitespace after.                                                    |
| `f<char>`    | From cursor to next occurrence (case sensitive) of `<char>`.                                                       |
| `F<char>`    | From cursor to previous occurrence (case sensitive) of `<char>`.                                                   |
| `t<char>`    | From cursor to next occurrence (case sensitive) of `<char>`.                                                       |
| `T<char>`    | From cursor to previous occurrence (case sensitive) of `<char>`.                                                   |
| `gg`         | From current line to first line of the document.                                                                   |
| `G`          | From current line to last line of the document.                                                                    |
| `}`          | From current line to beginning of next paragraph.                                                                  |
| `{`          | From current line to beginning of previous paragraph.                                                              |
| `ip`         | Current paragraph.                                                                                                 |
| `ap`         | Current paragraph and whitespace after.                                                                            |
| `i<bracket>` | Inside the matching `<bracket>`s. Where `<bracket>` is a quote or opening bracket character (any of ``'"`({[<``).  |
| `a<bracket>` | Outside the matching `<bracket>`s. Where `<bracket>` is a quote or opening bracket character (any of ``'"`({[<``). |
| `it`         | Inside XML tag.                                                                                                    |
| `at`         | Outside XML tag.                                                                                                   |
| `ii`         | Inside indentation level.                                                                                          |

## Motions

Motions move the cursor and can be used in Normal or Visual mode. In Visual mode they only move one side of the selection; the other side stays anchored to where it was when you entered Visual mode.

| Keys      | Description                                       |
| --------- | ------------------------------------------------- |
| `l`       | Character right.                                  |
| `h`       | Character left.                                   |
| `k`       | Line up.                                          |
| `j`       | Line down.                                        |
| `w`       | Word right.                                       |
| `W`       | Word (including punctuation) right.               |
| `b`       | Word left.                                        |
| `B`       | Word (including punctuation) left.                |
| `e`       | Word end right.                                   |
| `E`       | Word end (including punctuation) right.           |
| `f<char>` | Next occurrence (case sensitive) of `<char>`.     |
| `F<char>` | Previous occurrence (case sensitive) of `<char>`. |
| `t<char>` | Next occurrence (case sensitive) of `<char>`.     |
| `T<char>` | Previous occurrence (case sensitive) of `<char>`. |
| `gg`      | First line of the document.                       |
| `G`       | Last line of the document.                        |
| `}`       | Down a paragraph.                                 |
| `{`       | Up a paragraph.                                   |
| `$`       | End of line.                                      |
| `_`       | Beginning of line.                                |
| `H`       | Top of screen.                                    |
| `M`       | Middle of screen.                                 |
| `L`       | Bottom of screen.                                 |

## Actions

Actions are miscellaneous commands that don't follow the well-defined patterns of Operators, Operator Ranges, or Motions.

| Keys     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `Ctrl+b` | Scroll up full page.                                                    |
| `Ctrl+d` | Scroll down half page.                                                  |
| `Ctrl+f` | Scroll down full page.                                                  |
| `Ctrl+u` | Scroll up half page.                                                    |
| `Ctrl+h` | Navigate to the View on the Left.                                       |
| `Ctrl+k` | Navigate to the View Above.                                             |
| `Ctrl+l` | Navigate to the View on the Right.                                      |
| `Ctrl+j` | Navigate to the View Below.                                             |
| `Ctrl+r` | Redo.                                                                   |
| `Escape` | Enter Normal mode.                                                      |
| `;`      | Repeat the last `f`, `F`, `t` or `T` motion forward.                    |
| `,`      | Repeat the last `f`, `F`, `t` or `T` motion backward.                   |
| `A`      | Move to end of line and enter Insert mode.                              |
| `C`      | Delete to the end of the line and enter Insert mode.                    |
| `D`      | Delete the characters under the cursor until the end of the line.       |
| `I`      | Move to beginning of line and enter Insert mode.                        |
| `O`      | Insert line above and enter insert mode.                                |
| `P`      | Put yanked text before cursor.                                          |
| `S`      | Select to the end of the line.                                          |
| `V`      | Enter VisualLine mode.                                                  |
| `Y`      | Yank to the end of the line.                                            |
| `a`      | Move one character to the right and enter Insert mode.                  |
| `cc`     | Delete current line and enter Insert mode.                              |
| `dd`     | Delete current line.                                                    |
| `gp`     | Select the result of the last `p` or `P` actions and enter Visual mode. |
| `i`      | Enter Insert mode.                                                      |
| `o`      | Insert line below and enter insert mode.                                |
| `p`      | Put yanked text after cursor.                                           |
| `ss`     | Select current line.                                                    |
| `u`      | Undo.                                                                   |
| `v`      | Enter VisualCharacter mode.                                             |
| `x`      | Delete character.                                                       |
| `yy`     | Yank current line.                                                      |
| `zb`     | Scroll so that cursor is at the bottom of the screen.                   |
| `zt`     | Scroll so that cursor is at the top of the screen.                      |
| `zz`     | Scroll so that cursor is in the middle of the screen.                   |

## Explorer

| Keys     | Description            |
| -------- | ---------------------- |
| `Ctrl+d` | Scroll down full page. |
| `Ctrl+u` | Scroll up full page.   |
| `A`      | Create new folder.     |
| `G`      | Go to the end.         |
| `a`      | Create new file.       |
| `d`      | Delete file or folder. |
| `gg`     | Go to the beginning.   |
| `h`      | Collapse list.         |
| `j`      | Line down.             |
| `k`      | Line up.               |
| `l`      | Expand list.           |
| `o`      | Open.                  |
| `r`      | Rename file or folder. |

## Differences From Vim

VimKeymaps prioritizes simplicity and integration with native VSCode features over compatability with Vim. If full Vim compatibility is important to you, consider trying a different extension. Here are some of the ways VimKeymaps is different from Vim.

- VimKeymaps has no macros. Instead it has first class multiple cursor support which you can use to achieve something similar. You can place additional cursors by any of the ways native to VSCode including: `Cmd+d`, `Cmd+Alt+Down` or `Alt+Click`. Simply place cursors everywhere you would have run the macro and see your changes to each place in real time.

- VimKeymaps has no `.` (repeat) command. Use multiple cursors instead (see previous bullet).

- VimKeymaps has no count. In Vim you can prefix commands with a number and it will run them that many times. In VimKeymaps that is not supported. Instead you can just type the command again or use a command that accomplishes your goal with fewer repetitions.

- VimKeymaps lets the cursor go one past the last character of the line in Normal mode. It would be nice to prevent this, but because of VSCode's selection model and extension API there is no good way to do it. It would require ugly hacks and would make other parts of the VimKeymaps experience buggy.

- VimKeymaps has no registers. Instead the operators have been modified so deleting text does not overwrite the text you yanked. A new `r` operator has been added for when you want to yank and delete text at the same time.

- VimKeymaps's `f` and `t` motions work slightly differently from Vim's. `t` and `f` behave like Vim's `/` command, but `t` takes one character and `f` takes two. Or in other words, `t` works like Vim's `t` in Normal mode but Vim's `f` in Visual mode. And `f` behaves like the vim-sneak plugin.

- VimKeymaps has no `/` (search) command. Instead you can either use the `f` motion or the native VSCode find. Between them most of the uses for `/` are taken care of.

- VimKeymaps has no `>` (indent) command. Instead you can use VSCode's `Cmd+]`.

- VimKeymaps has no `gU` (uppercase) command. Instead you can use VSCode's `Transform to Uppercase` from the Command Palette.

- VimKeymaps has no jump list (`Ctrl+o` and `Ctrl+i` in Vim). Instead you can use VSCode's native jump list with `Ctrl+-` and `Ctrl+_`.

- VimKeymaps does not support marks. If you're jumping back and forth often between two places in a file you can use VSCode's split window feature, and use `Cmd+1` and `Cmd+2` to focus them. If you just need to jump back to where you've been, you can use VSCode's `Ctrl+-`.

## Settings

### Yank

The `y` (yank) operator temporarily changes the background color of the range being yanked to make it obvious what you're yanking. Otherwise you might not realize you yanked the wrong thing until you tried to put it somewhere else. You can change the background color it uses with the `vimKeymaps.yankHighlightBackgroundColor` setting.

```json
{
  "vimKeymaps.yankHighlightBackgroundColor": "#F8F3AB"
}
```

### Cursor Style

The cursor style is set by default as in vim. You can set a different cursor style for each mode.

```json
{
  "vimKeymaps.cursorStyle.insertMode": "line"
  "vimKeymaps.cursorStyle.normalMode": "block"
  "vimKeymaps.cursorStyle.visualMode": "block"
  "vimKeymaps.cursorStyle.visualLineMode": "block"
}
```
