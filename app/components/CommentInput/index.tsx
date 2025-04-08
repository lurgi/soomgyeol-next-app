import { useState } from "react";
import { cn } from "@/lib/utils";
import { CornerLeftDown, Send } from "lucide-react";
import { Caption } from "../font";
import { AnimatePresence, motion } from "framer-motion";

type CommentInputMode = "default" | "post-reply" | "comment-reply";

interface CommentInputProps {
  className?: string;
  placeholder?: string;
  onSubmit?: (text: string) => void;
  mode?: CommentInputMode;
  replyingTo?: string;
}

const CommentInput = ({
  className,
  placeholder = "댓글을 입력하세요",
  onSubmit,
  mode = "default",
  replyingTo,
}: CommentInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() && onSubmit) {
      onSubmit(text);
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {mode === "comment-reply" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-slate-600 text-sm mb-2 flex items-center gap-1 overflow-hidden"
          >
            <CornerLeftDown size={16} className="mt-2 ml-2 " />
            <Caption>@{replyingTo}의 답글을 입력중입니다.</Caption>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative flex items-center w-full">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full py-3 px-6 rounded-full ring-1 ring-slate-300 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-slate-300"
        />
        <button
          onClick={handleSubmit}
          className={cn(
            "absolute right-2 p-2",
            text.trim() ? "text-slate-700" : "text-slate-400",
            "hover:text-slate-700"
          )}
          aria-label="Send comment"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
