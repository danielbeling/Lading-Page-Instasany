import Header from '@/components/Header';
import SectionCards from '@/components/SectionCards';
import SectionHero from '@/components/SectionHero';
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <SectionHero />
    <SectionCards/>
    </>
  );
}
