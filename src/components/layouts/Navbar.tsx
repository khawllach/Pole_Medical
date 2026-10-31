import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [devislist, setdevislist] = useState(false);

  return (
    <header className="border-b bg-[#003338] sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="p-2">
          <img src={logo} alt="Logo" className="md:h-25 h-20 sm:h-23 " />
        </div>
        <div className="flex items-center ">
          <nav className="hidden text-white text-sm font-medium md:flex items-center justify-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
            >
              Acceuil
            </Link>
            <Link
              to="/cataloque"
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
            >
              cataloque
            </Link>
            <Link
              to="/propos"
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
            >
              Contact
            </Link>

            <Link
              to="/demande_de_devis"
              className=" relative px-4 py-2 bg-amber-600 rounded-2xl"
            >
              <span className="absolute  top-[-7px] right-[-7px] w-6 h-6 rounded-full bg-red-700 flex items-center justify-center text-center ">
                1
              </span>

              <div className="flex items-center gap-1">
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
                  className="lucide lucide-shopping-bag w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                Devis
              </div>
            </Link>
          </nav>

          {/* mobile menu */}
          <div
            className={`md:hidden flex gap-2 px-5  ${open ? "hidden" : "block"} `}
          >
            <Link to="/demande_de_devis " className="relative">
              <span className="absolute  top-[-5px] right-[-4px] w-5 h-5 rounded-full bg-red-700 flex items-center justify-center text-center ">
                1
              </span>
              <button className="p-2.5 hover:bg-white/20 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  className="text-white cursor-pointer"
                >
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
              </button>
            </Link>
            <button
              className="text-white cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                ""
              ) : (
                <div className="flex items-center justify-center p-2.5 hover:bg-white/20 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    className="text-white cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <path d="M4 12h16"></path>
                    <path d="M4 18h16"></path>
                    <path d="M4 6h16"></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute top-0 right-0 z-100 w-65 h-full bg-[#005359] ">
          <div className={`flex flex-col ${open ? "block" : "hidden"} `}>
            {/* header navbar mobile */}
            <div className="pr-4 pt-4 flex items-center justify-between gap-5 border-b border-white/20">
              <img src={logo} alt="Logo" className="h-17  " />
              <div className="flex items-center justify-center p-2.5 hover:bg-white/20 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0,0,256,256"
                  onClick={() => setOpen(!open)}
                >
                  <g transform="">
                    <g
                      fill="#ffffff"
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
            <ul className="flex flex-col space-y-3 bg-[#005359] shadow p-3 min-h-screen">
              <Link
                to="/"
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Acceuil
              </Link>

              <Link
                to="/cataloque"
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Catalogue
              </Link>
              <Link
                to="/propos"
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Contact
              </Link>
              <Link
                to="/demande_de_devis"
                className="relative px-4 py-2 text-amber-600   hover:bg-white/10 rounded-lg "
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <button className="relative flex items-center gap-3 cursor-pointer ">
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
                    className="lucide lucide-shopping-bag w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Demander un devis
                  <span className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center text-center text-white ">
                    1
                  </span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
