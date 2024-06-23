import { createContext, SetStateAction, useContext } from "react";

export const TextboxContentContext = createContext({
  textboxContent: "",
  setTextboxContent: (_newTextboxContent: SetStateAction<string>) => {},
});

export default function Textbox() {
  const { textboxContent } = useContext(TextboxContentContext);

  return <p className="overflow-y-scroll">{textboxContent}</p>;
}
