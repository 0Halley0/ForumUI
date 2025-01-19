import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import "../TipTapEditor.css";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4 lg:mx-28 mx-6">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-4 py-2 font-semibold rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("heading", { level: 1 })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-4 py-2 font-semibold rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("heading", { level: 2 })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-4 py-2 font-semibold rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("heading", { level: 3 })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("paragraph")
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-p"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("bold")
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-bold"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("italic")
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-italic"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("strike")
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-strikethrough"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("highlight")
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-highlighter"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive({ textAlign: "left" })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-align-left"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive({ textAlign: "center" })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-align-center"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive({ textAlign: "right" })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-align-right"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-gold dark:bg-gold text-text dark:text-text"
            : ""
        }`}
      >
        <i className="fa-solid fa-align-justify"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("bulletList") ? "bg-gold dark:bg-gold" : ""
        }`}
      >
        <i className="fa-solid fa-list-ul"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("orderedList") ? "bg-gold dark:bg-gold" : ""
        }`}
      >
        <i className="fa-solid fa-list-ol"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("codeBlock") ? "bg-gold dark:bg-gold" : ""
        }`}
      >
        <i className="fa-solid fa-code"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-4 py-2 rounded-lg text-text dark:text-dark-text bg-draftPaperBackground dark:bg-dark-draftPaperBackground hover:bg-goldenRod dark:hover:bg-goldenRod focus:outline-none ${
          editor.isActive("blockquote") ? "bg-gold dark:bg-gold" : ""
        }`}
      >
        <i className="fa-solid fa-quote-right"></i>
      </button>
    </div>
  );
};

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Youtube.configure({
        width: 800,
        height: 450,
      }),
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: "",
  });

  return (
    <div>
      <MenuBar editor={editor} />
      {editor && (
        <EditorContent
          editor={editor}
          className="tiptap-editor lg:mx-28 mx-6 text-text dark:text-dark-text rounded-lg bg-draftPaperBackground dark:bg-dark-draftPaperBackground"
        />
      )}
    </div>
  );
}
