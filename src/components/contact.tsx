import React from "react";

const contact = () => {
  return (
    <section className="" id="contact">
      <div className="px-10  py-20 text-white bg-[#12555a]">
        {/* header*/}
        <div className="flex flex-col gap-3 max-w-7xl mx-auto items-start justify-center ">
          <h1 className="font-bold text-3xl sm:text-4xl  max-w-200 ">
            Contactez-nous
          </h1>
          <span className="font-medium text-md text-gray-100/60">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </span>
        </div>
      </div>
      {/* main*/}
      <div className="px-10 max-w-7xl mx-auto py-10 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          {" "}
          {/* left info*/}
          <div className="flex flex-col justify-center items-start gap-5 bg-white  p-8 w-full lg:w-fit  rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="flex flex-row gap-2 items-start justify-center text-black ">
              <div className="rounded-xl p-3 bg-green-950/10 text-green-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-phone w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="font-medium text-sm">Téléphone</h3>
                <span className="text-sm text-black/50 max-w-xs">
                  +213 550 46 09 99/+213 542 407 565/+213 664 161 739
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-start justify-center text-black">
              <div className="rounded-xl p-3 bg-green-950/10 text-green-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="font-medium text-sm">Email</h3>
                <span className="text-sm text-black/50">
                  contact@polemedicalhealthcare.com
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center text-black ">
              <div className="rounded-xl p-3 bg-green-950/10 text-green-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-map-pin w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="font-medium text-sm">Adresse</h3>
                <span className="text-sm text-black/50">
                  Rue Mohamed Lamouri Batna CP 05000 Algerie
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center text-black ">
              <div className="rounded-xl p-3 bg-red-950/10 text-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-message-circle w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h3 className="font-medium text-sm">WhatsApp</h3>
                <span className="text-sm text-black/50 text-red-600">
                  Envoyer un message
                </span>
              </div>
            </div>
          </div>
          {/* right form */}
          <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] p-10">
            <form method="post" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="nom" className="text-xs font-bold">
                    Nom*
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full text-xs p-2 rounded-xl border border-black/10"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="prenom" className="text-xs font-bold">
                    Prénom*
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full text-xs p-2 rounded-xl border border-black/10"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs font-bold">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    className="w-full text-xs p-2 rounded-xl border border-black/10"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="tel" className="text-xs font-bold">
                    Téléphone
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full text-xs p-2 rounded-xl border border-black/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs font-bold">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full text-xs p-2 rounded-xl border border-black/10 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-2 px-6 py-2 rounded-xl bg-[#12555a] text-white text-sm font-medium hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-send w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-4xl w-full h-64 sm:h-80 md:h-96 lg:h-[450px] lg:w-[1000px]  overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103841.59706974764!2d6.17613045!3d35.57715995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f41195bf2f909f%3A0x6e22f706efc7d3c0!2sBatna!5e0!3m2!1sfr!2sdz!4v1791746086262!5m2!1sfr!2sdz"
            className="rounded-4xl w-full h-full border-0 "
            title="Localisation du pôle médical"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default contact;
