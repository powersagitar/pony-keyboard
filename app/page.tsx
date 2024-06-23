"use client";

import dynamic from "next/dynamic";
import { TextboxContentContext } from "./ui/components/Textbox";
import { useState } from "react";

const Keyboard = dynamic(() => import("./ui/components/Keyboard"));
const Textbox = dynamic(() => import("./ui/components/Textbox"));
const Pony = dynamic(() => import("./ui/components/Pony"));

export default function Home() {
  const [textboxContent, setTextboxContent] = useState("");

  return (
    <main className="flex flex-col items-center h-screen max-w-6xl break-all">
      <Keyboard />

      <hr className="my-10" />

      <TextboxContentContext.Provider
        value={{ textboxContent, setTextboxContent }}
      >
        <Textbox />
        <Pony />
      </TextboxContentContext.Provider>
    </main>
  );
}
