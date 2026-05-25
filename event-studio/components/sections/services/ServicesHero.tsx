import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[40vh] lg:h-[110vh] overflow-hidden">
      {/* Mobile background */}
      <Image
        src="/images/servicespage/mobileserviceshero.jpg"
        alt="Explore our services"
        fill
        priority
        className="object-cover lg:hidden"
        sizes="100vw"
      />

      {/* Desktop background */}
      <Image
        src="/images/servicespage/serviceshero.jpg"
        alt="Explore our services"
        fill
        priority
        className="object-cover hidden lg:block"
        sizes="100vw"
      />

      {/* Heading overlay - anchored bottom-left */}
      <div className="relative z-10 flex h-full items-end px-6 pb-10 lg:px-12 lg:pb-16">
        <h1 className="font-display font-thin text-background tracking-[-0.005em] text-[56px] leading-[60px] lg:text-[140px] lg:leading-[145px]">
          <span className="block">EXPLORE</span>
          <span className="block">
            <em className="italic font-thin">our</em> SERVICES
          </span>
        </h1>
      </div>
    </section>
  );
}