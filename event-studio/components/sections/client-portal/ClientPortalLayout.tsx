import Image from "next/image";
import type { ReactNode } from "react";

interface ClientPortalLayoutProps {
  children: ReactNode;
  imageSide?: "left" | "right";
}

export default function ClientPortalLayout({
  children,
  imageSide = "left",
}: ClientPortalLayoutProps) {
  const imageOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2";
  const formOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <section className="bg-background text-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
        <div className={`relative w-full h-[40vh] lg:h-full lg:aspect-auto overflow-hidden order-1 ${imageOrder}`}>
          <Image
            src="/images/portfoliopage/portfoliotwo.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className={`order-2 ${formOrder} flex items-center justify-center px-4 lg:px-12 py-8 lg:py-16`}>
          <div className="w-full max-w-[520px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}