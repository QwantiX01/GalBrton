function Footer() {
  return (
    <footer className="border-t border-shark-950">
      <div className=" mx-44 px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Company Name</h3>
            <p className="text-sm">
              Створюємо інноваційні рішення для вашого бізнесу з 2020 року
            </p>
            <div className="space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Контакти</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>вул. Примірна, 123, Київ</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+380 44 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>contact@company.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2024 Company Name. Всі права захищені.</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Політика конфіденційності
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Умови використання
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
