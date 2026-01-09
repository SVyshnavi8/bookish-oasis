import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";

import React from "react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="editorial-section py-12 md:py-14">
    <div className="editorial-container space-y-6">
      <h2 className="editorial-subheadline font-semibold text-balance">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Seo
        title="Privacy Policy"
        description="Read LibraryOne’s Privacy Policy to understand how we collect, use, and protect your information across our services."
        path="/privacy-policy"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-10 w-80 h-80 bg-[#0b5fa5]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 right-10 w-96 h-96 bg-[#4cc9c0]/10 rounded-full blur-3xl" />
        </div>
        <div className="editorial-container relative z-10 space-y-4 text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0b5fa5] font-semibold">
            Privacy Policy
          </p>
          <h1 className="editorial-headline text-balance">
            Protecting your privacy and data rights
          </h1>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Effective January 1, 2026. Last Updated January 1, 2026.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            LibraryOne (“LibraryOne”) respects your right to privacy. Unless you
            agree otherwise—or we state otherwise in this policy or at the time
            information is collected—any personally identifying information you
            provide will not be revealed to anyone outside of LibraryOne and its
            affiliated companies. This policy may change from time to time; please
            check back periodically. This Privacy Policy should be read in
            conjunction with the Terms of Use of this website.
          </p>
        </div>
      </section>

      <Section title="What we collect and how">
        <p>
          When an individual visits LibraryOne websites, our servers collect basic
          technical information—such as domain name, referral data (e.g., the
          address of the last URL visited prior to clicking through), and
          browser/platform type. We count, track, and aggregate visitor activity to
          analyze general traffic flows. We may merge information about visitors
          and visits into group data, which may be shared on an aggregated basis
          with advertisers; we will not disclose your individual identity or
          personally identifiable information without your permission.
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              1A. Information you give to us
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Information provided when purchasing goods or services or signing
                up for newsletters and information materials.
              </li>
              <li>
                Details submitted when we process and respond to product, customer
                service, or technical support inquiries, or when you provide
                website feedback.
              </li>
              <li>Records and copies of correspondence (including email addresses).</li>
              <li>
                Additional personal information, including resumes and other
                non-sensitive information, when applying for a position at
                LibraryOne (through LibraryOne&apos;s career site).
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              1B. Information we collect through our website
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Details of visits to our website, including resources accessed,
                traffic data, location data, logs, language, date/time of access,
                frequency, and other communication data.
              </li>
              <li>
                Information about your computer or mobile device and internet
                connection, including IP address, operating system, host domain,
                and browser type.
              </li>
              <li>Details of referring websites (URL).</li>
              <li>
                Statistical data that helps us improve our website and deliver a
                better and more personalized service, enabling us to determine
                traffic patterns and sources, measure performance and security,
                identify popular and less popular content, observe site search
                patterns, and determine user frequency and recency.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Third-party ad servers and analytics providers">
        <p>
          LibraryOne works with third-party network advertisers, ad agencies,
          analytics service providers, and other vendors to serve third-party
          advertisements on and through the website; provide information regarding
          traffic (including pages viewed and actions taken); serve our
          advertisements on other websites and mobile apps; and measure the
          effectiveness of our advertisements. If you click an advertisement, our
          service provider(s) may be able to tell us the advertisement you clicked
          and where you were viewing it; likewise, if you click an ad on our site,
          the service provider(s) may be able to tell which page you were visiting
          and pass that information to the advertiser.
        </p>
        <p>
          These third-party service providers may set and access their own
          tracking technologies on your device (including cookies and web beacons)
          and may otherwise collect or have access to information about you,
          including personal data, across sites and over time. Cookies and web
          beacons—including those set by third-party network advertisers—may be
          used to serve targeted advertisements, prevent you from seeing the same
          advertisements too many times, and conduct research regarding the
          usefulness of certain advertisements.
        </p>
        <p>
          While we may use a variety of service providers, some are members of the
          Network Advertising Initiative (NAI) or the Digital Advertising
          Alliance (DAA) Self-Regulatory Program for Online Behavioral
          Advertising. You may want to visit{" "}
          <a
            href="http://www.networkadvertising.org/managing/opt_out.asp"
            className="text-[#0b5fa5] underline"
            target="_blank"
            rel="noreferrer"
          >
            http://www.networkadvertising.org/managing/opt_out.asp
          </a>{" "}
          and{" "}
          <a
            href="http://www.aboutads.info/choices/"
            className="text-[#0b5fa5] underline"
            target="_blank"
            rel="noreferrer"
          >
            http://www.aboutads.info/choices/
          </a>{" "}
          for information regarding targeted advertising and opt-out procedures.
          You may also opt out of tracking and receiving targeted advertisements on
          your mobile device via the AppChoices app at{" "}
          <a
            href="https://www.aboutads.info/appchoices"
            className="text-[#0b5fa5] underline"
            target="_blank"
            rel="noreferrer"
          >
            www.aboutads.info/appchoices
          </a>
          .
        </p>
        <p>
          To opt out from Google Analytics, download the Google Analytics Opt-out
          Browser Add-on:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=en-GB"
            className="text-[#0b5fa5] underline"
            target="_blank"
            rel="noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout?hl=en-GB
          </a>
          . To opt out from Adobe Analytics, visit{" "}
          <a
            href="https://www.adobe.com/privacy/opt-out.html"
            className="text-[#0b5fa5] underline"
            target="_blank"
            rel="noreferrer"
          >
            https://www.adobe.com/privacy/opt-out.html
          </a>
          .
        </p>
      </Section>

      <Section title="Cookies, web beacons, and other technologies">
        <p>
          A cookie is a small amount of data sent to your browser from a web
          server and stored on your computer&apos;s hard drive. We use cookies to
          help deliver advertisements, identify browsers that visit us, and track
          usage throughout our websites. We also use cookies on our shopping site
          to make the ordering process more convenient. Other companies placing
          advertising on our site may also assign cookies to you in a process we
          do not control. Cookies cannot be used to identify individuals, only
          machines, so these advertisers will not know who you are.
        </p>
        <p>
          We reserve the right to use, without personally identifiable
          information, any questions, comments, or other information submitted by
          users in books, articles, commentaries, research, or similar ways.
        </p>
        <p>
          If you visit a website linked to LibraryOne&apos;s website, you should
          consult that website&apos;s privacy policy. These third-party websites
          are not affiliated with us; we are not responsible for their privacy,
          content, or accuracy and will not have liability for third-party
          materials, products, or services.
        </p>
      </Section>

      <Section title="How we use and disclose your information">
        <p>
          We will only disclose personally identifiable information under the
          following limited circumstances:
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>When required to do so by law (e.g., court order or subpoena).</li>
          <li>To protect our website, our company, or our site visitors.</li>
          <li>
            When the information is needed by certain agents and contractors of
            LibraryOne (e.g., accountants, lawyers, hosts, developers) to perform
            their work for LibraryOne, and only for that purpose.
          </li>
          <li>
            To provide transmission of newsletters or advertisements in which you
            may be interested and opted in.
          </li>
          <li>
            In the event that LibraryOne files for bankruptcy or is purchased in
            whole or in part by another business entity.
          </li>
          <li>For purposes disclosed at the time the information is given.</li>
        </ul>
        <p>
          This website is intended primarily as a business-to-business information
          site and is not intended for children under 13. LibraryOne does not
          knowingly collect personally identifiable information from children
          under 13.
        </p>
        <p>
          How we process information (including personal data) may be necessary
          for contract performance, legal obligations, legitimate interests,
          consent-based communications, interactive features, site safety,
          support, providing requested information, notifying about changes,
          communicating about similar goods and services, recruiting purposes,
          business transitions, and other consent-based purposes.
        </p>
      </Section>

      <Section title="International transfers">
        <p>
          The data we collect from you will be transferred to and stored at a
          destination outside the European Economic Area (EEA). It may also be
          processed by staff operating outside the EEA who work for us or other
          entities acting as data processors on our behalf, including for
          fulfillment of requests or orders and support services. LibraryOne has
          implemented international data transfer agreements based on EU Standard
          Contractual Clauses to provide appropriate safeguards where adequate
          protection is not guaranteed. We will take all steps reasonably necessary
          to ensure your data is treated securely and subject to appropriate
          safeguards in accordance with this policy and applicable laws and
          regulations.
        </p>
      </Section>

      <Section title="How long we retain your information">
        <p>
          Unless otherwise required by law, LibraryOne will erase personal data
          when it is no longer necessary for the purposes collected; when you
          withdraw consent (where processing was based on consent) and no other
          legal basis exists; when you object and there are no overriding
          legitimate grounds; when personal data has been unlawfully processed;
          and when necessary to comply with legal obligations.
        </p>
      </Section>

      <Section title="Your choices and controls">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Cookie settings:</strong> Set your browser to refuse all or
            some cookies or to alert you when cookies are being sent. Some parts
            of the site may become inaccessible or not function properly if you
            disable cookies.
          </li>
          <li>
            <strong>Do Not Track:</strong> Our system may not respond to Do Not
            Track requests or headers from some or all browsers.
          </li>
          <li>
            <strong>Account information and communications:</strong> You may be
            able to review and update account information and communication
            preferences through the website. Opt out of marketing emails by using
            the provided opt-out instructions. Transactional messages (e.g., order
            confirmations) may still be sent.
          </li>
          <li>
            <strong>Sweepstakes, contests, promotions:</strong> If you enter
            promotions, information such as name and shipping address may be
            disclosed to third parties or the public in connection with
            administration, winner selection, prize fulfillment, and as required
            by law or permitted by official rules.
          </li>
        </ul>
      </Section>

      <Section title="Your rights regarding your personal data">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Right to request access to personal data, including confirmation of
            processing and access to the data and processing details.
          </li>
          <li>
            Right to rectification or erasure, including completing incomplete
            data and, in certain cases, requesting erasure without undue delay.
          </li>
          <li>
            Right to restrict or object to processing under certain circumstances
            (e.g., accuracy contested, processing unlawful, data no longer needed,
            or objections to automated decision-making).
          </li>
          <li>
            Right to data portability in certain cases, including transmission to
            another controller.
          </li>
          <li>
            Where processing is based on consent, right to withdraw consent at any
            time.
          </li>
          <li>Right to lodge a complaint with a supervisory authority.</li>
        </ul>
      </Section>

      <Section title="Contact information">
        <p>
          If you have questions or comments about this Privacy Policy or our
          Services, contact us at{" "}
          <a
            href="mailto:privacy@libraryone.com"
            className="text-[#0b5fa5] underline"
          >
            privacy@libraryone.com
          </a>{" "}
          or by telephone at{" "}
          <a href="tel:18007753700" className="text-[#0b5fa5] underline">
            1-800-775-3700
          </a>
          . You may also write to LibraryOne Digital Inc, 3540 Toringdon Way,
          Suite 200 #391, Charlotte, NC 28277.
        </p>
        <p>
          For California residents to exercise consumer rights, please use the
          California request options noted below. For EU citizens to exercise data
          subject rights, please contact us via the channels above.
        </p>
      </Section>

      <Section title="How we secure your information">
        <p>
          We take reasonable physical, administrative, and technical measures to
          secure the information we collect from and about our customers and
          website visitors. However, no method of electronic transmission or
          storage is 100% secure. We cannot guarantee the security of information
          you submit. If you believe security has been compromised, please contact
          us immediately.
        </p>
      </Section>

      <Section title="Copyright statement">
        <p>
          Effective January 1, 2026. Last Updated January 1, 2026. This website is
          protected under United States Copyright law as a compilation of the
          information contained on the site. Certain information is copyrighted by
          LibraryOne and others.
        </p>
      </Section>

      <Section title="Terms of Use (summary)">
        <p>
          Use of this website is subject to these Terms of Use and the Privacy
          Policy. Except for registered users in password-protected portions of
          the site, use is limited to viewing information and downloading or
          printing for personal use a single copy. No portion of this site or its
          information may be copied, modified, distributed, or used for commercial
          purposes without express written permission from LibraryOne and the
          copyright owner of the particular information.
        </p>
        <p>
          The content of this website, including text, graphics, images, code, and
          compilation thereof, is Copyright © 2004-2026, LibraryOne, all
          rights reserved, and/or subject to third-party copyrights. By submitting
          comments or other content, you grant LibraryOne a perpetual,
          non-exclusive, worldwide, royalty-free, fully assignable license to use,
          display, reproduce, distribute, modify, prepare derivative works, and
          publicly perform your content online and offline.
        </p>
        <p>
          All products and information on or through this site are provided &quot;as
          is&quot; and &quot;as available&quot; without warranties of any kind,
          including implied warranties of merchantability, fitness for a particular
          purpose, non-infringement, or freedom from harmful components. Neither
          LibraryOne nor any party involved in creating or delivering the site will
          be liable for any damages arising out of use or inability to use the site
          or its content.
        </p>
        <p>
          LibraryOne may update the site, Terms of Use, and Privacy Policy at any
          time without advance notice and may prohibit your use of the site at any
          time for any reason. Linking to other sites is at your own risk; we do
          not endorse or take responsibility for external content.
        </p>
      </Section>

      <Section title="California Consumer Privacy Act Notice (CCPA)">
        <p>
          Effective January 1, 2026. Last Updated January 1, 2026. This CCPA Notice
          supplements our Privacy Statement and explains personal information
          processing and your rights as a California resident.
        </p>
        <p>
          &quot;Personal information&quot; is information that identifies, relates
          to, describes, is reasonably capable of being associated with, or could
          reasonably be linked with a natural person or household (e.g., name,
          postal address, email address, telephone number, payment information).
          Aggregated, de-identified, or anonymized information and publicly
          available government records are not considered personal information.
        </p>
        <p>
          Information regarding collection, use, and disclosure—including
          categories collected, sources, purposes, and third parties with whom we
          share—is available in our Privacy Statement. We do not sell your
          personal information. We use cookies in certain circumstances; see our
          Cookie Statement for details.
        </p>
        <p>
          Under the CCPA, California residents may have the right, upon a
          verifiable request, to:
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            Access twice in a 12-month period, free of charge, the categories
            and/or specific pieces of personal information collected, the
            categories of sources, the business purpose for collection, and the
            categories of third parties with whom personal information is shared
            for the prior 12-month period.
          </li>
          <li>Delete personal information under certain circumstances.</li>
        </ul>
        <p>
          LibraryOne does not discriminate against users or customers for
          exercising rights under the CCPA.
        </p>
        <p>
          To request access to or deletion of personal information, contact us via
          email at{" "}
          <a
            href="mailto:privacy@libraryone.com"
            className="text-[#0b5fa5] underline"
          >
            privacy@libraryone.com
          </a>{" "}
          (please include &quot;California Privacy Request&quot; in the subject
          line), via phone at{" "}
          <a href="tel:18007753700" className="text-[#0b5fa5] underline">
            1-800-775-3700
          </a>
          , or via the webform noted in our Privacy Statement. Specify what
          personal information you would like to access or delete. To protect your
          personal information, we will verify your identity using data points you
          provide. If you have a password-protected account, we may verify through
          existing practices.
        </p>
        <p>
          You may authorize an agent to submit a request on your behalf by
          providing written permission for the agent to act for you; the agent must
          verify their identity with us. Mail written authorization, certified by a
          California notary public, to: Privacy Team, 3540 Toringdon Way, Suite 200
          #391, Charlotte, NC 28277. If your authorized agent has power of attorney
          pursuant to Probate Code sections 4000 to 4465, additional steps may not
          be necessary.
        </p>
        <p>
          We take reasonable precautions—including physical, electronic, and
          procedural safeguards—to protect your information. Despite our efforts,
          no security system is impenetrable. In the event of a security breach,
          we will promptly notify you and proper authorities if required by law.
        </p>
        <p>
          We may periodically change this CCPA Notice. Non-material changes take
          effect immediately upon posting; more significant changes will include a
          prominent notice or direct notification. Continued use after the
          effective date constitutes acceptance. If you do not agree, please
          refrain from using our products or services and contact us to close any
          account you have created.
        </p>
        <p>
          For questions about this CCPA Notice or its implementation, contact us via
          email at{" "}
          <a
            href="mailto:privacy@libraryone.com"
            className="text-[#0b5fa5] underline"
          >
            privacy@libraryone.com
          </a>
          , via phone at{" "}
          <a href="tel:18007753700" className="text-[#0b5fa5] underline">
            1-800-775-3700
          </a>
          , or by mail at: Privacy Team, 3540 Toringdon Way, Suite 200 #391,
          Charlotte, NC 28277.
        </p>
      </Section>
    </MainLayout>
  );
};

export default PrivacyPolicy;

