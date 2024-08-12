/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <>
            <section className="bg-center bg-cover mark-img mb-20">
                <div >
                    <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
                        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Marketing des réseaux sociaux</h1>
                    </div>
                </div>
            </section>

            <div className="w-full py-16 px-6 ">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <Image
                        src="/social_media.jpg"
                        alt="social media"
                        className="rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
                        width={550}
                        height={400}
                    />
                    <div className="flex flex-col justify-center text-gray-800">
                        <p className="font-medium leading-relaxed text-lg">
                            Découvrez la puissance du marketing digital avec notre agence, qui vous accompagne à chaque étape pour maximiser votre présence en ligne et atteindre vos objectifs commerciaux. Nos experts élaborent des stratégies de marketing digital sur mesure, en prenant en compte les spécificités de votre entreprise, de votre secteur d'activité et de votre public cible. Nous ne nous contentons pas de créer des campagnes; nous les concevons de manière stratégique pour qu'elles captent l'attention de votre audience, renforcent votre image de marque, et génèrent des résultats mesurables.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Nous assurons également le Community management, en veillant à ce que votre présence sur les réseaux sociaux soit dynamique, engageante, et alignée avec les attentes de votre communauté. Cela inclut la gestion des interactions avec vos abonnés, la réponse aux commentaires, et l'animation de votre audience pour maintenir un lien fort et authentique avec elle.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            En parallèle, notre équipe se spécialise dans la création de contenu captivant, qu'il s'agisse de textes, d'images, de vidéos ou de tout autre format susceptible de résonner avec votre public. Ce contenu est conçu pour raconter l'histoire de votre marque, mettre en avant vos valeurs, et stimuler l'engagement sur toutes les plateformes numériques. Notre objectif est de vous aider à forger des connexions authentiques avec votre audience, à transformer ces interactions en relations durables, et à augmenter votre notoriété en ligne de manière significative.
                        </p>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-20'>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Starter Pack</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>2 Plateformes : Facebook, Instagram</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création et partage de 2 posts, 3 stories par semaine</p>
                            <p className='py-2 border-b mx-8 mt-8'>Community management</p>
                            <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Pro</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>2 Plateformes : Facebook, Instagram</p>
                            <p className='py-2 border-b mx-8 mt-8'>Définition de la stratégie éditoriale</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création et partage de 3 posts, 5 stories par semaine</p>
                            <p className='py-2 border-b mx-8 mt-8'>Community management</p>
                            <p className='py-2 border-b mx-8 mt-8'>1 Campagne publicitaire ciblée par mois (Budget de sponsorisation inclus)</p>
                            <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Premium</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>2 Plateformes : Facebook, Instagram</p>
                            <p className='py-2 border-b mx-8 mt-8'>Définition de la stratégie éditoriale</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création et partage de 3 posts, 5 stories par semaine</p>
                            <p className='py-2 border-b mx-8 mt-8'>Community management</p>
                            <p className='py-2 border-b mx-8 mt-8'>2 Campagnes publicitaires ciblées par mois (Budget de sponsorisation inclus)</p>
                            <p className='py-2 border-b mx-8 mt-8'>Analyse de résultats de campagnes publicitaires</p>
                            <p className='py-2 border-b mx-8 mt-8'>Veille concurrentielle réseaux sociaux</p>
                            <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel avec analyse concurrentielle</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page