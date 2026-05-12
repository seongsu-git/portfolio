import type { Metadata } from "next";
import "./css/reset.css"
import "./css/fonts.css";
import "./css/globals.css";
import "./css/style.css";
import { CopyButton } from "./component/client/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "최성수 | 포트폴리오",
  description: "프론트엔드 개발자 최성수의 포트폴리오 입니다.",
  keywords: ["프론트엔드", "포트폴리오", "프론트엔드 개발자 포트폴리오", "개발자", "Next.js", "React"],
  authors: [{ name: "최성수", url: "https://seongsu.dev" }],
  openGraph: {
    title: "최성수 | 포트폴리오",
    description: "프론트엔드 개발자 최성수의 포트폴리오 입니다.",
    url: "https://seongsu.dev",
    siteName: "Seongsu Dev",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "https://seongsu.dev/images/meta-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "최성수 | 포트폴리오",
    description: "프론트엔드 개발자 최성수의 포트폴리오 입니다.",
    images: ["https://seongsu.dev/images/meta-image.png"],
  },
  manifest: "/site.webmanifest",
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
          <div className="footer-link">
            <p className="">
              <Link
                href={"https://github.com/seongsu-git/portfolio"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </p>
            <p className="">
              <CopyButton
                text="sungsu0221@naver.com"
              />
            </p>
          </div>

          <p className="copyright">
            © 2026. <span className="font-bold">Choi Seong-su</span>. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
