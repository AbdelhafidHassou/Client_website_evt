/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <>
            <section className="bg-center bg-cover brand-img mb-20">
                <div>
                    <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px] service">
                        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Branding</h1>
                    </div>
                </div>
            </section>
            <div className="w-full py-16 px-6">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <Image
                        src="/Branding.jpg"
                        alt="Branding"
                        className="rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
                        width={550}
                        height={400}
                    />
                    <div className="flex flex-col justify-center text-gray-800">
                        <p className="font-medium leading-relaxed text-lg">
                            Chez Luna Creative Studio, l'identité de votre marque est bien plus qu'un simple logo; c'est l'essence même de votre entreprise. Nous sommes passionnés par le développement de marques qui se distinguent et laissent une impression durable. Pour cela, nous collaborons étroitement avec vous pour comprendre vos valeurs, votre mission, et ce qui rend votre entreprise unique.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Nous commençons par créer un logo qui non seulement attire l'attention mais qui incarne également l'esprit de votre marque. Chaque élément du design est soigneusement réfléchi pour qu'il soit non seulement esthétique, mais aussi porteur de sens. Au-delà du logo, nous élaborons des messages cohérents qui résonnent avec votre public cible. Qu'il s'agisse de slogans, de textes de présentation ou de la tonalité générale de votre communication, nous veillons à ce que chaque mot reflète la personnalité de votre entreprise.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Nous développons également des guides de style qui assurent la cohérence de votre image de marque sur tous les supports et points de contact. Que ce soit sur votre site web, vos réseaux sociaux, vos brochures, ou vos présentations, chaque interaction renforce la perception positive et unique de votre marque.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Notre objectif est de créer une identité de marque qui établit aussi une connexion émotionnelle durable avec votre audience. En travaillant avec nous, vous vous assurez que votre entreprise reste gravée dans l'esprit de vos clients, tout en bâtissant une réputation solide et mémorable dans votre secteur.
                        </p>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-20'>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Branding</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Audit de l'activité et éléments existants</p>
                            <p className='py-2 border-b mx-8 mt-8'>Définition de la personnalité de la marque et des messages clés/ton à communiquer</p>
                            <p className='py-2 border-b mx-8 mt-8'>Conception de logo (3 Propositions, 3 déclinaisons)</p>
                            <p className='py-2 border-b mx-8 mt-8'>Cession des droits</p>
                            <p className='py-2 border-b mx-8 mt-8'>Elaboration de la charte graphique (Palette de couleurs, Typographies…)</p>
                            <p className='py-2 border-b mx-8 mt-8'>Développement de modèles pour les Cartes de visite, en-têtes</p>
                            <p className='py-2 border-b mx-8 mt-8'>Création de supports de communication interne et externe (Brochures, Dépliants, Affiches)</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Création de logo</h1>
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