import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 네이버 지도 API 키
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "YOUR_CLIENT_ID_HERE"; // 발급받은 클라이언트 ID로 변경 필요

export const metadata: Metadata = {
  title: "실시간 택배 조회 서비스",
  description: "국내 모든 택배사 실시간 조회가 가능한 서비스입니다.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
