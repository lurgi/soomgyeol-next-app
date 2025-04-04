import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 기본 폰트 사이즈는 10px (html font-size: 62.5%)
      fontSize: {
        // Title 스타일
        'title-1': 'var(--text-title-1)',
        'title-2': 'var(--text-title-2)',
        'title-3': 'var(--text-title-3)',
        
        // Heading 스타일
        'heading-1': 'var(--text-heading-1)',
        'heading-2': 'var(--text-heading-2)',
        'heading-3': 'var(--text-heading-3)',
        
        // Body 스타일
        'body-1': 'var(--text-body-1)',
        'body-2': 'var(--text-body-2)',
        
        // Caption 스타일
        'caption-1': 'var(--text-caption-1)',
      },
      lineHeight: {
        // Title 스타일
        'title-1': 'var(--text-title-1--line-height)',
        'title-2': 'var(--text-title-2--line-height)',
        'title-3': 'var(--text-title-3--line-height)',
        
        // Heading 스타일
        'heading-1': 'var(--text-heading-1--line-height)',
        'heading-2': 'var(--text-heading-2--line-height)',
        'heading-3': 'var(--text-heading-3--line-height)',
        
        // Body 스타일
        'body-1': 'var(--text-body-1--line-height)',
        'body-2': 'var(--text-body-2--line-height)',
        
        // Caption 스타일
        'caption-1': 'var(--text-caption-1--line-height)',
      },
      fontWeight: {
        'regular': 'var(--text-title-1--font-weight-regular)',
        'medium': 'var(--text-title-1--font-weight-medium)',
        'bold': 'var(--text-title-1--font-weight-bold)',
      },
    },
  },
};

export default config;
