import Navbar from "./components/layouts/Navbar";
import Accueil from "./components/accueil";
import Footer from "./components/layouts/Footer";
import { Routes, Route } from "react-router-dom";
import Cataloque from "./components/Cataloque";
import Propos from "./components/Propos";
import type { ComponentType } from "react";
import contact from "./components/contact";
import devis from "./components/devis";
import detail_page_prod from "./components/detail_page_prod";

const CataloquePage = Cataloque as unknown as ComponentType;
const ProposPage = Propos as unknown as ComponentType;
const ContactPage = contact as unknown as ComponentType;
const DevisPage = devis as unknown as ComponentType;
const DetailprodPage = detail_page_prod as unknown as ComponentType;


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/cataloque" element={<CataloquePage />} />
          <Route path="/propos" element={<ProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demande_de_devis" element={<DevisPage />} />
          <Route path="/detail_page_prod" element={<DetailprodPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
