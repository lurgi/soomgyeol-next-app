"use client";
import BottomFloatingButton from "@/app/components/BottomFloatingButton";
import Divider from "@/app/components/Divider";
import { Body, Caption } from "@/app/components/font";
import ImageInput from "@/app/components/ImageInput";
import MinimalTextArea from "@/app/components/MinimalTextArea";
import MobileLayout from "@/app/components/MobileLayout";
import { Instagram, Link, Minus, Plus } from "lucide-react";
import { useState } from "react";

const MAX_LINKS = 5;

export default function EditProfilePage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState<string[]>([""]);
  const [introduction, setIntroduction] = useState("");
  const [error, setError] = useState({
    nickname: "",
    email: "",
  });

  const validateNickname = (nickname: string) => {
    if (nickname.length < 2) {
      return "닉네임은 최소 2자 이상 입력해주세요.";
    }
    if (nickname.length > 10) {
      return "닉네임은 최대 10자 이하 입력해주세요.";
    }
    if (/[^a-zA-Z0-9가-힣]/.test(nickname)) {
      return "닉네임은 숫자, 영어, 한글로만 입력해주세요.";
    }
    return "";
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    const errorMessage = validateNickname(e.target.value);
    if (!errorMessage) {
      setError((prev) => ({
        ...prev,
        nickname: "",
      }));
    }
  };

  const handleNicknameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const errorMessage = validateNickname(e.target.value);
    if (errorMessage) {
      setError((prev) => ({
        ...prev,
        nickname: errorMessage,
      }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "이메일 주소가 올바르지 않습니다.";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const errorMessage = validateEmail(e.target.value);
    if (!errorMessage) {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const errorMessage = validateEmail(e.target.value);
    if (errorMessage) {
      setError((prev) => ({
        ...prev,
        email: errorMessage,
      }));
    }
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const addLink = () => {
    if (links.length < MAX_LINKS - 1) {
      setLinks([...links, ""]);
    }
  };

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };

  return (
    <MobileLayout>
      <MobileLayout.Header title="프로필 수정" type="detail" hasIcons={false} />
      <MobileLayout.Main>
        <div className="space-y-2 mt-14 mb-14">
          <div className="px-4 py-2 flex justify-center items-center">
            <ImageInput type="circle" />
          </div>

          <Divider />
          <LabeledInput
            label="닉네임"
            value={nickname}
            onChange={handleNicknameChange}
            onBlur={handleNicknameBlur}
            errorMessage={error.nickname}
          />
          <Divider />
          <LabeledInput
            label="이메일"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            errorMessage={error.email}
          />
          <Divider />
          <HyperLinksInput values={links} onChange={handleLinkChange} addLink={addLink} removeLink={removeLink} />

          <Divider />
          <div className="px-6">
            <MinimalTextArea
              placeholder="소개를 입력하세요."
              value={introduction}
              maxLength={300}
              onChange={handleIntroductionChange}
            />
          </div>
        </div>

        <MobileLayout.BottomOverlay>
          <BottomFloatingButton disabled={false}>수정</BottomFloatingButton>
        </MobileLayout.BottomOverlay>
      </MobileLayout.Main>
    </MobileLayout>
  );
}

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
}

function LabeledInput({ label, value, onChange, placeholder, errorMessage, ...props }: LabeledInputProps) {
  return (
    <label className="flex flex-col gap-1 px-6 py-2 cursor-text">
      <div className="flex gap-3 items-center">
        <Body.B1>{label}</Body.B1>
        <div className="flex-1">
          <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
            {...props}
          />
        </div>
      </div>
      {errorMessage && <Caption.C1 className="text-sm text-red-500">{errorMessage}</Caption.C1>}
    </label>
  );
}

interface HyperLinksInputProps {
  values: string[];
  onChange: (index: number, value: string) => void;
  addLink: () => void;
  removeLink: (index: number) => void;
}

function HyperLinksInput({ values, onChange, addLink, removeLink }: HyperLinksInputProps) {
  const [instagramValue, ...otherValues] = values;
  return (
    <div className="px-6 py-2 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Body.B1>외부 링크</Body.B1>
          <Caption.C1 className="text-gray-600">({values.length}/5)</Caption.C1>
        </div>
        {values.length < MAX_LINKS - 1 && (
          <button type="button" onClick={addLink} className="text-slate-800">
            <Plus width={18} height={18} />
          </button>
        )}
      </div>

      <label className="flex items-center gap-2 text-slate-700">
        <div>
          <Instagram width={16} height={16} />
        </div>

        <Body.B2 className="text-slate-600">https://instagram.com/</Body.B2>
        <div className="flex-1">
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            value={instagramValue}
            onChange={(e) => onChange(0, e.target.value)}
            className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
          />
        </div>
      </label>

      {otherValues.map((link, index) => (
        <label key={index} className="flex items-center gap-2 text-slate-700">
          <div>
            <Link width={16} height={16} />
          </div>
          <Body.B2 className="text-slate-600">https://</Body.B2>
          <input
            type="text"
            value={link}
            onChange={(e) => onChange(index + 1, e.target.value)}
            placeholder="링크를 입력하세요."
            className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
          />
          <button type="button" onClick={() => removeLink(index)} className="text-slate-800">
            <Minus width={18} height={18} />
          </button>
        </label>
      ))}
    </div>
  );
}
