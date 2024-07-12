import BookNow from "@/components/myCustom/BookNow";
import TrandingTreatment from "@/components/myCustom/TrandingTreatment";
import ClientTestimonials from "@/components/myCustom/ClientTestimonials";
import HeroSection from "@/components/homeComponet/HeroSection";
import ScotWorkSection from "@/components/homeComponet/ScotWorkSection";
import AboutGlow from "@/components/homeComponet/AboutGlow";
import SignupAsBusiness from "@/components/homeComponet/SinupAsBusiness";

export default function Widget() {
  return (
    <>
      <HeroSection />
      <div className="mb-5">
        <BookNow />
      </div>

      {/* home scot work start  */}

      <ScotWorkSection />
      {/* home scot work end  */}

      {/* tranding treatment start */}

      
        <TrandingTreatment />
      

      {/* tranding treatment end */}

      {/* client testimonial start */}

      <div>
        <ClientTestimonials />
      </div>

      {/* client testimonial end  */}

      {/* about glow start  */}

      <AboutGlow />

      {/* about glow end  */}

      {/* signup for business section start  */}

      <SignupAsBusiness />

      {/* signup for business section  end*/}
    </>
  );
}
