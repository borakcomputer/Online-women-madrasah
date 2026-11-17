import { Children, cloneElement, isValidElement, type ReactNode, useEffect, useState } from "react";
import { translations } from "./translations";

export type Language = "bn" | "en";

// Home ar Register page-e ekoi bhasha thakbe (browser-e save thake)
export function useLanguage() {
  const [language, setLang] = useState<Language>("bn");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("owm-lang");
      if (saved === "bn" || saved === "en") setLang(saved);
    } catch {
      /* ignore */
    }
  }, []);
  const setLanguage = (l: Language) => {
    setLang(l);
    try {
      localStorage.setItem("owm-lang", l);
    } catch {
      /* ignore */
    }
  };
  return [language, setLanguage] as const;
}

export function localizeNode(node: ReactNode, language: Language): ReactNode {
  if (typeof node === "string") {
    const leading = node.match(/^\s*/)?.[0] ?? "";
    const trailing = node.match(/\s*$/)?.[0] ?? "";
    const text = node.trim();
    return `${leading}${translations[text]?.[language] ?? text}${trailing}`;
  }
  if (Array.isArray(node)) return Children.map(node, (child) => localizeNode(child, language));
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
    return cloneElement(node, {}, localizeNode(node.props.children, language));
  }
  return node;
}
