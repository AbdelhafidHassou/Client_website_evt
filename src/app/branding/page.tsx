/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <section className="bg-center bg-cover brand-img mb-20">
        <div className="w-full h-full bg-black/50">
            <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
                <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Branding</h1>
            </div>
        </div>
    </section>
    <div className='w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16'>
            <Image src="/Branding.jpg" alt="branding" className='my-4 mx-auto order-2 rounded-3xl' width={350} height={350}/>
            <div className='flex flex-col justify-center'>
                <p className='font-medium leading-loose text-lg'>
                    L’identité de votre marque est notre passion. Nous travaillons avec vous pour créer une image de marque distincte et mémorable. Du développement de logos à l’établissement de messages cohérents, nous faisons en sorte que chaque interaction renforce la personnalité unique de votre entreprise, établissant ainsi une connexion durable avec votre public cible.
                </p>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-20'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Branding</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Audit de l’activité et éléments existants</p>
                    <p className='py-2 border-b mx-8 mt-8'>Définition de la personnalité de la marque et des messages clés/ton à communiquer</p>
                    <p className='py-2 border-b mx-8 mt-8'>Conception de logo (3 Propositions, 3 déclinaisons)</p>
                    <p className='py-2 border-b mx-8 mt-8'>Cession des droits</p>
                    <p className='py-2 border-b mx-8 mt-8'>Elaboration de la charte graphique (Palette de couleurs, Typographies…)</p>
                    <p className='py-2 border-b mx-8 mt-8'>Développement de modèles pour les Cartes de visite, en-têtes</p>
                    <p className='py-2 border-b mx-8 mt-8'>Création de supports de communication interne et externe (Brochures, Dépliants, Affiches)</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-3xl font-bold text-[#213E60] text-center py-8'>Création de logo</h1>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>3 Propositions avec déclinaisons</p>
                    <p className='py-2 border-b mx-8 mt-8'>Développement de modèles pour les Cartes de visite, en-têtes</p>
                    <p className='py-2 border-b mx-8 mt-8'>Cession des droits</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page