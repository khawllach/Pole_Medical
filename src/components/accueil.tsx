import React from "react";
import heroimg from "../assets/heroimg.jpg";
import accessoire_medicaux from "../assets/Accessoires Medicaux.jpg";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const categorielist = [
  {
    image: accessoire_medicaux,
    titre: "Accessoires Medicaux",
    nbrproduit: 3,
  },
  {
    image: accessoire_medicaux,
    titre: "banque de sang",
    nbrproduit: 6,
  },
  {
    image: accessoire_medicaux,
    titre: "bloc operatoire",
    nbrproduit: 6,
  },
  {
    image: accessoire_medicaux,
    titre: "chariots medicaux",
    nbrproduit: 5,
  },
  {
    image: accessoire_medicaux,
    titre: "diagnostic ",
    nbrproduit: 6,
  },
  {
    image: accessoire_medicaux,
    titre: "froid medical",
    nbrproduit: 2,
  },
  {
    image: accessoire_medicaux,
    titre: "laboratoire",
    nbrproduit: 11,
  },
  {
    image: accessoire_medicaux,
    titre: "lits medicaux",
    nbrproduit: 11,
  },
  {
    image: accessoire_medicaux,
    titre: "mobilier de laboratoire",
    nbrproduit: 5,
  },
  {
    image: accessoire_medicaux,
    titre: "mobilier medical",
    nbrproduit: 15,
  },
  {
    image: accessoire_medicaux,
    titre: "monitoring",
    nbrproduit: 3,
  },
  {
    image: accessoire_medicaux,
    titre: "neonatologie",
    nbrproduit: 13,
  },
  {
    image: accessoire_medicaux,
    titre: "Oxygenotherapie",
    nbrproduit: 3,
  },
  {
    image: accessoire_medicaux,
    titre: "Perfusion",
    nbrproduit: 7,
  },
  {
    image: accessoire_medicaux,
    titre: "Radiologie generale",
    nbrproduit: 16,
  },
  {
    image: accessoire_medicaux,
    titre: "Radiologie interventionnelle",
    nbrproduit: 8,
  },
  {
    image: accessoire_medicaux,
    titre: "radioprotection",
    nbrproduit: 8,
  },
  {
    image: accessoire_medicaux,
    titre: "sterilisation   ",
    nbrproduit: 3,
  },
];
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

