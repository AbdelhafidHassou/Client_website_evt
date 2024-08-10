/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <section className="bg-center bg-cover seo-img mb-20">
    <div className="w-full h-full bg-black/50">
        <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Optimisation de référencement SEO</h1>
        </div>
    </div>
    </section>
    <div className='w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16'>
            <Image src="/SEO.jpg" alt="seo" className='my-4 mx-auto order-2 rounded-3xl' width={350} height={350}/>
            <div className='flex flex-col justify-center'>
                <p className='font-medium leading-loose text-lg'>
                    Notre service de référencement SEO vous garantit une visibilité accrue sur le moteur de recherche Google. Nous ciblons les meilleures pratiques SEO telles que l’analyse des mots-clés, l’optimisation des balises méta, la création de contenu optimisé et la gestion des liens pour augmenter votre classement sur Google, attirer un trafic qualifié et positionner votre entreprise en tête des résultats de recherche pertinents.
                </p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-20'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Essentiel</h1>
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
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Pro</h1>
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