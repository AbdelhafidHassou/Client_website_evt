import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Votre Partenaire pour des Stands Uniques et Impactants</h1>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/Image_A1.jpg" 
              alt="Image principale"
              width={1000} 
              height={600} 
              layout="intrinsic" 
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-lg leading-relaxed  mb-12">
          <p>
            Chez L'Atelier, nous sommes passionnés par la création d'espaces qui captivent et inspirent. Nous transformons vos idées en réalité pour tous vos événements, salons et expositions.
          </p>
        </div>

        <div className="text-lg leading-relaxed  mb-12">
          <p className="mb-4 font-semibold">Notre Expertise</p>
          <p>
            Notre équipe de designers et d'artisans talentueux met tout en œuvre pour concevoir des stands qui reflètent parfaitement votre marque. Que vous ayez besoin d’un stand, d’un kiosque élégant ou d’une installation entièrement sur mesure, nous nous engageons à offrir des solutions innovantes et de haute qualité.
          </p>

          <p className="mb-4 mt-8 font-semibold">Nos Services</p>
          <ul className="list-disc list-inside">
            <li>Conception Personnalisée : Nous collaborons étroitement avec vous pour concevoir un stand qui répond à vos besoins spécifiques et reflète votre identité visuelle.</li>
            <li>Fabrication sur Mesure : Chaque projet est réalisé avec des matériaux de qualité, garantissant durabilité et esthétique.</li>
            <li>Installation et Déploiement : Nos équipes assurent une installation rapide et professionnelle, pour un rendu impeccable lors de vos événements.</li>
            <li>Service Après-Vente : Nous restons à votre écoute pour tout ajustement ou entretien nécessaire après la livraison.</li>
          </ul>

          <p className="mb-4 mt-8 font-semibold">Pourquoi confier vos projets à l'Atelier ?</p>
          <ul className="list-disc list-inside">
            <li>Créativité et Innovation : Nous repoussons les limites pour vous offrir des designs originaux.</li>
            <li>Qualité Supérieure : Nos stands sont conçus pour être à la fois élégants et robustes.</li>
            <li>Accompagnement Personnalisé : De la conception à la réalisation, nous vous accompagnons à chaque étape pour garantir votre satisfaction totale.</li>
            <li>Respect des Délais : Nous nous engageons à livrer vos projets dans les délais impartis, sans compromettre la qualité.</li>
          </ul>

          <p className="mt-8">
            Contactez-Nous et discutez de votre projet avec nous dès aujourd'hui !
          </p>
        </div>
      </div>
    </>
  )
}

export default page