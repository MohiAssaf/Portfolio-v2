import { lazy, Suspense, useEffect, useRef, useState } from "react";
import EducationItem from "@/components/Education/EducationItem";
import { EDUCATION_ITEMS, CERTIFICATES } from "@/constants/education";

const CertificateCarousel = lazy(() =>
  import("@/components/Education/CertificateCarousel")
);

const CarouselPlaceholder = () => (
  <div className="mt-6 h-[17rem] md:h-[23rem]" aria-hidden="true" />
);

const Education = () => {
  const sectionRef = useRef(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || shouldLoadCarousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [shouldLoadCarousel]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="mb-32 scroll-mt-24 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-light-slate text-2xl font-bold mb-8">
        Education & Certifications
      </h2>

      <ol className="group/list">
        {EDUCATION_ITEMS.map((item, idx) => (
          <EducationItem
            key={idx}
            year={item.year}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </ol>

      <h3 className="text-light-slate text-xl font-semibold">
        Certifications
      </h3>

      {shouldLoadCarousel ? (
        <Suspense fallback={<CarouselPlaceholder />}>
          <CertificateCarousel certificates={CERTIFICATES} />
        </Suspense>
      ) : (
        <CarouselPlaceholder />
      )}
    </section>
  );
};

export default Education;
