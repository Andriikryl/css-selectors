import AdjacentSelector from "@/components/adjacentSelector/AdjacentSelector";
import AttributeSelector from "@/components/attributeSelector/AttributeSelector";
import ChildSelector from "@/components/childSelector/ChildSelector";
import ClassIdSelector from "@/components/classIdSelecor/ClassIdSelector";
import DescendantSelector from "@/components/descendantSelector/DescendantSelector";
import ElementSelector from "@/components/elementSelector/ElementSelector";
import GeneralSiblingSelector from "@/components/generalSiblingSelector/GeneralSiblingSelector";
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
      <AdjacentSelector />
      <ChildSelector />
      <GeneralSiblingSelector />
      <AttributeSelector />
    </>
  );
}
