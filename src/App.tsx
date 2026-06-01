import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/Home";
import About from "@/pages/About";
import AdditionalServices from "@/pages/AdditionalServices";
import Airports from "@/pages/Airports";
import HowWeWork from "@/pages/HowWeWork";
import Reservation from "@/pages/Reservation";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Lost in the clouds</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has taken off without you.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md btn-gold px-5 py-2.5 text-sm font-medium">
          Return home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}
