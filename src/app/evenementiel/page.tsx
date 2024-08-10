import React from 'react'
import Image from 'next/image'

function evenementiel() {
  return (
    <>
      <section className="bg-center bg-cover csw-img mb-20">
        <div className="w-full h-full bg-black/50">
          <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
            <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Événementiel</h1>
          </div>
        </div>
      </section>
      <div className='w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16'>
          <Image src="/Evenementiel.jpg" alt="creation site web" className='my-4 mx-auto order-2 rounded-3xl' height={350} width={1000} />
          <div className='flex flex-col justify-center'>
            <p className='font-medium leading-loose text-lg'>
              Nous proposons un service complet pour la planification et l'organisation de vos événements, quel que soit leur nature. Que vous prépariez une conférence de presse, un lancement de produit ou une soirée d'entreprise, notre équipe de professionnels est là pour transformer vos idées en réalité.

              Nous vous accompagnons à chaque étape du processus, de la définition de vos besoins à la gestion logistique, en passant par la coordination sur le terrain. Nous veillons à ce que chaque détail soit soigné pour créer un événement mémorable et parfaitement aligné avec vos objectifs.

              Nous prêtons une attention particulière à chaque détail, qu'il s'agisse de la décoration, de l'agencement de l'espace, ou encore de l'ambiance générale que vous souhaitez créer.

              Nous faisons de la ponctualité et du respect des délais une priorité absolue. Nous savons que le temps est un facteur crucial dans la réussite de votre événement, c'est pourquoi nous nous engageons à respecter les échéances convenues, vous assurant ainsi un déroulement fluide et sans stress. Avec notre expertise, chaque aspect de votre événement est pris en charge avec minutie, pour garantir un résultat à la hauteur de vos attentes et une expérience mémorable pour tous les participants.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default evenementiel