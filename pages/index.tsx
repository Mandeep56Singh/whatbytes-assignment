import AnalysisSection from "@/components/AnalysisSection";
import Header from "@/components/Header";
import SkillTest from "@/components/SkillTest";
import Analysis from "@/components/SyllabysAnalysis";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Header></Header>
      <h1 className="text-xl px-4">Skill Test</h1>
      <div className="lg:flex-row flex flex-col ">
        <SkillTest ></SkillTest>
        <AnalysisSection></AnalysisSection>
      </div>
    </div>
  );
}
