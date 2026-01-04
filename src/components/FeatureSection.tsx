import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkTo: string;
  linkText: string;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  description,
  image,
  imageAlt,
  linkTo,
  linkText,
  reverse = false,
}: FeatureSectionProps) => {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div
          className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Content */}
          <div className={`space-y-6 ${reverse ? "lg:col-start-2" : ""}`}>
            <h2 className="editorial-subheadline text-balance">{title}</h2>
            <p className="editorial-body">{description}</p>
            <Link to={linkTo}>
              <Button variant="outline" className="mt-4 group">
                {linkText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className={reverse ? "lg:col-start-1" : ""}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
