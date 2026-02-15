import { Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'mens-clothing-store'
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/mens-clothing-logo.dim_512x512.png"
              alt="Zayora Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Zayora</h1>
              <p className="text-sm text-muted-foreground">Men's Clothing Store</p>
            </div>
          </div>
          <a
            href="tel:9919031636"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">9919031636</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="/assets/generated/mens-clothing-hero.dim_1600x800.png"
            alt="Men's Fashion Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground drop-shadow-lg">
                Elevate Your Style
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 mb-4 drop-shadow-md">
                Discover premium men's clothing crafted for the modern gentleman
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8 drop-shadow-md font-semibold">
                Print on demand available
              </p>
              <a
                href="tel:9919031626"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* About Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">About Us</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to Zayora, your premium men's clothing store, where style meets sophistication. 
                We curate the finest collection of men's fashion, from casual wear to formal attire, 
                ensuring every piece reflects quality and elegance.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                  YJ
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Founder: Yash Jaiswal</p>
                  <p className="text-sm text-muted-foreground">Visionary & Style Curator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Collection</h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore our carefully curated selection of premium men's fashion, from sophisticated formal wear to contemporary casual styles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/assets/generated/zayora-gallery-1.dim_1200x1200.png"
                  alt="Men's fashion flat-lay outfit on neutral background"
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/assets/generated/zayora-gallery-2.dim_1200x1200.png"
                  alt="Men's formalwear detail with blazer, shirt and watch"
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/assets/generated/zayora-gallery-3.dim_1200x1200.png"
                  alt="Men's casualwear look with jacket, denim and sneakers"
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/assets/generated/zayora-gallery-4.dim_1200x1200.png"
                  alt="Premium fabric texture close-up with weave detail"
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Coming Soon Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-6">
                Coming Soon
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Products Coming Soon</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're currently building our online catalog to showcase our complete collection. 
                In the meantime, call us directly to explore our full range of premium men's clothing, 
                get personalized recommendations, and place your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:9919031626"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  Call to Order: 9919031626
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Our team is ready to assist you with product details, sizing, and orders
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* General Contact Card */}
              <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold">General Inquiries</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Have questions about our products or services? We're here to help.
                </p>
                <a
                  href="tel:9919031636"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold w-full justify-center"
                >
                  <Phone className="h-5 w-5" />
                  Call: 9919031636
                </a>
              </div>

              {/* Order Contact Card */}
              <div className="bg-card border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                  ORDERS
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold">Order Now</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Ready to place an order? Contact us directly for fast service.
                </p>
                <a
                  href="tel:9919031626"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold w-full justify-center shadow-md"
                >
                  <Phone className="h-5 w-5" />
                  Order: 9919031626
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
                <p className="text-muted-foreground">
                  Carefully selected fabrics and materials for lasting comfort and style
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Easy Ordering</h4>
                <p className="text-muted-foreground">
                  Simple phone ordering process with personalized customer service
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Fast Service</h4>
                <p className="text-muted-foreground">
                  Quick response times and efficient order processing
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/generated/mens-clothing-logo.dim_512x512.png"
                  alt="Zayora Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold">Zayora</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium fashion for the modern gentleman
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Contact</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="tel:9919031636" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  9919031636
                </a>
                <a href="tel:9919031626" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  9919031626 (Orders)
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <SiFacebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <SiX className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Zayora. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
