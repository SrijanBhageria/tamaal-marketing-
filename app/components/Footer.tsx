import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#2F6F4F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-3xl font-semibold">
              Tamaal
            </Link>
            <p className="mt-4 max-w-md font-light leading-relaxed text-white/90">
              Rooted in the richness of India. Trust built on every grain — consistent quality, dependable rice, every batch, every time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-medium">Explore</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Quality
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium">Connect</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>Distribution inquiries</li>
              <li>Partnership opportunities</li>
              <li>info@tamaal.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} Tamaal. Premium Indian Rice.
          </p>
        </div>
      </div>
    </footer>
  );
}
