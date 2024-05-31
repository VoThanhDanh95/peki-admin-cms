import {
    DefaultEditorOptions,
    RichTextInput,
    RichTextInputToolbar,
    LevelSelect,
    FormatButtons,
    AlignmentButtons,
    ListButtons,
    LinkButtons,
    QuoteButtons,
    ClearButtons,
    useTiptapEditor,
} from 'ra-input-rich-text';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { Stack } from '@mui/material';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import RichTextInputToolbarButton from './RichTextInputToolbarButton';


const MyRichTextInputToolbar = ({ size, ...props }: any) => {
    const editor = useTiptapEditor();

    return (
        <RichTextInputToolbar {...props}>
            <LevelSelect size={size} />
            <FormatButtons size={size} />
            <AlignmentButtons size={size} />
            <ListButtons size={size} />
            <LinkButtons size={size} />
            <QuoteButtons size={size} />
            <ClearButtons size={size} />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
                }
                label='Add a table'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().deleteTable().run()
                }
                label='Remove a table'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().addColumnBefore().run()
                }
                label='Add column before'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().addColumnAfter().run()
                }
                label='Add column after'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().deleteColumn().run()
                }
                label='Delete column'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().addRowBefore().run()
                }
                label='Add row before'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().addRowAfter().run()
                }
                label='Add row after'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().deleteRow().run()
                }
                label='Delete row'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().mergeCells().run()
                }
                label='Merge cells'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().splitCell().run()
                }
                label='Split cell'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().toggleHeaderRow().run()
                }
                label='Toggle header row'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().toggleHeaderColumn().run()
                }
                label='Toggle header column'
            />
            <RichTextInputToolbarButton
                onClick={() =>
                    editor.chain().focus().toggleHeaderCell().run()
                }
                label='Toggle header cell'
            />
        </RichTextInputToolbar>
    );
}

const CustomRichTextInput = ({ size, ...props }: any) => {
    return (
        <RichTextInput
            editorOptions={MyEditorOptions}
            toolbar={<MyRichTextInputToolbar size={size} />}
            {...props}
        />
    )
}

export const MyEditorOptions = {
    ...DefaultEditorOptions,
    extensions: [
        ...DefaultEditorOptions.extensions || [],
        Table.configure({
            resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        HorizontalRule,

    ],
};

export default CustomRichTextInput 