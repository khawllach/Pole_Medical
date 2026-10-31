import React from "react";
import { Link } from "react-router-dom";
import prod from "../assets/prod.png";
import accessoire_medicaux from "../assets/Accessoires Medicaux.jpg";

const products = [
  {
    image: accessoire_medicaux,
    nameprod: "Lunettes de protection RX",
    categorie: "Radioprotection",
    equep: "Équipement",
  },
  {
    image: accessoire_medicaux,
    nameprod: "Lunettes de protection RX",
    categorie: "Radioprotection",
    equep: "",
  },
  {
    image: accessoire_medicaux,
    nameprod: "Lunettes de protection RX",
    categorie: "Radioprotection",
    equep: "Équipement",
  },
];

const detail_page_prod = () => {
  return (
    <section className="bg-slate-50 min-h-screen" id="detail_page_prod">
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto flex flex-col gap-5 items-start justify-center text-black/50 text-sm md:text-lg">
        {/* links*/}
        <div className="flex flex-wrap items-center justify-start gap-1">
          <Link
            to="/cataloque"
            className="flex justify-center items-center gap-2 hover:text-green-800"
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
            Cataloque
          </Link>

          <Link
            to="/cataloque"
            className="flex justify-center items-center gap-2 hover:text-green-800"
          >
            / Monitoring
          </Link>
          <span>/ Moniteur de surveillance 3 paramètres CMS5100</span>
        </div>
        {/* main*/}
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="p-2">
              <img src={prod} alt="" className="rounded-2xl" />
            </div>
            {/* contentof prod*/}
            <div className="flex flex-col ">
              <div className="flex flex-wrap gap-4 py-5 text-xs">
                <span className="py-1 px-4 bg-green-900/8 rounded-2xl text-green-900">
                  Équipement
                </span>
                <span className="py-1 px-4 bg-white rounded-2xl border border-green-800 text-green-900">
                  Monitoring
                </span>
              </div>
              <div className="flex flex-col gap-4 ">
                <h1 className="font-bold text-4xl text-black">
                  Moniteur de surveillance 3 paramètres CMS5100
                </h1>
                <span className="text-lg">
                  Moniteur de surveillance 3 paramètres CMS5100 disponible sur
                  demande de devis.
                </span>
              </div>
              <hr className="my-8" />
              <div className="flex flex-wrap gap-5 py-5">
                <Link
                  to="/demande_de_devis"
                  className="flex items-center justify-center py-3 px-13 bg-green-900 rounded-2xl  border border-white   hover:border-white/20  text-white "
                >
                  {" "}
                  <button className="flex gap-2 items-center justify-center  text-sm  hover:text-white font-medium cursor-pointer">
                    Ajouter au devis{" "}
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
                      className="lucide lucide-arrow-right w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
                <Link
                  to="/demande_de_devis"
                  className="flex items-center justify-center py-2 px-4 bg-white rounded-2xl  border border-white  hover:border hover:border-white/20 hover:bg-[#005359] hover:text-white text-green-900"
                >
                  {" "}
                  <button className="flex gap-2 items-center justify-center text-sm  hover:text-white font-medium cursor-pointer">
                    demander un devis
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
                      className="lucide lucide-chevron-right w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </Link>
                <a
                  href=""
                  className="flex items-center justify-center py-2 px-4 bg-white rounded-2xl border border-green-600 hover:border hover:border-white/20 hover:bg-[#005359] hover:text-white text-green-600"
                >
                  {" "}
                  <button className="flex gap-2 items-center justify-center text-sm font-medium cursor-pointer">
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
                      className="lucide lucide-message-circle w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* produit similaire*/}
          <div className=" grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 xl:max-w-[900px] gap-4  py-3">
            {products.map((prod) => (
              <div className="bg-white hover:shadow-2xl py-7 relative border border-black/15 overflow-hidden w-full rounded-2xl group">
                <img
                  src={prod.image}
                  alt=""
                  className="w-fit h-fit   object-cover  group-hover:scale-110 "
                />
                <div className="px-3 bg-green-400/15 absolute top-10 left-3 flex justify-center items-center  bg-gray-300/50 rounded-full w-fit">
                  <span className="text-[13px] text-green-700  ">
                    {prod.equep}{" "}
                  </span>
                </div>
                <div
                  className="flex flex-col py-2 gap-2 pl-6  text-black
                            "
                >
                  <span className="text-xs text-green-700">
                    {prod.categorie}
                  </span>
                  <h3 className=" font-medium text-sm ">{prod.nameprod}</h3>
                  <span className="font-light text-xs">
                    {prod.nameprod} disponible sur demande de devis.
                  </span>
                </div>

                <div className="flex gap-2 px-3 py-3 mb-7 text-xs font-medium">
                  <Link
                    to="/detail_page_prod"
                    className="flex flex-row items-center justify-center cursor-pointer gap-2  py-2 rounded-xl w-full bg-green-700/10 border border-green-500/10 hover:bg-amber-600 hover:text-white"
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
                      className="lucide lucide-eye w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Detail
                  </Link>

                  <Link
                    to="/demande_de_devis"
                    className="flex flex-row items-center  justify-center cursor-pointer  gap-2 px-4 py-2 rounded-xl w-fit bg-green-900 text-white"
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
                      className="lucide lucide-shopping-cart w-3 h-3"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    Devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default detail_page_prod;
