"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
    e.preventDefault();

    emailjs.sendForm('service_t2cd3gy', 'template_8rb23c9', form.current, {
        publicKey: 'YphWBJP0deA3GTjY0',
      }).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <>
    <div>
    <section className="bg-center bg-cover contact-img mb-20">
    <div className="w-full h-full bg-black/50">
        <div className="max-w-screen-xl m-auto justify-center items-center flex px-4 py-8 h-[440px]">
        </div>
    </div>
    </section>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Contactez les Experts en Marketing Digital d'ELEVATE Aujourd'hui !
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Contactez ELEVATE pour propulser votre entreprise dans l'ère numérique. Nos experts en marketing digital sont prêts à élaborer des stratégies sur mesure qui feront décoller votre présence en ligne. Ensemble, élevons vos ambitions au niveau supérieur.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Adresse mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="object"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Objet
                  </label>
                  <input
                    type="text"
                    id="object"
                    name="object"
                    required
                    className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full rounded border border-gray-300 focus:border-[#213E60] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#213E60] border-0 py-4 px-16 focus:outline-none hover:bg-[#001F3F] rounded-md text-lg duration-300">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact