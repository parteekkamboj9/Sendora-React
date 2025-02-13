
import { Carousel } from "flowbite-react";

export default function CarousalComp() {
  return (
    <>
    <div className="h-[32rem] carousel-flowbite-react hidden md:block">
      <Carousel slide={true} pauseOnHover slideInterval={1000} >
        <div 
          className="flex h-full items-center justify-end carousel-box"
          style={{ backgroundImage: 'url(/static/img/testimonials/get-start.jpg)'}}>
          <span className="!md:w-[75%] w-[50%] !py-32 text-sm md:text-xl">"Unlock endless possibilities with our powerful tools and resources. Start building smarter solutions today, no coding required—just automation at your fingertips!"</span>
          </div>
        <div 
          className="flex h-full items-center justify-end carousel-box"
          style={{ backgroundImage: 'url(/static/img/testimonials/smiling-woman.jpg)'}}>
          <span className="!md:w-[75%] w-[50%] !pt-[12rem] !md:pe-28 text-sm md:text-xl">"Be part of a community that's redefining efficiency. Join us and gain access to exclusive packages, scripts, and more—all designed to help you work smarter, not harder!"</span>
          </div>
        <div 
          className="flex h-full items-center justify-end carousel-box"
          style={{ backgroundImage: 'url(/static/img/testimonials/keys-success.jpg)'}}>
          <span className="!md:w-[75%] w-[50%] !pt-32 text-sm md:text-xl">"Achieve success with the right tools by your side. Our solutions are trusted by creators and innovators to turn ideas into impactful outcomes—let's make your project soar!"</span>
          </div>
      </Carousel>
    </div>
    </>
  );
}
