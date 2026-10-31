import React from "react";
import poleimg from "../assets/poleimg.png";
import poleimg2 from "../assets/poleimg2.jpg";

const Propos = () => {
  return (
    <section className=" " id="propos">
      <div className=" py-20 text-white bg-[#12555a]">
        <div className="flex flex-col gap-3 max-w-7xl mx-auto items-center justify-center ">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl max-w-200 text-center">
            À propos de Pole Medical Healthcare
          </h1>
          <span className="font-medium text-md text-gray-100/60 text-center">
            Votre partenaire de confiance pour l'équipement médical en Algérie
            depuis plus de 15 ans
          </span>
        </div>
      </div>
      <div className="bg-white w-full  px-5  my-15">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          <div className="p-3 bg-gray-400/15 w-fit h-fit flex items-center rounded-4xl">
            <img src={poleimg} alt="" className="w-130 h-80 rounded-2xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl py-3">Qui sommes-nous ?</h1>
            <div className="max-w-130 flex flex-col gap-7 text-md ">
              <p className="">
                Fondée à Batna,<b> Pole Medical Healthcareest</b> une entreprise
                algérienne spécialisée dans l'importation et la distribution de
                matériel médical, d'équipements de laboratoire et de
                consommables pour les professionnels de santé.
              </p>{" "}
              <p>
                {" "}
                Notre mission est de rendre accessible aux établissements de
                santé algériens un matériel médical de qualité internationale,
                certifié conformément aux normes CE et ISO. Nous sélectionnons
                rigoureusement nos partenaires parmi les fabricants les plus
                réputés au monde pour garantir fiabilité, performance et
                sécurité.{" "}
              </p>
              <p>
                Avec une équipe de conseillers techniques expérimentés et un
                réseau de service après-vente couvrant les 58 wilayas, nous
                accompagnons nos clients à chaque étape : du choix du matériel à
                l'installation, en passant par la formation des utilisateurs et
                la maintenance. Chez Pole Medical Healthcare, votre satisfaction
                est notre priorité.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/5 flex items-center justify-center  w-full    my-15 text-white ">
        <div className=" max-w-7xl mx-auto flex items-center justify-center py-20 px-10 ">
          <div className="relative">
            <img
              src={poleimg}
              alt=""
              className="bg-amber-400 w-6xl h-100 rounded-3xl shadow-2xl "
            />
            <div className="absolute  inset-0 bg-green-900/70 rounded-3xl "></div>

            <div className="flex flex-col justify-center items-start absolute left-10 right-10 top-10 bottom-10  max-w-xl gap-4">
              <h1 className="font-bold text-4xl">Notre engagement</h1>
              <span className=" text-md text-white/60    ">
                Nous nous engageons à fournir un matériel médical de la plus
                haute qualité, accompagné d'un service après-vente réactif et
                d'un accompagnement personnalisé pour chaque professionnel de
                santé en Algérie.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full  my-15">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="font-bold text-3xl">Nos valeurs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10">
            {/* card*/}
            <div className="flex flex-col justify-center items-center gap-5 py-6 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl ">
              {/* icon card*/}
              <div className="p-5  bg-green-500/5  rounded-full">
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
                  className="lucide lucide-heart w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>

              {/* desc card*/}
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="font-bold">Engagement</h1>
                <span className="text-center text-sm max-w-xs text-black/50">
                  Nous nous engageons à fournir un service irréprochable et un
                  accompagnement personnalisé à chaque client, quel que soit la
                  taille de son établissement.
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 py-6 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl ">
              {/* icon card*/}
              <div className="p-5  bg-green-500/5  rounded-full">
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
                  className="lucide lucide-target w-6 h-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>

              {/* desc card*/}
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="font-bold">Excellence</h1>
                <span className="text-center text-sm max-w-xs text-black/50">
                  Nous nous engageons à fournir un service irréprochable et un
                  accompagnement personnalisé à chaque client, quel que soit la
                  taille de son établissement.
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 py-6 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl ">
              {/* icon card*/}
              <div className="p-5  bg-green-500/5  rounded-full">
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
                  className="lucide lucide-award w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>

              {/* desc card*/}
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="font-bold">Proximité</h1>
                <span className="text-center text-sm max-w-xs text-black/50">
                  Nous nous engageons à fournir un service irréprochable et un
                  accompagnement personnalisé à chaque client, quel que soit la
                  taille de son établissement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/5 w-full flex items-center justify-center  py-20">
        <div className="flex flex-col  items-center justify-center gap-8 max-w-7xl">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-3xl">Notre showroom & entrepôt</h1>
            <span className="text-center text-black/50">
              Venez découvrir notre espace de présentation et notre stock
              permanent de matériel médical à Batna.
            </span>
          </div>
          <div className="relative mx-5 flex items-center justify-center ">
            <img
              src={poleimg2}
              alt=""
              className=" rounded-4xl w-200 h-70 md:w-250 md:h-120 hover:scale-100 "
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-4xl "></div>
            <div className="flex flex-col justify-center items-start absolute left-10 right-10  bottom-10  max-w-xl gap-4">
              <h1 className="font-bold text-2xl text-white">Notre showroom</h1>
              <span className=" text-sm md:text-md text-white/60    ">
                Notre entrepôt de plus de 1 000 m² abrite un stock permanent
                d'équipements médicaux. Un espace dédié vous permet de
                visualiser et tester les appareils avant tout achat,
                garantissant ainsi un choix éclairé pour votre établissement.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#12555a] w-full flex flex-col items-center justify-center py-20">
        <h1 className="font-bold text-3xl text-white pb-10">Chiffres clés</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-5 ">
          <div className="flex flex-col gap-2 px-8 md:px-20 py-6 bg-white/10 rounded-[1.5rem]  items-center justify-center text-center border border-white/20 text-white">
            <h1 className="text-3xl font-bold">15+</h1>
            <span className="text-sm">Années d'expérience</span>
          </div>
          <div className="flex flex-col gap-2 px-8 py-6 md:px-20 bg-white/10 rounded-[1.5rem]  items-center justify-center text-center border border-white/20 text-white">
            <h1 className="text-3xl font-bold">500+</h1>
            <span className="text-sm">Produits disponibles</span>
          </div>

          <div className="flex flex-col gap-2 px-12 py-6 md:px-20 bg-white/10 rounded-[1.5rem]  items-center justify-center text-center border border-white/20 text-white">
            <h1 className="text-3xl font-bold">200+</h1>
            <span className="text-sm">Clients satisfaits</span>
          </div>
          <div className="flex flex-col gap-2 px-8 py-6 md:px-20 bg-white/10 rounded-[1.5rem]  items-center justify-center text-center border border-white/20 text-white">
            <h1 className="text-3xl font-bold">48</h1>
            <span className="text-sm">Wilayas couvertes</span>
          </div>
        </div>
      </div>
      <div className="bg-white w-full   my-15">
        <div className="flex flex-col justify-center items-center gap-8 py-8 ">
          <div className="flex flex-col justify-center items-center ">
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
              className="lucide lucide-map-pin w-8 h-8 text-[#005359] mx-auto mb-4"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h1 className="font-bold text-3xl">Notre emplacement</h1>
            <span>Batna, Algérie</span>
          </div>
          <div className="rounded-4xl w-full h-64 sm:h-80 md:h-96 lg:h-[450px] lg:w-[1000px] px-10 overflow-hidden">
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
      </div>
    </section>
  );
};

export default Propos;
