import React from 'react'
import Image from 'next/image'

function evenementiel() {
  return (
    <>
      <section className="bg-center bg-cover evn-img mb-20">
        <div>
          <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px] service">
            <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Événementiel</h1>
          </div>
        </div>
      </section>
      <div className="w-full py-16 px-6">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/Evenementiel.jpg"
            alt="Événementiel"
            className="rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
            width={550}
            height={400}
          />
          <div className="flex flex-col justify-center text-gray-800">
            <p className="font-medium leading-relaxed text-lg">
              Nous proposons un service complet pour la planification et l'organisation de vos événements, quel que soit leur nature. Que vous prépariez une conférence de presse, un lancement de produit, ou une soirée d'entreprise, notre équipe de professionnels est là pour transformer vos idées en réalité.
            </p>
            <p className="font-medium leading-relaxed text-lg mt-4">
              Nous vous accompagnons à chaque étape du processus, de la définition de vos besoins à la gestion logistique, en passant par la coordination sur le terrain. Nous veillons à ce que chaque détail soit soigné pour créer un événement mémorable et parfaitement aligné avec vos objectifs.
            </p>
            <p className="font-medium leading-relaxed text-lg mt-4">
              Nous prêtons une attention particulière à chaque détail, qu'il s'agisse de la décoration, de l'agencement de l'espace, ou encore de l'ambiance générale que vous souhaitez créer.
            </p>
            <p className="font-medium leading-relaxed text-lg mt-4">
              Nous faisons de la ponctualité et du respect des délais une priorité absolue. Nous savons que le temps est un facteur crucial dans la réussite de votre événement, c'est pourquoi nous nous engageons à respecter les échéances convenues, vous assurant ainsi un déroulement fluide et sans stress. Avec notre expertise, chaque aspect de votre événement est pris en charge avec minutie, pour garantir un résultat à la hauteur de vos attentes et une expérience mémorable pour tous les participants.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default evenementiel