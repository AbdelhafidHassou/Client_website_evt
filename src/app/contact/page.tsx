"use client";

import React, { useRef, useState } from 'react';
import { toast, Toaster } from 'sonner';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    object: '',
    message: '',
    interests: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success('Email sent successfully!');
      formRef.current?.reset();
    } else {
      toast.error('Error sending email. Please try again later.');
    }
  };

  return (
    <section className="text-gray-700 body-font relative mt-20">
      <Toaster position="top-center" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Contactez-nous, on adore échanger!
          </h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="lg:w-2/3 md:w-3/4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Nom <span className='text-[#d90429]'>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  E-mail <span className='text-[#d90429]'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="object" className="leading-7 text-sm text-gray-600">
                  Besoins/Objectifs <span className='text-[#d90429]'>*</span>
                </label>
                <input
                  type="text"
                  id="object"
                  name="object"
                  value={formData.object}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-300 focus:border-[#213E60] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full flex flex-wrap gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="web"
                  value="Sites Web"
                  checked={formData.interests.includes('Sites Web')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor="web" className="ml-2 text-sm">Sites Web</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="social"
                  value="Réseaux Sociaux"
                  checked={formData.interests.includes('Réseaux Sociaux')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor="social" className="ml-2 text-sm">Réseaux Sociaux</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="branding"
                  value="Branding"
                  checked={formData.interests.includes('Branding')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor="branding" className="ml-2 text-sm">Branding</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seo"
                  value="SEO"
                  checked={formData.interests.includes('SEO')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor="seo" className="ml-2 text-sm">SEO</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="event"
                  value="Événementiel"
                  checked={formData.interests.includes('Événementiel')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor="event" className="ml-2 text-sm">Événementiel</label>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message <span className='text-[#d90429]'>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-300 focus:border-[#213E60] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="submit" className="flex mx-auto text-white bg-black border-0 py-4 px-8 focus:outline-none hover:bg-[#feab73] rounded-md text-lg duration-300">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

  );
};

export default Contact;
