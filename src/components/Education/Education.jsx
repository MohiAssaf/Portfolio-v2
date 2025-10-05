import CertificateCarousel from "@/components/Education/CertificateCarousel";
import EducationItem from "@/components/Education/EducationItem";
import { EDUCATION_ITEMS, CERTIFICATES } from "@/constants/education";

const Education = () => {
  return (
    <section
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

      <CertificateCarousel certificates={CERTIFICATES} />
    </section>
  );
};

export default Education;
