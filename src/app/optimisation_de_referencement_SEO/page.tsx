/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <>
            <section className="bg-center bg-cover seo-img mb-20">
                <div>
                    <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
                        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Optimisation de référencement SEO</h1>
                    </div>
                </div>
            </section>
            <div className="w-full py-16 px-6">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <Image
                        src="/SEO.jpg"
                        alt="SEO"
                        className="rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
                        width={550}
                        height={400}
                    />
                    <div className="flex flex-col justify-center text-gray-800">
                        <p className="font-medium leading-relaxed text-lg">
                            Nous mettons votre entreprise au premier plan sur Google grâce à notre service de référencement SEO. En utilisant des stratégies avancées et personnalisées, nous travaillons à optimiser chaque aspect de votre site pour améliorer sa visibilité et son classement dans les résultats de recherche.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Grâce à une analyse approfondie des mots-clés, nous identifions ceux qui sont les plus recherchés par vos clients potentiels, afin de cibler les requêtes les plus pertinentes pour votre activité. Cette étape cruciale guide notre stratégie pour vous assurer d’attirer un trafic qualifié.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Nous poursuivons avec l’optimisation des balises méta de votre site, notamment les titres, descriptions et en-têtes, pour aligner ces éléments avec les standards de Google. Cela permet d’améliorer la pertinence et la visibilité de vos pages dans les résultats de recherche, tout en rendant votre contenu plus attractif pour les utilisateurs.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Vous bénéficierez ainsi d’une augmentation de la visibilité en ligne, d’un trafic qualifié accru, et d’un positionnement optimal sur Google, vous permettant ainsi d’attirer plus de visiteurs et de les convertir en clients fidèles.
                        </p>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-20'>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Essentiel</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Audit SEO technique, positionnement</p>
                            <p className='py-2 border-b mx-8 mt-8'>Optimisation du contenu SEO sur le site web</p>
                            <p className='py-2 border-b mx-8 mt-8'>5 pages optimisées</p>
                            <p className='py-2 border-b mx-8 mt-8'>Recherche de mots clés</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création de Backlinks de qualité</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création de 2 articles de Blog / Mois</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création/Optimisation du profil Google My Business</p>
                            <p className='py-2 border-b mx-8 mt-8'>Suivi de performance</p>
                            <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Pro</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Audit SEO technique, positionnement + Concurrentiel</p>
                            <p className='py-2 border-b mx-8 mt-8'>Optimisation du contenu SEO sur le site web</p>
                            <p className='py-2 border-b mx-8 mt-8'>Nombre illimité de pages optimisées</p>
                            <p className='py-2 border-b mx-8 mt-8'>Recherche de mots clés</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création de Backlinks de qualité</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création de 4 articles de Blog / Mois</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création/ Optimisation du profil Google My Business</p>
                            <p className='py-2 border-b mx-8 mt-8'>Suivi de performance</p>
                            <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page