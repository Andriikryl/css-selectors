import ClassIdSelector from "@/components/classIdSelecor/ClassIdSelector";
import ElementSelector from "@/components/elementSelector/ElementSelector";
import Hero from "@/components/hero/Hero";
import MultipleSelector from "@/components/multipleSelecotr/MultipleSelector";
import UniversalSelector from "@/components/universalSelecotr/UniversalSelector";

export default function Home() {
  return (
    <>
      <Hero />
      <UniversalSelector />
      <ElementSelector />
      <ClassIdSelector />
      <MultipleSelector />
    </>
  );
}
