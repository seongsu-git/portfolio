import type { Metadata } from "next";
import "./css/reset.css"
import "./css/fonts.css";
import "./css/globals.css";
import "./css/style.css";
import { CopyButton } from "./component/client/Button";

export const metadata: Metadata = {
  title: "최성수 | 프론트엔드 개발자",
  description: "프론트엔드 개발자 최성수의 포트폴리오 입니다.",
  keywords: ["프론트엔드", "포트폴리오", "프론트엔드 개발자 포트폴리오", "개발자", "Next.js", "React"],
  authors: [{ name: "최성수", url: "https://seongsu.dev" }],
  openGraph: {
    title: "최성수 | 프론트엔드 개발자 포트폴리오",
    description: "프론트엔드 개발자 최성수의 포트폴리오 입니다.",
    url: "https://seongsu.dev",
    siteName: "Seongsu Dev",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "https://seongsu.dev/images/meta-image.png", width: 1200, height: 630 }], // 공유 시 보여줄 이미지 경로
  },
  twitter: {
    card: "summary_large_image",
    title: "최성수 | 프론트엔드 개발자 포트폴리오",
    description: "협업과 표준화를 중요하게 생각하는 프론트엔드 개발자 최성수입니다.",
    images: ["https://seongsu.dev/images/meta-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='%230F172A'/><path d='M30 35 L45 50 L30 65 M55 35 L70 50 L55 65' stroke='%2338BDF8' stroke-width='12' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
    >
      <body
        suppressHydrationWarning={true}
      >
        {children}

        <footer className="footer-area small color-lowlight">
          <p className="footer-mail">
            <CopyButton
              email="sungsu0221@naver.com"
            />

          </p>
          <p className="copyright">
            © 2026. <span className="font-bold">Choi Seong-su</span>. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