const Accueil = () => {
  return (
    <div className="bg-gradient-to-br from-[#005359] via-[#004549] to-[#003338] ">
      <section className=" min-h-screen relative overflow-hidden flex flex-col   ">
        <div className="max-w-7xl mx-auto px-8 py-20 ">
          <div className="pointer-events-none absolute inset-0 overflow-hidden ">
            {/* Top-right glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ABEBD]/15 rounded-full blur-3xl" />

            {/* Bottom-left glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E35F0D]/10 rounded-full blur-3xl" />

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9ABEBD]/5 rounded-full blur-3xl" />

            {/* Decorative plus */}
            <svg
              className="absolute top-20 left-10 w-8 h-8 text-white/5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z" />
            </svg>

            <svg
              className="absolute bottom-20 right-10 w-12 h-12 text-white/5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z" />
            </svg>

            <svg
              className="absolute top-1/3 right-1/4 w-6 h-6 text-white/5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z" />
            </svg>
          </div>

          <div className="flex flex-row items-center gap-10 max-w-8xl ">
            <div className="flex flex-col  max-w-2xl lg:max-w-4xl">
              <div className="py-2 px-4 mt-16 bg-white/10 rounded-full w-fit">
                <div className="inline-flex items-center  gap-4 ">
                  <div className="rounded-full w-3 h-3 bg-amber-600" />
                  <span className="text-[12px] text-white">
                    Votre partenaire médical en Algérie
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4  lg:max-w-3xl">
                <h1 className="text-[30px] lg:text-[60px] font-bold text-white">
                  Importation et distribution de matériel médical en Algérie
                </h1>
                <span className="text-lg text-white/80 lg:text-[20px]">
                  Votre partenaire de confiance pour l'équipement des cliniques,
                  hôpitaux et laboratoires. Qualité certifiée et service
                  après-vente.
                </span>
              </div>

              <div className="flex flex-wrap gap-5 py-5">
                <Link
                  to="/cataloque"
                  className="flex items-center justify-center py-3 px-4 bg-white rounded-2xl  border border-white  hover:border hover:border-white/20 hover:bg-[#005359] hover:text-white text-green-900"
                >
                  {" "}
                  <button className="flex gap-2 items-center justify-center text-sm  hover:text-white font-medium cursor-pointer">
                    voir le catalogue{" "}
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
                  className="flex items-center justify-center py-2 px-4 bg-white rounded-2xl border border-white hover:border hover:border-white/20 hover:bg-[#005359] hover:text-white text-green-600"
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

              <div className="flex flex-wrap gap-10 py-5">
                <div className="max-w-30 ">
                  <div className="flex flex-col gap-2 px-8 py-6 bg-white/10 rounded-[1.5rem] w-fit items-center justify-center text-center border border-white/20 text-white">
                    <h1 className="text-3xl font-bold">15+</h1>
                    <span className="text-sm">Années d'expérience</span>
                  </div>
                </div>
                <div className="max-w-30 ">
                  <div className="flex flex-col gap-2 px-8 py-6 bg-white/10 rounded-[1.5rem] w-fit items-center justify-center text-center border border-white/20 text-white">
                    <h1 className="text-3xl font-bold">500+</h1>
                    <span className="text-sm">Produits disponibles</span>
                  </div>
                </div>
                <div className="max-w-30 ">
                  <div className="flex flex-col gap-2 px-8 py-6 bg-white/10 rounded-[1.5rem] w-fit items-center justify-center text-center border border-white/20 text-white">
                    <h1 className="text-3xl font-bold">200+</h1>
                    <span className="text-sm">Clients satisfaits</span>
                  </div>
                </div>
                <div className="max-w-30 ">
                  <div className="flex flex-col gap-2 px-8 py-6 bg-white/10 rounded-[1.5rem] w-fit items-center justify-center text-center border border-white/20 text-white">
                    <h1 className="text-3xl font-bold">48</h1>
                    <span className="text-sm">Wilayas couvertes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col hidden lg:block ">
              <div className=" absolute py-2 px-5 font-medium bg-[#005359] text-white w-fit rounded-full top-[-14px] right-[-14px]">
                Certifié CE & ISO
              </div>
              <img
                alt="Showroom Pole Medical Healthcare — Matériel médical professionnel"
                loading="lazy"
                width="560"
                height="420"
                decoding="async"
                data-nimg="1"
                className="rounded-lg  w-150 shadow-[0_0_30px] shadow-white/80 transition "
                src={heroimg}
              />
              <div className="flex gap-3 absolute py-4 px-5 font-medium bg-white w-fit rounded-xl bottom-[-14px] left-[-14px]">
                <div className="p-4 bg-[#f9cbaf] w-fit rounded-full">
                  <svg
                    className="w-5 h-5 text-[#E35F0D]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z"></path>
                  </svg>
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <h1 className="font-bold">+500 Produits</h1>
                  <span className="text-xs ">Disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <h1 className="font-bold text-3xl">Pourquoi nous choisir ?</h1>
            <span className="font-normal text-sm">
              Un engagement de qualité et de service pour les professionnels de
              santé en Algérie
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-end gap-30 py-15 ">
            <div className="relative hidden lg:block flex justify-center items-center ">
              <div className="flex flex-col   absolute py-4 px-5 font-medium bg-white w-fit rounded-xl top-[-14px] right-[-14px]">
                <div className="flex gap-3  items-center justify-start ">
                  <div className="p-2 bg-[#f9cbaf] w-fit rounded-full">
                    <svg
                      className="w-3 h-3 text-[#E35F0D]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z"></path>
                    </svg>
                  </div>
                  <h1 className="font-bold">Certifié</h1>
                </div>
                <span className="text-xs font-light">CE & ISO 13485</span>
              </div>

              <img
                alt="Showroom Pole Medical Healthcare — Matériel médical professionnel"
                loading="lazy"
                width="500"
                height="320"
                decoding="async"
                data-nimg="1"
                className="rounded-lg  h-80 w-150 md:w-220 shadow-[0_0_30px] shadow-white/80 transition "
                src={heroimg}
              />

              <div className="flex flex-col  absolute py-4 px-5 font-medium bg-[#005359] text-white w-fit rounded-xl bottom-[-14px] left-[-14px]">
                <div className="flex gap-3  items-center justify-start ">
                  <div className="p-2 bg-[#307479] w-fit rounded-full">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z"></path>
                    </svg>
                  </div>
                  <h1 className="font-bold">SAV 7j/7</h1>
                </div>
                <span className="text-xs ">Support technique continu</span>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:max-w-xl">
              <div className="flex flex-row justify-center items-start gap-5 py-9 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl ">
                <div className="p-5  bg-green-500/10  rounded-full">
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
                    className="lucide lucide-shield-check w-5 h-5 text-green-900"
                    aria-hidden="true"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold">Qualité certifiée</h1>
                  <span className="">
                    Tous nos produits sont certifiés conformes aux normes
                    internationales (CE, ISO) pour garantir la sécurité et la
                    fiabilité.
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 py-9 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl">
                <div className="p-5  bg-green-500/10  rounded-full">
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
                    className="lucide lucide-wrench w-5 h-5 text-green-900"
                    aria-hidden="true"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold">Service après-vente</h1>
                  <span>
                    Notre équipe technique assure l'installation, la formation
                    et le maintenance de tous les équipements fournis.
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 py-9 px-4 bg-white border border-green-950/20  rounded-3xl hover:shadow-xl">
                <div className="p-5 bg-green-500/10 rounded-full">
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
                    className="lucide lucide-users w-5 h-5 text-green-900"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold">Accompagnement personnalisé</h1>
                  <span>
                    Nous vous accompagnons dans le choix de vos équipements avec
                    des conseils adaptés à vos besoins et votre budget.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="flex flex-col justify-center items-start gap-3 py-9 px-10 bg-gray-500/10 border border-green-950/20  rounded-3xl w-full lg:w-fit shadow-xl ">
              <h3 className="font-medium">Nos garanties</h3>
              <div className="flex flex-col md:flex-row md:gap-1 md:justify-center md:items-center p-1">
                <div className="flex flex-col justify-center items-center md:pr-8 md:border-r border-gray-500/20 ">
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center  md:pl-5">
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                  <div className="flex items-center justify-center p-1 gap-3">
                    <div className="p-2  bg-green-500/10  rounded-full w-fit flex items-center justify-center">
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
                        className="lucide lucide-shield-check w-3 h-3 text-green-900"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-xs">
                      Équipements certifiés CE & ISO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-15 lg:hidden flex justify-center items-center ">
            <div className="flex flex-col   absolute py-4 px-5 font-medium bg-white w-fit rounded-xl top-[-14px] right-[-14px]">
              <div className="flex gap-3  items-center justify-start ">
                <div className="p-2 bg-[#f9cbaf] w-fit rounded-full">
                  <svg
                    className="w-3 h-3 text-[#E35F0D]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z"></path>
                  </svg>
                </div>
                <h1 className="font-bold">Certifié</h1>
              </div>
              <span className="text-xs font-light">CE & ISO 13485</span>
            </div>

            <img
              alt="Showroom Pole Medical Healthcare — Matériel médical professionnel"
              loading="lazy"
              width="500"
              height="320"
              decoding="async"
              data-nimg="1"
              className="rounded-lg  h-80 w-150 md:w-220 shadow-[0_0_30px] shadow-white/80 transition "
              src={heroimg}
            />

            <div className="flex flex-col  absolute py-4 px-5 font-medium bg-[#005359] text-white w-fit rounded-xl bottom-[-14px] left-[-14px]">
              <div className="flex gap-3  items-center justify-start ">
                <div className="p-2 bg-[#307479] w-fit rounded-full">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 0h6v9h9v6h-9v9H9v-9H0V9h9V0z"></path>
                  </svg>
                </div>
                <h1 className="font-bold">SAV 7j/7</h1>
              </div>
              <span className="text-xs ">Support technique continu</span>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-8 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <h1 className="font-bold text-3xl">Nos catégories de produits</h1>
            <span className="font-normal text-sm">
              Découvrez notre gamme complète de matériel médical
            </span>
          </div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categorielist.map((categorie) => (
                <div className="relative  overflow-hidden w-fit rounded-2xl group">
                  <img
                    src={categorie.image}
                    alt=""
                    className="w-80 h-50 rounded-2xl  object-cover  group-hover:scale-110 "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#003338] via-[#004549]/50 to-transparent" />

                  <div className="absolute bottom-5 flex flex-col pl-6  text-white">
                    <h3 className=" font-medium py-3">{categorie.titre}</h3>

                    <div className="px-3 flex justify-center items-center  bg-gray-300/50 rounded-full w-fit">
                      <span className="text-[13px] ">
                        {categorie.nbrproduit} produits
                      </span>
                    </div>
                  </div>
                  <div className="absolute cursor-pointer hidden right-5 bottom-5 text-white group-hover:flex flex-row items-center justify-center gap-1">
                    voir
                    <GoChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between ">
            <div className="flex flex-col justify-start items-start text-center mb-10">
              <h1 className="font-bold text-3xl">Produits en vedette</h1>
              <span className="font-normal text-sm">
                Nos produits les plus demandés
              </span>
            </div>
            <div>
              <button className=" hidden sm:flex items-center justify-center px-5 py-2 bg-green-700/10 border border-green-500/10 hover:text-white hover:bg-amber-600 rounded-2xl text-xs md:text-sm cursor-pointer">
                Voir tout
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>

      <section className="px-8 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <h1 className="font-bold text-3xl">Nos partenaires</h1>
            <span className="font-normal text-sm">
              Nous travaillons avec les meilleures marques internationales
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4 ">
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%] "></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">AGFA</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className="absolute right-4 hidden group-hover:block  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">FUJIFILM</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[2%]"></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">CARESTREAM</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group ">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">STARCARE</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700  rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">MINSTON</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">OLDIEF</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700  rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">TRANSOUND</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">HEAL FORCE</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">CONTEC</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">BIOBASE</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-green-800 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-green-500/10 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">KATRACORE</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-start gap-3 py-3 px-4 pl-8 bg-white rounded-2xl border   border-gray-300 hover:shadow-xl group">
              <div className="absolute left-0 bg-red-700 w-1.5 h-17 rounded-l-2xl group-hover:w-[4%]"></div>
              <div className="p-3 bg-red-700/17 text-red-700 rounded-xl">
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
                  className="lucide lucide-shield-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Promed</h1>
                <span className="text-xs">Partenaire officiel</span>
              </div>
              <div className=" hidden group-hover:block absolute right-4  ">
                <GoChevronRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-gradient-to-br from-[#005359] via-[#004549] to-[#003338]">
        <div className="max-w-7xl mx-auto px-8 py-20 ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col py-5 gap-6 my-3">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:text-[30px] text-white text-center">
                Besoin d'un devis personnalisé ?
              </h1>
              <span className="text-white text-center text-xl max-w-2xl mx-auto">
                Composez votre liste de produits et recevez une proposition
                commerciale adaptée à vos besoins. Notre équipe vous répond sous
                24h.
              </span>
            </div>
            <div className="px-5 py-3 w-fit rounded-md bg-amber-50 hover:bg-green-800/10 hover:text-white hover:border hover:border-white">
              <Link to="/demande_de_devis">
                <button className="cursor-pointer flex items-center justify-center gap-3">
                  demander un devis <GoChevronRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
