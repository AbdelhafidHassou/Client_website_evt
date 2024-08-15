import Link from "next/link";
import { TbCode } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFingerprint } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEventAvailable } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-full min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/bgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-screen z-10">
          <div className="mr-auto place-self-center lg:col-span-7 head">
            <h1 className="max-w-2xl mb-4 text-4xl font-md tracking-tight leading-none md:text-5xl xl:text-6xl text-[#fff]">
              Nous transformons vos ambitions en succès
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
              Notre mission est de donner vie à votre vision grâce à des stratégies innovantes et des solutions créatives. Que vous cherchiez à renforcer votre présence en ligne, créer une forte identité de marque, ou organiser des évènements mémorables, nous sommes là pour vous accompagner à chaque étape.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-[#feab73] duration-300 focus:ring-4 focus:ring-gray-130"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto w-full pt-24" id="agence">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8 md:mb-12 uppercase">
            À Propos de Nous
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-12 mx-auto max-w-3xl">
            Nous sommes une agence marketing spécialisée dans la création de stratégies digitales efficaces et la conception de sites web à fort impact.
            Nous maîtrisons les leviers essentiels pour maximiser votre visibilité en ligne. Du référencement naturel SEO au marketing sur les réseaux sociaux,
            nous élaborons des campagnes intégrées pour assurer une présence cohérente sur tous les canaux.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-12 mx-auto max-w-3xl">
            Nous proposons également des solutions événementielles adaptées à vos besoins pour créer des expériences mémorables. Chez Luna Creative Studio, nous croyons en la puissance
            des idées créatives et de la stratégie bien pensée. Notre équipe passionnée et dynamique est là pour vous accompagner dans chaque étape de votre parcours marketing,
            de la conception de votre identité à la mise en œuvre de campagnes percutantes.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-12 mx-auto max-w-3xl">
            Nous mettons l’accent sur la créativité, l’efficacité et des résultats tangibles. Avec Luna Creative Studio, vous bénéficiez d’une approche personnalisée axée sur votre identité
            et vos objectifs spécifiques. Explorez notre site pour découvrir comment nous pouvons donner vie à vos idées et propulser votre entreprise vers de nouveaux horizons.
          </p>
        </div>
      </section>


      <section className="container mx-auto w-full py-16 px-8" id="services">
        <h1 className="text-black font-extrabold text-3xl md:text-4xl text-center mb-12 uppercase">
          Nos Services
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Création de Sites Web",
              description:
                "Notre équipe de concepteurs web vous aide à transformer vos idées en une présence en ligne captivante et fonctionnelle ...",
              icon: <TbCode size={50} className="text-black" />,
              link: "/creation_de_site_web",
            },
            {
              title: "Marketing des réseaux sociaux",
              description:
                "Plongez dans l’ère numérique avec nos stratégies de marketing digital. De l’élaboration de campagnes digitales stratégiques ...",
              icon: <IoShareSocialOutline size={50} className="text-black" />,
              link: "/marketing_des_reseaux_sociaux",
            },
            {
              title: "Branding",
              description:
                "L’identité de votre marque est notre passion. Nous travaillons avec vous pour créer une image de marque distincte et mémorable ...",
              icon: <MdFingerprint size={50} className="text-black" />,
              link: "/branding",
            },
            {
              title: "Optimisation de référencement SEO",
              description:
                "Notre service de référencement SEO vous garantit une visibilité accrue sur le moteur de recherche Google. Nous ciblons les meilleures ...",
              icon: <TfiWorld size={50} className="text-black" />,
              link: "/optimisation_de_referencement_SEO",
            },
            {
              title: "Événementiel",
              description:
                "Nous offrons un accompagnement complet pour planifier et organiser vos évènements. Qu’il s’agisse de conférences ...",
              icon: <MdEventAvailable size={50} className="text-black" />,
              link: "/evenementiel",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border rounded-lg border-black p-6 bg-white hover:bg-gray-130 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl w-full md:w-1/4"
            >
              <div className="service">
                <h1 className="font-bold text-black text-xl flex gap-4 items-center">
                  <span>{service.icon}</span>
                  {service.title}
                </h1>
                <p className="text-lg py-5 text-gray-700">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link href={service.link} className="text-black text-lg font-bold hover:text-gray-900 transition duration-300">
                    Lire la suite &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <h1 className="text-black font-extrabold text-3xl md:text-4xl text-center mb-12 uppercase">TRUSTED BY</h1>
      <section className="">
        <div className="bg-[#2f3135] h-[200px] m-auto overflow-hidden relative w-auto">
          <div className="animate-slide flex justify-center">
            <div className="slide">
              <Image src="/martin.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/13ALU.png" alt="" width={130} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/cmc.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/martin.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/13ALU.png" alt="" width={130} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/cmc.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/martin.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/13ALU.png" alt="" width={130} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/cmc.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/martin.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/13ALU.png" alt="" width={130} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/cmc.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/martin.png" alt="" width={200} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/13ALU.png" alt="" width={130} height={75} className="mx-5" />
            </div>
            <div className="slide">
              <Image src="/cmc.png" alt="" width={200} height={75} className="mx-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-fixed bg-center bg-cover whatsap-img mt-5 mb-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full h-[500px] max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Réservez une consultation gratuite dès aujourd’hui!
            </h1>
            <p className="text-lg lg:text-xl font-semibold text-white">
              Donnez à vos idées l’attention qu’elles méritent et débloquons ensemble de nouvelles opportunités pour votre marque.
            </p>
          </div>
          <div className="flex items-center text-center lg:text-left lg:pl-10">
            <p className="text-2xl lg:text-4xl font-bold text-[#fff] flex items-center justify-center gap-2 lg:gap-4 titre">
              <RiWhatsappFill size={55} />
              (+212)663.804.668
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
