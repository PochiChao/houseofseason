import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="mt-auto">
        <footer aria-labelledby="footer-heading" className="bg-gray-900">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-800 py-4">
              <p className="text-sm text-gray-400">
                Copyright &copy; {currentYear} Pochi Chao. Background Image courtesy of Unsplash.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer;