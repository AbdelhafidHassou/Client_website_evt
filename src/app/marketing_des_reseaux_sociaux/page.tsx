/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <section className="bg-center bg-cover mark-img mb-20">
    <div className="w-full h-full bg-black/50">
        <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Marketing des réseaux sociaux</h1>
        </div>
    </div>
    </section>
    <div className='w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16'>
            <Image src="/social_media.jpg" alt="social media" className='my-4 mx-auto order-2 rounded-3xl' width={350} height={350}/>
            <div className='flex flex-col justify-center'>
                <p className='font-medium leading-loose text-lg'>
                    Plongez dans l’ère numérique avec nos stratégies de marketing digital.
                    De l’élaboration de campagnes digitales stratégiques au Community management et création de contenu, notre agence s’engage à forger des connexions significatives avec votre audience et stimuler l’engagement sur les réseaux sociaux.
                </p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-20'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Starter Pack</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 Plateformes : Facebook, Instagram</p>
                    <p className='py-2 border-b mx-8 mt-8'>Création et partage de 2 posts, 3 stories par semaine</p>
                    <p className='py-2 border-b mx-8 mt-8'>Community management</p>
                    <p className='py-2 border-b mx-8 mt-8'>Rapport mensuel</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Pro</h1>
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
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Premium</h1>
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