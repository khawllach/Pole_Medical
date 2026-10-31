import React, { useState } from "react";
import accessoire_medicaux from "../assets/Accessoires Medicaux.jpg";
import { Link } from "react-router-dom";

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
    equep: "Équipement",
  },
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
    equep: "Équipement",
  },
  {
    image: accessoire_medicaux,
    nameprod: "Lunettes de protection RX",
    categorie: "Radioprotection",
    equep: "Équipement",
  },
];
const categoriename = [
  { name: "Accessoires médicaux", nb: "3" },
  { name: " Banque de sang" },
  { name: "Bloc opératoire" },
  { name: "Chariots médicaux" },
  { name: "Froid médical" },
  { name: "Laboratoire" },
  { name: "Lits médicaux" },
  { name: "Mobilier de laboratoire" },
  { name: "Mobilier médical" },
  { name: "Monitoring" },
  { name: "Néonatologie" },
  { name: "Oxygénothérapie" },
  { name: "Perfusion" },
  { name: "Radiologie générale" },
  { name: "Radiologie interventionnelle" },
  { name: "Radioprotection" },
  { name: "Stérilisation" },
  { name: "Transport médical" },
  { name: "Urgence et réanimation" },
];
const typename = [
  { name: "Équipement" },
  { name: "Consommable" },
  { name: "Mobilier" },
];
const Cataloque = () => {
  const [catchoice, setcatchoice] = useState(true);
  const [filteropen, setfilteropen] = useState(false);

  return (
    <section className=" bg-[#12555a]" id="cataloque">
      <div className="px-8 py-20 text-white">
        <div className="flex flex-col gap-3 max-w-7xl mx-auto">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Cataloque
          </h1>
          <span className="font-medium text-sm text-gray-100/60">
            Découvrez notre gamme complète de matériel médical
          </span>
          <div>
            <div className="relative flex gap-2 items-center justify-start">
              <div className="absolute left-4 top-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search preview-icon text-gray-300"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un produit ,une marque...."
                className="py-3  bg-white rounded-2xl text-gray-500 w-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className=" max-w-7xl mx-auto p-5 flex gap-6">
          {/* left bar */}
          <div className="hidden xl:flex px-5 py-5 bg-white border border-gray-400/35  flex-col gap-5 mt-2  rounded-2xl h-fit max-w-[400px]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold ">Filtres</h2>
              <button
                className=""
                onClick={() => {
                  setcatchoice(!catchoice);
                }}
              >
                <span
                  className={`text-xs text-green-900 ${catchoice ? "block" : "hidden"} `}
                >
                  Tout Effacer
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-gray-500 text-[14px] ">
                Catégorie
              </h3>
              <div className="p-2 rounded-lg hover:bg-green-700/5  group">
                {" "}
                <span className="pl-3 text-gray-400 text-[13px] font-medium group-hover:text-green-900 ">
                  Toutes les catégories
                </span>
              </div>
              {categoriename.map((catname) => (
                <ul className="pl-5 text-gray-400 text-[13px]  p-2 rounded-lg hover:bg-green-700/5 group  ">
                  <li className="flex justify-between gap-10 font-medium group-hover:text-green-900">
                    <button onClick={() => setcatchoice(!catchoice)}>
                      {catname.name}
                    </button>
                    <span>3 </span>
                  </li>
                </ul>
              ))}
            </div>
            <hr className="text-gray-400/25 shadow-2xl rounded-2xl " />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-gray-500 text-[14px] ">Type</h3>
              <div className="p-2 rounded-lg hover:bg-green-700/5  group">
                {" "}
                <span className="pl-3 text-gray-400 text-[13px] font-medium group-hover:text-green-900 ">
                  Toutes les types
                </span>
              </div>
              {typename.map((typename) => (
                <ul className="pl-5 text-gray-400 text-[13px]  p-2 rounded-lg hover:bg-green-700/5 group  ">
                  <li className="flex justify-between gap-10 font-medium group-hover:text-green-900">
                    {typename.name}
                    <span>3 </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* right:products */}
          <div className="fles flex-col">
            <div className="flex justify-between items-end py-3">
              <div className="flex flex-col items-start justify-center gap-4 text-gray-500">
                <div
                  className={`flex gap-2 items-center justify-center ${catchoice ? "hidden lg:flex gap-2 items-center justify-center" : "hidden"}`}
                >
                  <span>Filtres actifs :</span>
                  <div className="px-3 py-1 flex items-center rounded-full bg-green-800/10">
                    <span className=" flex items-center justify-center gap-3 text-xs font-medium text-green-950">
                      Accessoires médicaux
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
                        className="lucide lucide-x w-3 h-3"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="px-3 py-1 flex items-center rounded-full bg-green-800/10">
                    <span className=" flex items-center justify-center gap-3 text-xs font-medium text-green-950">
                      Mobilier
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
                        className="lucide lucide-x w-3 h-3"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  135 produit(s) trouvé(s)
                </span>
              </div>
              <div className="xl:hidden p-2 bg-gray-400/30 rounded-lg w-fit hover:bg-amber-600 hover:text-white">
                <button
                  className="px-2 flex items-center justify-between gap-2 text-sm"
                  onClick={() => {
                    setfilteropen(!filteropen);
                  }}
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
                    className="lucide lucide-sliders-horizontal w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <line x1="21" x2="14" y1="4" y2="4"></line>
                    <line x1="10" x2="3" y1="4" y2="4"></line>
                    <line x1="21" x2="12" y1="12" y2="12"></line>
                    <line x1="8" x2="3" y1="12" y2="12"></line>
                    <line x1="21" x2="16" y1="20" y2="20"></line>
                    <line x1="12" x2="3" y1="20" y2="20"></line>
                    <line x1="14" x2="14" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="10" y2="14"></line>
                    <line x1="16" x2="16" y1="18" y2="22"></line>
                  </svg>{" "}
                  Filtres
                </button>
              </div>
            </div>
            {/* filter open in mobile*/}
            {filteropen && (
              <div className="flex flex-col p-3 border border-black/50 rounded-2xl gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold ">Filtres</h2>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className=""
                      onClick={() => {
                        setcatchoice(!catchoice);
                      }}
                    >
                      <span
                        className={`text-xs text-green-900 ${catchoice ? "block" : "hidden"} `}
                      >
                        Tout Effacer
                      </span>
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0,0,256,256"
                      className=" text-black"
                      onClick={() => {
                        setfilteropen(!filteropen);
                      }}
                    >
                      <g transform="">
                        <g
                          fill="#00000"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(4,4)">
                            <path d="M32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM36.95,39.778c0.781,0.781 2.047,0.781 2.828,0c0.781,-0.781 0.781,-2.047 0,-2.828c-0.175,-0.175 -2.767,-2.767 -4.95,-4.95c2.183,-2.183 4.774,-4.774 4.95,-4.95c0.781,-0.781 0.781,-2.047 0,-2.828c-0.781,-0.781 -2.047,-0.781 -2.828,0c-0.175,0.175 -2.767,2.767 -4.95,4.95c-2.183,-2.183 -4.775,-4.775 -4.95,-4.95c-0.781,-0.781 -2.047,-0.781 -2.828,0c-0.781,0.781 -0.781,2.047 0,2.828c0.175,0.175 2.767,2.767 4.95,4.95c-2.183,2.183 -4.774,4.774 -4.95,4.95c-0.781,0.781 -0.781,2.047 0,2.828c0.781,0.781 2.047,0.781 2.828,0c0.175,-0.175 2.767,-2.767 4.95,-4.95c2.183,2.183 4.775,4.775 4.95,4.95z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-black/70">Catégorie</span>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="py-1 px-3 bg-green-900 rounded-2xl text-white/80">
                      Toutes
                    </span>
                    {categoriename.map((categoriename) => (
                      <span className="py-1 px-3 bg-black/8 rounded-2xl text-black/80">
                        {categoriename.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-black/70">Type</span>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="py-1 px-3 bg-green-900 rounded-2xl text-white/80">
                      Tous
                    </span>
                    {typename.map((typename) => (
                      <span className="py-1 px-3 bg-black/8 rounded-2xl text-black/80">
                        {typename.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
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

                    <Link to="/demande_de_devis" className="flex flex-row items-center  justify-center cursor-pointer  gap-2 px-4 py-2 rounded-xl w-fit bg-green-900 text-white">
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
      </div>
    </section>
  );
};

export default Cataloque;
