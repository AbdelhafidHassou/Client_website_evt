import React from 'react'
import Image from 'next/image'

function projets() {
  return (
    <div className="text-gray-800">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Aston Martin Casablanca – Stand / Photomur
        </h1>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-4xl">
          <Image
            src="/ASTON40.png"
            alt="Stand Aston Martin Casablanca"
            layout="intrinsic"
            objectFit="contain"
            width={1000}
            height={600}
            className="sm:rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Le Défi</h2>
          <p className="text-lg leading-relaxed">
            Créer un stand qui reflète le luxe et l'élégance des véhicules Aston Martin, et qui respecte minutieusement la charte universelle de la marque, incluant les couleurs, les polices et les éléments visuels tout en offrant une expérience visuelle aux visiteurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative h-64">
            <Image
              src="/ASTON46.png" 
              alt="Détail du stand"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="/ASTON31.png" 
              alt="Éclairage du stand"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Notre Réponse</h2>
          <p className="text-lg leading-relaxed">
            Nous avons développé un stand simple et élégant qui allie design moderne et respect précis de la charte de la marque. Grâce à des choix d'éclairage et de présentation réfléchis, chaque véhicule est mis en valeur tout en restant fidèle à l’identité visuelle d’Aston Martin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64">
            <Image
              src="/ASTON.jpg"
              alt="Stand complet"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="/ASTON12.png"
              alt="Stand complet"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="space-y-4 mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Le Résultat</h2>
          <p className="text-lg leading-relaxed">
            Le stand a attiré l’attention et suscité l’admiration lors des expositions, offrant une présentation captivante qui a mis en valeur l’exclusivité des véhicules Aston Martin. Cette réalisation a renforcé notre expertise en conception de stands sur mesure et a démontré notre capacité à créer des expériences mémorables pour des marques prestigieuses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default projets