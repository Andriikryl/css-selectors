import ClassIdSelector from "@/components/classIdSelecor/ClassIdSelector";
import DescendantSelector from "@/components/descendantSelector/DescendantSelector";
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
      <DescendantSelector />
    </>
  );
}
