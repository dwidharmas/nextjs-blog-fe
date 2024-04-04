import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EventInfo } from "@ckeditor/ckeditor5-utils";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface Prop {
  disabled?: boolean;
  data?: string;
  id?: string;
  onReady?: (editor: ClassicEditor) => void;
  onChange?: (event: EventInfo, editor: ClassicEditor) => void;
  onBlur?: (event: EventInfo, editor: ClassicEditor) => void;
  onFocus?: (event: EventInfo, editor: ClassicEditor) => void;
}

export default function CKEditorComponent(prop: Prop) {
  return <CKEditor editor={ClassicEditor} {...prop} />;
}
