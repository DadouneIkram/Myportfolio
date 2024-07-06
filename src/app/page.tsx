'use client'
import Aboutme from "@/components/aboutme/aboutme";
import Background from "@/components/background/background";
import Contactme from "@/components/contactme/contactme";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div className="">
    <Aboutme />
      <Skills/> 
      <Projects/>
      <Experience/>
      <Contactme/>
    </div>
  );
}
