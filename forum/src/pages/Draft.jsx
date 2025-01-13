import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";

export default function Draft() {
  const editorRef = useRef(null);

  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: ["bold", "italic", "link"],
      },
      delimiter: Delimiter,
      code: CodeTool,
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: "http://localhost:3000/uploadFile",
            byUrl: "http://localhost:3000/fetchUrl",
          },
        },
      },

      inlineCode: InlineCode,
      linkTool: LinkTool,
    },
    tunes: {
      alignmentTune: {
        config: {
          default: "left",
        },
      },
    },
    placeholder: "Start writing your content...",
  });
  return (
    <div className="bg-background dark:bg-dark-background">
      <h1 className="font-thin text-text dark:text-dark-text">Draft</h1>
      <div
        id="editorjs"
        className="mx-44 p-12 text-text dark:text-dark-text rounded-lg bg-draftPaperBackground dark:bg-dark-draftPaperBackground"
      ></div>
    </div>
  );
}
