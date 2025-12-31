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
    <section className="editorial-section bg-foreground text-background">
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="editorial-headline text-background">{title}</h2>
          <p className="text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to={primaryCTA.link}>
              <Button
                variant="default"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link to={secondaryCTA.link}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/30 text-background hover:bg-background/10"
                >
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
