"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: number;
  type: "circle" | "square";
}

export default function ImageInput({ width = 100, type, onChange, ...inputProps }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        onChange?.(e);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const size = `${width}px`;

  return (
    <div
      className="flex items-center justify-center border-2 border-dashed border-gray-400 cursor-pointer overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: type === "circle" ? "9999px" : "16px",
      }}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        {...inputProps}
      />
      {imageUrl ? (
        <Image src={imageUrl} alt="preview" width={width} height={width} className="object-cover w-full h-full" />
      ) : (
        <ImagePlus className="w-8 h-8 text-gray-400" />
      )}
    </div>
  );
}
