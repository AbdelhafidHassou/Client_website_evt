/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <>
            <section className="bg-center bg-cover csw-img mb-20">
                <div>
                    <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px] service">
                        <h1 className=' text-3xl md:text-6xl font-extrabold text-center text-[#F4F2EF]'>Création de Sites Web </h1>
                    </div>
                </div>
            </section>
            <div className="w-full py-16 px-6">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <Image
                        src="/csw.jpg"
                        alt="Création de site web"
                        className="rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
                        width={550}
                        height={400}
                    />
                    <div className="flex flex-col justify-center text-gray-800">
                        <p className="font-medium leading-relaxed text-lg">
                            Notre équipe de concepteurs web vous aide à transformer vos idées en une présence en ligne captivante et fonctionnelle. Design remarquable et navigation fluide, chaque détail est soigneusement pensé pour refléter l'essence unique de votre entreprise.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            En mettant l'accent sur une expérience utilisateur exceptionnelle, nous veillons à ce que vos visiteurs soient non seulement impressionnés par l'esthétique de votre site, mais qu'ils puissent aussi naviguer facilement et trouver ce qu'ils recherchent.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            En plus de la création visuelle, nous gérons également tous les aspects techniques de votre projet web. Nous nous occupons de l'hébergement de votre site, de l'enregistrement de votre nom de domaine, et de la mise en place de votre messagerie professionnelle. Vous pouvez ainsi vous concentrer pleinement sur votre activité, tandis que nous prenons en charge tout ce qu'il faut pour que votre site soit prêt à accueillir vos clients en ligne.
                        </p>
                        <p className="font-medium leading-relaxed text-lg mt-4">
                            Notre objectif est de vous fournir une solution complète qui soutient votre croissance et reflète la qualité de votre entreprise.
                        </p>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-20'>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Essentiel</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Jusqu'à 5 pages</p>
                            <p className='py-2 border-b mx-8 mt-8'>Hébergement et nom de domaine (Offerts la première année)</p>
                            <p className='py-2 border-b mx-8 mt-8'>Design personnalisé et responsive</p>
                            <p className='py-2 border-b mx-8 mt-8'>Intégration de formulaire de contact</p>
                            <p className='py-2 border-b mx-8 mt-8'>CMS : WordPress</p>
                            <p className='py-2 border-b mx-8 mt-8'>Assistance et support</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Pro</h1>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Jusqu'à 10 pages</p>
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
                        <h1 className='text-3xl font-bold text-[#000000] text-center py-8'>Pack Premium</h1>
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
            </div >
        </>
    )
}

export default page