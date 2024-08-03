/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function page() {
  return (
    <>
    <section className="bg-center bg-cover csw-img mb-20">
    <div className="w-full h-full bg-black/50">
        <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Création de Sites Web </h1>
        </div>
    </div>
    </section>
    <div className='w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16'>
            <img src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='my-4 mx-auto order-2 rounded-3xl'/>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-bold text-[#213E60] pb-8'>Révélez l'Essence de Votre Entreprise en Ligne</h1>
                <p className='font-medium leading-loose text-lg'>
                    Notre équipe de concepteurs web vous aide à transformer vos idées en une présence en ligne captivante et fonctionnelle. Design remarquable et navigation fluide, chaque détail est soigneusement pensé pour refléter l’essence unique de votre entreprise et offrir une expérience utilisateur exceptionnelle. 
                    Nous prenons en charge le volet technique tel que la réservation de votre hébergement web et votre nom de domaine, ainsi que votre messagerie professionnelle.
                </p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-20'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Essentiel</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Jusqu’à 5 pages</p>
                    <p className='py-2 border-b mx-8 mt-8'>Hébergement et nom de domaine (Offerts la première année)</p>
                    <p className='py-2 border-b mx-8 mt-8'>Design personnalisé et responsive</p>
                    <p className='py-2 border-b mx-8 mt-8'>Intégration de formulaire de contact</p>
                    <p className='py-2 border-b mx-8 mt-8'>CMS : WordPress</p>
                    <p className='py-2 border-b mx-8 mt-8'>Assistance et support</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Pro</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Jusqu’à 10 pages</p>
                    <p className='py-2 border-b mx-8 mt-8'>Hébergement et nom de domaine (Offerts la première année)</p>
                    <p className='py-2 border-b mx-8 mt-8'>Design personnalisé et responsive</p>
                    <p className='py-2 border-b mx-8 mt-8'>Intégration de formulaire de contact</p>
                    <p className='py-2 border-b mx-8 mt-8'>Intégration de plugins de réseaux sociaux et de partage</p>
                    <p className='py-2 border-b mx-8 mt-8'>Carte Google Maps</p>
                    <p className='py-2 border-b mx-8 mt-8'>Codage + CMS WordPress</p>
                    <p className='py-2 border-b mx-8 mt-8'>Assistance et support</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Pack Premium</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Pages illimitées avec fonctionnalités avancées personnalisées</p>
                    <p className='py-2 border-b mx-8 mt-8'>Hébergement et nom de domaine (Offerts la première année)</p>
                    <p className='py-2 border-b mx-8 mt-8'>Design sur mesure</p>
                    <p className='py-2 border-b mx-8 mt-8'>Intégration de plugins de réseaux sociaux et de partage</p>
                    <p className='py-2 border-b mx-8 mt-8'>Intégration de fonctionnalités e-commerce pour la vente en ligne</p>
                    <p className='py-2 border-b mx-8 mt-8'>Carte Google Maps</p>
                    <p className='py-2 border-b mx-8 mt-8'>Codage</p>
                    <p className='py-2 border-b mx-8 mt-8'>Assistance et support</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page