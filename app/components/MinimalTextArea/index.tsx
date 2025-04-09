import { useRef } from "react";
import { Body, Caption } from "../font";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MinimalTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function MinimalTextArea({ maxLength = 500, ...props }: MinimalTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeHeight = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <label className="w-full flex flex-col">
      <Body.B1>
        <textarea
          {...props}
          ref={textareaRef}
          maxLength={maxLength}
          onChange={(e) => {
            props.onChange?.(e);
            resizeHeight();
          }}
          className="bg-transparent outline-none border-none w-full overflow-hidden resize-none"
        />
      </Body.B1>

      <Caption.C1 className="text-right text-slate-500">
        ({String(props.value)?.length ?? 0}/{maxLength})
      </Caption.C1>
    </label>
  );
}
