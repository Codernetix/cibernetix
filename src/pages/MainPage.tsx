import MainContainer from "../components/main/components/MainContainer.tsx";
import SectionContainer from "../components/main/components/SectionContainer.tsx";
import ContactForm from "../components/main/ContactForm.tsx";
import MisionVision from "../components/main/MisionVision.tsx";
import Slogan from "../components/main/Slogan.tsx";
import WorkGallery from "../components/main/WorkGallery.tsx";

export default function MainPage (){
    return (
        <>

        <MainContainer>
          <Slogan />
  
          <SectionContainer custom="bg-white rounded-xl p-8">
            <div>
              <div className="text-center">
                <h3 className="text-5xl">Como trabajamos . . .</h3>
                <br />
                <p className="text-2xl">
                  Analizamos y adaptamos nuestras soluciones a las necesidades
                  específicas de cada cliente.
                </p>
              </div>
              <WorkGallery />
            </div>
          </SectionContainer>
  
          <MisionVision />
  
          <ContactForm />
  
        </MainContainer>
      </>
    )
}