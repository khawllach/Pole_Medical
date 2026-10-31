import React from "react";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#003338] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center px-10 py-10">
          <div className="flex flex-col  text-white/50  ">
            <img src={logo} alt="" className="w-40 " />
            <span className="max-w-[270px]  text-sm">
              Importation et distribution de matériel médical en Algérie. Votre
              partenaire de confiance pour l'équipement des cliniques, hôpitaux
              et laboratoires.
            </span>
          </div>
          <div className="flex flex-col text-white ">
            <h1 className="font-bold">Liens rapides</h1>
            <div className="flex flex-col gap-2 text-sm py-2 text-white/50">
              <span className="hover:text-white cursor-pointer">Accueil</span>
              <span className="hover:text-white cursor-pointer">Cataloque</span>
              <span className="hover:text-white cursor-pointer">A propos</span>
              <span className="hover:text-white cursor-pointer">Contact</span>
              <span className="hover:text-white cursor-pointer">
                Demander un devis
              </span>
            </div>
          </div>
          <div className="flex flex-col text-white ">
            <h1 className="font-bold">Catégories</h1>
            <div className="flex flex-col gap-2 text-sm py-2 text-white/50">
              <span className="hover:text-white cursor-pointer">
                Radiologie interventionnelle
              </span>
              <span className="hover:text-white cursor-pointer">
                Radiologie générale
              </span>
              <span className="hover:text-white cursor-pointer">
                Laboratoire
              </span>
              <span className="hover:text-white cursor-pointer">
                Néonatologie
              </span>
              <span className="hover:text-white cursor-pointer">
                Lits médicaux
              </span>
            </div>
          </div>
          <div className="flex flex-col text-white ">
            <h1 className="font-bold">Contact</h1>
            <div className="flex flex-col items-start justify-center gap-2 text-sm py-2 text-white/50">
              <div className="flex gap-3 items-center justify-center">
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
                  className="lucide lucide-map-pin w-4 h-4 text-[#E35F0D] mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="hover:text-white cursor-pointer">
                  Rue Bouchbouk Delly Brahim -ALGER- Algérie
                </span>
              </div>
              <div className="flex gap-3 items-center justify-center">
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
                  className="lucide lucide-phone w-4 h-4 text-[#E35F0D] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span className="hover:text-white cursor-pointer">
                  +213 550 46 09 99/+213 542 407 565/+213 664 161 739
                </span>
              </div>
              <div className="flex gap-3 items-center justify-center">
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
                  className="lucide lucide-mail w-4 h-4 text-[#E35F0D] shrink-0"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <span className="hover:text-white cursor-pointer">
                  contact@polemedicalhealthcare.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white/15 my-8" />
        <div className=" flex flex-col text-center pb-15 text-white/50">
          <span className="text-sm">
            © 2026 Pole Medical Healthcare. Tous droits réservés.
          </span>
          <span className="text-xs">
            Site réalisé par <b className="text-amber-600"> FRET.DIRECT</b>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
