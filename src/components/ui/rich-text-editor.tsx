"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  content: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function RichTextEditor({
  content,
  onChange,
  placeholder = "Write your message here...",
  className,
  disabled = false,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    editable: !disabled,
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: cn(
          "min-h-[140px] w-full px-3.5 py-3 text-sm text-zinc-900 leading-relaxed focus:outline-hidden",
          "[&_.is-editor-empty:first-child::before]:text-zinc-400 [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.is-editor-empty:first-child::before]:pointer-events-none [&_.is-editor-empty:first-child::before]:h-0",
          "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-1.5",
          "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-1.5",
          "[&_blockquote]:border-l-2 [&_blockquote]:border-rose-400 [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-zinc-600 [&_blockquote]:my-2",
          "[&_code]:bg-zinc-100 [&_code]:text-rose-600 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:font-mono [&_code]:text-xs",
          "[&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0",
        ),
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  // Synchronize when parent resets content (e.g. form submit reset)
  useEffect(() => {
    if (!editor) return;

    if (content === "" && editor.getHTML() !== "") {
      editor.commands.setContent("");
    }
  }, [content, editor]);

  if (!editor) {
    return (
      <div className="min-h-[180px] w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 animate-pulse" />
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200",
        "focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-500/20",
        disabled && "opacity-60 pointer-events-none bg-zinc-50",
        className,
      )}
    >
      {/* WYSIWYG Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-zinc-100 bg-zinc-50/80 px-2.5 py-1.5">
        {/* Bold */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="Toggle Bold"
          title="Bold (Ctrl+B)"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs font-semibold transition-colors",
            editor.isActive("bold")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <Bold className="size-3.5" />
        </button>

        {/* Italic */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Toggle Italic"
          title="Italic (Ctrl+I)"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("italic")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <Italic className="size-3.5" />
        </button>

        {/* Strikethrough */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          aria-label="Toggle Strikethrough"
          title="Strikethrough"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("strike")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <Strikethrough className="size-3.5" />
        </button>

        {/* Inline Code */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          aria-label="Toggle Code"
          title="Inline Code"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("code")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <Code className="size-3.5" />
        </button>

        <span className="mx-1 h-4 w-px bg-zinc-200" />

        {/* Bullet List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Bullet List"
          title="Bullet List"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("bulletList")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <List className="size-3.5" />
        </button>

        {/* Ordered List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Numbered List"
          title="Numbered List"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("orderedList")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <ListOrdered className="size-3.5" />
        </button>

        {/* Blockquote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          aria-label="Blockquote"
          title="Quote"
          className={cn(
            "flex size-7 items-center justify-center rounded-md text-xs transition-colors",
            editor.isActive("blockquote")
              ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-2xs"
              : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
          )}
        >
          <Quote className="size-3.5" />
        </button>

        <span className="mx-1 h-4 w-px bg-zinc-200" />

        {/* Undo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          aria-label="Undo"
          title="Undo (Ctrl+Z)"
          className="flex size-7 items-center justify-center rounded-md text-xs text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <Undo2 className="size-3.5" />
        </button>

        {/* Redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          aria-label="Redo"
          title="Redo (Ctrl+Y)"
          className="flex size-7 items-center justify-center rounded-md text-xs text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <Redo2 className="size-3.5" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="cursor-text" />

      {/* Subtle Bottom Bar */}
      <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/40 px-3 py-1 text-[11px] text-zinc-400">
        <span>Rich Text (WYSIWYG)</span>
        <span>
          {editor.getText().trim().length > 0
            ? `${editor.getText().trim().split(/\s+/).length} words`
            : "Empty"}
        </span>
      </div>
    </div>
  );
}
