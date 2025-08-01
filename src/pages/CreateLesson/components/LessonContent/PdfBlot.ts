// PdfBlot.ts
import Quill from "quill";

const BlockEmbed = Quill.import("blots/block/embed");

class PdfBlot extends BlockEmbed {
  static blotName = "pdf";
  static tagName = "embed";

  static create(value: string) {
    const node = super.create() as HTMLElement;
    node.setAttribute("src", value);
    node.setAttribute("type", "application/pdf");
    node.setAttribute("width", "100%");
    node.setAttribute("height", "500px");
    return node;
  }

  static value(node: HTMLElement) {
    return node.getAttribute("src");
  }
}

Quill.register(PdfBlot);
