import Link from "next/link";
import { TbCode } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFingerprint } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
    <section className="bg-center bg-cover custom-img">
      <div className="w-full h-full bg-black/60">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-screen">
          <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#fff]">Nous transformons vos ambitions en succès</h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
                Notre mission est de donner vie à votre vision grâce à dés stratégies innovantes et des solutions créatives, que vous cherchiez à renforcer votre présence en ligne, créer une forte identité de marque ou organiser des évènements mémorables, nous sommes là pour vous accompagner à chaque étape.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-[#E68C3A] duration-300 focus:ring-4 focus:ring-gray-100">
              Contactez-Nous
              </a> 
          </div>             
      </div>
      </div>
    </section>
    <section className="container mx-auto w-full pt-24" id="agence">
      <div className="text-center">
        <h1 className="text-[#213E60] font-bold text-3xl md:text-4xl py-10">
          A Propos de Nous
        </h1>
        <p className="text-xl text-center mt-9 leading-loose px-5">
          Nous sommes une agence marketing spécialisée dans la création de stratégies digitales efficaces et la conception de sites web à fort impact.
          Nous maitrisons les leviers essentiels pour maximiser votre visibilité en ligne. 
          Du référencement naturel SEO au marketing sur les réseaux sociaux, nous élaborons des campagnes intégrées pour assurer une présence cohérente sur tous les canaux.
          Nous proposons également des solutions événementielles adaptées à vos besoins pour
          créer des expériences mémorables.
          Chez Elevate, nous croyons en la puissance des idées créatives et de la stratégie bien pensée. Notre équipe passionnée et dynamique est là pour vous accompagner dans chaque étape de votre parcours marketing, de la conception de votre identité à la mise en œuvre de campagnes percutantes.
          Nous mettons l’accent sur la créativité, l’efficacité et des résultats tangibles. Avec Elevate vous bénéficiez d’une approche personnalisée axée sur votre identité et vos objectifs spécifiques.
          Explorez notre site pour découvrir comment nous pouvons donner vie à vos idées et propulser votre entreprise vers de nouveaux horizons.
        </p>
      </div>
    </section>
    <section className="container mx-auto w-full p-5" id="services">
      <h1 className='text-[#213E60] font-bold text-3xl md:text-4xl text-center my-14 py-10'>Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="border rounded-md border-[#213E60] p-5 bg-[#213E60] hover:bg-[#001F3F] duration-300">
          <div>
            <h1 className="font-bold text-[#E68C3A] text-xl flex gap-5 items-center"><span><TbCode size={50} className="text-[#F4F2EF]"/></span>Création de Sites Web</h1>
            <p className="text-lg py-5 text-[#F4F2EF]">
              Notre équipe de concepteurs web vous aide à transformer vos idées en une présence en ligne captivante et fonctionnelle ...
            </p>
            <div className="mt-12">
              <Link href="/creation_de_site_web" className="text-[#E68C3A] text-lg font-bold hover:text-[#F4F2EF] duration-300">Lire la suite &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="border rounded-md border-[#213E60] p-5 bg-[#213E60] hover:bg-[#001F3F] duration-300">
          <div>
            <h1 className="font-bold text-[#E68C3A] text-xl flex gap-5 items-center"><span><IoShareSocialOutline   size={50} className="text-[#F4F2EF]"/></span>Marketing des réseaux sociaux</h1>
            <p className="text-lg py-5 text-[#F4F2EF]">
            Plongez dans l’ère numérique avec nos stratégies de marketing digital.
            De l’élaboration de campagnes digitales stratégiques ...
            </p>
            <div className="mt-12">
              <Link href="/marketing_des_reseaux_sociaux" className="text-[#E68C3A] text-lg font-bold hover:text-[#F4F2EF] duration-300">Lire la suite &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="border rounded-md border-[#213E60] p-5 bg-[#213E60] hover:bg-[#001F3F] duration-300">
          <div>
            <h1 className="font-bold text-[#E68C3A] text-xl flex gap-5 items-center"><span><MdFingerprint size={50} className="text-[#F4F2EF]"/></span>Branding</h1>
            <p className="text-lg py-5 text-[#F4F2EF]">
            L’identité de votre marque est notre passion. Nous travaillons avec vous pour créer une image de marque distincte et mémorable ...
            </p>
            <div className="mt-20">
              <Link href="branding" className="text-[#E68C3A] text-lg font-bold hover:text-[#F4F2EF] duration-300">Lire la suite &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="border rounded-md border-[#213E60] p-5 bg-[#213E60] hover:bg-[#001F3F] duration-300">
          <div>
            <h1 className="font-bold text-[#E68C3A] text-xl flex gap-5 items-center"><span><TfiWorld size={50} className="text-[#F4F2EF]"/></span>Optimisation de référencement SEO</h1>
            <p className="text-lg py-5 text-[#F4F2EF]">
            Notre service de référencement SEO vous garantit une visibilité accrue sur le moteur de recherche Google. Nous ciblons les meilleures ...
            </p>
            <div className="mt-5">
              <Link href="/optimisation_de_referencement_SEO" className="text-[#E68C3A] text-lg font-bold hover:text-[#F4F2EF] duration-300">Lire la suite &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="border rounded-md border-[#213E60] p-5 bg-[#213E60] hover:bg-[#001F3F] duration-300">
          <div>
            <h1 className="font-bold text-[#E68C3A] text-xl flex gap-5 items-center"><span><TfiWorld size={50} className="text-[#F4F2EF]"/></span>Événementiel</h1>
            <p className="text-lg py-5 text-[#F4F2EF]">
            Nous offrons un accompagnement complet pour planifier et organiser vos évènements. Qu’il s’agisse de conférences ...
            </p>
            <div className="mt-20">
              <Link href="/evenementiel" className="text-[#E68C3A] text-lg font-bold hover:text-[#F4F2EF] duration-300">Lire la suite &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-fixed bg-center bg-cover whatsap-img my-20">
      <div className="w-full h-full bg-[#213E60]/70">
        <div className="max-w-screen-xl m-auto justify-between items-center flex px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-[440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-justify">
            <div>
              <h1 className="text-5xl font-medium text-[#fff] pb-9">Réservez une consultation gratuite dès aujourd’hui!</h1>
              <p className="text-xl font-semibold text-[#F4F2EF]">Donnez à vos idées l’attention qu’elles méritent et débloquons ensemble de nouvelles opportunités pour votre marque.</p>
            </div>
            <div className="flex items-center pl-10">
              <p className="text-2xl md:text-4xl font-extrabold text-[#25d366] flex items-center gap-4 md:gap-7"><span><RiWhatsappFill size={65}/></span>(212)663804668</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
