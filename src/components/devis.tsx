import React, { useState } from "react";
import { Link } from "react-router-dom";

const wilayas = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum El Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arréridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
  "El M'Ghair",
  "El Meniaa",
  "Ouled Djellal",
  "Bordj Badji Mokhtar",
  "Béni Abbès",
  "Timimoun",
  "Touggourt",
  "Djanet",
  "In Salah",
  "In Guezzam",
];
const listdevis = [
  { name: "Concentrateur d’oxygène 10 L KSOC-10", gte: "1" },
  { name: "Concentrateur d’oxygène 10 L KSOC-10", gte: "1" },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwsnxaJD4NYTn4ezY-cr_lA8FMB-mZKb5Bwn0Egqcnrj00Kdodc4CywJlyyLgr9gl99Qg/exec";

const devis = () => {
  const [devislist, setdevislist] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(data as unknown as Record<string, string>),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="demande_de_devis">
      <div className="px-10  py-20 text-white bg-[#12555a]">
        {/* header*/}
        <div className="flex flex-col gap-3 max-w-7xl mx-auto items-start justify-center ">
          <h1 className="font-bold text-3xl sm:text-4xl  max-w-200 ">
            Demande de devis
          </h1>
          <span className="font-medium text-md text-gray-100/60">
            Composez votre liste et recevez une proposition personnalisée
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto my-10 px-10">
        {" "}
        {/* left info*/}
        <div className="flex-2 flex flex-col h-fit  gap-20 bg-white pb-30  p-8   rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <div className="flex items-start justify-start gap-2">
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
              className="lucide lucide-shopping-cart w-5 h-5 text-[#005359] roun"
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <h1 className="font-medium text-md">Produits sélectionnés (0)</h1>
          </div>
          {!devislist && (
            <div className="flex flex-col justify-center items-center gap-5 ">
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <div className="p-3 flex justify-center items-center bg-green-900/10 text-green-900 rounded-xl">
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
                    className="lucide lucide-shopping-cart w-7 h-7 text-slate-400"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </div>
                <h2 className="font-bold text-sm">Aucun produit sélectionné</h2>
                <span className="text-black/50 text-xs">
                  Parcourez notre catalogue et ajoutez des produits à votre
                  demande de devis
                </span>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/cataloque">
                  <button
                    type="submit"
                    className="self-start flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-[#12555a] text-white text-sm font-medium hover:opacity-90"
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
                      className="lucide lucide-arrow-left w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    Voir le catalogue
                  </button>{" "}
                </Link>
              </div>
            </div>
          )}
          {devislist && (
            <div className="flex flex-col justify-center items-center gap-5 ">
              {listdevis.map((listdevis) => (
                <div className="flex justify-between items-center w-full border border-gray-400 py-3 px-5 rounded-xl bg-gray-100 shadow-lg ">
                  <div className="flex flex-col gap-2 items-start justify-center">
                    <h2 className="font-medium text-sm">{listdevis.name}</h2>
                    <div className="px-2 py-1 text-sm bg-green-800/20 rounded-2xl">
                      Qte:{listdevis.gte}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex justify-center items-center px-4 py-2 bg-gray-100 border border-gray-300 w-fit rounded-2xl">
                        -
                      </div>
                      <span>{listdevis.gte}</span>
                      <div className="flex justify-center items-center px-3.5 py-2 bg-gray-100 border border-gray-300 w-fit rounded-2xl">
                        +
                      </div>
                    </div>
                    <div>
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
                        className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 text-red-600"
                        aria-hidden="true"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* right form */}
        <div className="flex-1  flex flex-col gap-8 bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] px-10 py-7">
          <h1 className="font-medium text-md">Vos informations</h1>

          <form
            method="post"
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="nom" className="text-xs font-bold">
                  Nom de l'etablissement*
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Hopital, Clinique, Laboratoire..."
                  className="w-full text-xs p-2 rounded-xl border border-black/10"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="prenom" className="text-xs font-bold">
                  Nom complet*
                </label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Dr. Mohamed Amrani"
                  className="w-full text-xs p-2 rounded-xl border border-black/10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="tel" className="text-xs font-bold">
                  Téléphone*
                </label>
                <input
                  id="tel"
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full text-xs p-2 rounded-xl border border-black/10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="tel" className="text-xs font-bold">
                  Wilaya*
                </label>
                <input
                  id="wilaya"
                  list="wilaya_list"
                  placeholder="Selectionnez Votre Wilaya"
                  className="w-full text-xs p-2 rounded-xl border border-black/10"
                />
                <datalist id="wilaya_list">
                  {wilayas.map((w) => (
                    <option value={w} key={w} />
                  ))}
                </datalist>
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
            <hr className="text-green-600/40 " />

            <div className="flex justify-center items-center ">
              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start flex items-center justify-center gap-2 px-6 py-2 rounded-xl w-full bg-[#6a9ea1] text-white text-sm font-medium hover:opacity-90"
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
                  className="lucide lucide-shopping-cart w-4 h-4"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Envoyer la demande de devis
              </button>
            </div>
            {status === "success" && (
              <p className="text-green-600 text-sm">Message envoyé, merci !</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                Une erreur est survenue, réessayez.
              </p>
            )}  
          </form>
        </div>
      </div>
    </section>
  );
};

export default devis;
