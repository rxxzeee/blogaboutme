
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма відправлена:", formData);
    // Тут буде логіка відправки форми
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Зв'язатися зі мною
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Маєте питання або просто хочете поговорити? Я завжди радий новим знайомствам!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Електронна пошта
                </h3>
                <p className="text-gray-600">
                  salatenko7@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Соціальні мережі
                </h3>
                <div className="flex flex-col space-y-2 text-gray-600">
                  <a href="https://t.me/themostcursedenemy" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                  <a href="https://www.instagram.com/rxxzeee?igsh=MTg2Z2U5Njh3cmw%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/vladislav-salatenko-98240a31a/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://github.com/rxxzeee" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Про що ми можемо поговорити:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Співпраця над проектами</li>
                <li>• Обмін досвідом</li>
                <li>• Просто цікава розмова</li>
                <li>• Ваші ідеї та пропозиції</li>
              </ul>
            </div>
          </div>

          {/* <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Як вас звати?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Електронна пошта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Розкажіть, що вас цікавить..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Відправити повідомлення
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
