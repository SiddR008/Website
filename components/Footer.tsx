const Footer = () => {
    const links = {
      company: ['Home', 'Jobs', 'Portfolio', 'Blog', 'About Us'],
      legal: ['Cookie Policy', 'Privacy Policy'],
    };
  
    return (
      <footer className="bg-dark border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/images/logo.png"
                  alt="Your Company Logo" 
                  className="h-8 w-24 object-contain" 
                />
              </div>
              <p className="text-gray-400">
                Empowering eCommerce businesses with expert Amazon services.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {links.legal.map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;