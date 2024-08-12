import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-8 space-y-8 mt-20">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Votre Partenaire pour des Stands Uniques et Impactants
        </h1>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/Image_A1.jpg" 
              alt="Image principale"
              width={1000} 
              height={600} 
              layout="responsive" 
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-lg leading-relaxed mb-12">
          <p className="mb-4">
            Chez L'Atelier, nous sommes passionnés par la création d'espaces qui captivent et inspirent. Nous transformons vos idées en réalité pour tous vos événements, salons et expositions.
          </p>
        </div>

        <div className="text-lg leading-relaxed mb-12">
          <p className="mb-4 font-semibold text-gray-800">Notre Expertise</p>
          <p className="mb-4">
            Notre équipe de designers et d'artisans talentueux met tout en œuvre pour concevoir des stands qui reflètent parfaitement votre marque. Que vous ayez besoin d’un stand, d’un kiosque élégant ou d’une installation entièrement sur mesure, nous nous engageons à offrir des solutions innovantes et de haute qualité.
          </p>

          <p className="mb-4 font-semibold text-gray-800">Nos Services</p>
          <ul className="list-disc list-inside mb-4">
            <li>Conception Personnalisée : Nous collaborons étroitement avec vous pour concevoir un stand qui répond à vos besoins spécifiques et reflète votre identité visuelle.</li>
            <li>Fabrication sur Mesure : Chaque projet est réalisé avec des matériaux de qualité, garantissant durabilité et esthétique.</li>
            <li>Installation et Déploiement : Nos équipes assurent une installation rapide et professionnelle, pour un rendu impeccable lors de vos événements.</li>
            <li>Service Après-Vente : Nous restons à votre écoute pour tout ajustement ou entretien nécessaire après la livraison.</li>
          </ul>

          <p className="mb-4 font-semibold text-gray-800">Pourquoi confier vos projets à l'Atelier ?</p>
          <ul className="list-disc list-inside mb-8">
            <li>Créativité et Innovation : Nous repoussons les limites pour vous offrir des designs originaux.</li>
            <li>Qualité Supérieure : Nos stands sont conçus pour être à la fois élégants et robustes.</li>
            <li>Accompagnement Personnalisé : De la conception à la réalisation, nous vous accompagnons à chaque étape pour garantir votre satisfaction totale.</li>
            <li>Respect des Délais : Nous nous engageons à livrer vos projets dans les délais impartis, sans compromettre la qualité.</li>
          </ul>

          <p>
            Contactez-Nous et discutez de votre projet avec nous dès aujourd'hui !
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
