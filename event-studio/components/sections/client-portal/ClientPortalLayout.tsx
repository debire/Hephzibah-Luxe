// import Image from "next/image";
// import type { ReactNode } from "react";

// interface ClientPortalLayoutProps {
//   children: ReactNode;
//   imageSide?: "left" | "right";
// }

// export default function ClientPortalLayout({
//   children,
//   imageSide = "left",
// }: ClientPortalLayoutProps) {
//   const imageOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2";
//   const formOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1";

//   return (
//     <section className="bg-background text-primary">
//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
//         <div className={`relative w-full h-[40vh] lg:h-full lg:aspect-auto overflow-hidden order-1 ${imageOrder}`}>
//           <Image
//             src="/images/portfoliopage/portfoliotwo.jpg"
//             alt=""
//             fill
//             priority
//             className="object-cover"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//         </div>

//         <div className={`order-2 ${formOrder} flex items-start justify-start px-4 lg:px-12 py-8 lg:py-16`}>
//           <div className="w-full max-w-[520px]">
//             {children}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
        <div className={`relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-full lg:min-h-[70vh] lg:aspect-auto overflow-hidden order-1 ${imageOrder}`}>
          <Image
            src="/images/portfoliopage/portfoliotwo.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className={`order-2 ${formOrder} flex items-start justify-start px-4 sm:px-6 md:px-10 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24`}>
          <div className="w-full max-w-[520px] md:max-w-[680px] lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[680px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}