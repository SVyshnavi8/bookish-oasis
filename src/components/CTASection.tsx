import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

const CTASection = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium">
            {title}
          </h2>

          {/* Description — forced two lines */}
       <div className="editorial-body max-w-2xl mx-auto text-center leading-snug">
  <div className="flex flex-col items-center gap-1">
    <span>
      Whether you're focused on access, outreach, discovery, or insight,
    </span>
    <span className="whitespace-nowrap">
      LibraryOne partners with libraries to support meaningful outcomes for patrons and communities.
    </span>
  </div>
</div>





          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to={primaryCTA.link}>
              <Button variant="hero" size="lg">
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {secondaryCTA && (
              <Link to={secondaryCTA.link}>
                <Button variant="hero-outline" size="lg">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
