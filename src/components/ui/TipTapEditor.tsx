'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import type { Editor } from '@tiptap/core'

type MenuBarProps = {
  editor: Editor | null
}

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: `<p>Dear Hiring Manager,</p><p>I am writing to express my interest in the...</p>`,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="border p-4 min-h-[300px] rounded-md" />
    </div>
  )
}

function MenuBar({ editor }: MenuBarProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-bold' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'italic' : ''}
      >
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>
      <button onClick={() => editor.chain().focus().setParagraph().run()}>Paragraph</button>
      <button onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}>H2</button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>Clear</button>
    </div>
  )
}
