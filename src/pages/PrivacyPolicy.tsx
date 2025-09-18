import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Star Tile LLC",
    "description": "Privacy policy for Star Tile LLC tile installation services in Portland, Oregon",
    "url": "https://www.startilellc.com/privacy-policy",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Star Tile LLC",
      "url": "https://www.startilellc.com"
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy | Star Tile LLC - Portland Tile Installation"
        description="Privacy policy for Star Tile LLC. Learn how we protect your personal information when you use our tile installation services in Portland, Oregon."
        canonical="https://www.startilellc.com/privacy-policy"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <main className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                Star Tile LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.startilellc.com or use our tile installation services in Portland, Oregon and surrounding areas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-montserrat font-medium text-foreground mb-3">
                Personal Information
              </h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Request a quote for tile installation services</li>
                <li>Contact us through our website, phone, or email</li>
                <li>Schedule a consultation or service appointment</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include your name, email address, phone number, physical address, and project details.
              </p>

              <h3 className="text-xl font-montserrat font-medium text-foreground mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Pages you visit and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Provide and improve our tile installation services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Schedule appointments and manage service delivery</li>
                <li>Send you project updates and service confirmations</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations and resolve disputes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>With trusted service providers who assist us in operating our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Access and review the personal information we have about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Third-Party Links
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Children's Privacy
              </h2>
              <p className="text-muted-foreground mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Star Tile LLC</p>
                <p className="text-muted-foreground mb-2">649 NW 12th St, Gresham, OR 97030</p>
                <p className="text-muted-foreground mb-2">Phone: (503) 482-8395</p>
                <p className="text-muted-foreground">Email: Contact@Startilellc.com</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;