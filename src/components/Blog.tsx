import { useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import photo1 from "../../public/photo1.jfif"
import photo2 from "../../public/photo2.jfif"
import photo3 from "../../public/photo3.jfif"

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Моя перша публікація",
      excerpt: "Вітаю всіх на моєму блозі! Це початок нової подорожі...",
      fullText:
        "Вітаю всіх на моєму блозі! Це початок нової подорожі, де я буду ділитися своїми думками, досвідом та відкриттями. Дякую, що ви поцікавились мною, сподіваюсь що ви будете зацікавленні!",
      date: "30 травня 2025",
      readTime: "3 хв читання",
      category: "Особисте",
      image: photo1,
    },
    {
      id: 2,
      title: "Як я навчився новому",
      excerpt:
        "Сьогодні хочу поділитися досвідом вивчення чогось нового та викликами, з якими я зіткнувся...",
      fullText:
        "Це був складний, але цікавий шлях. Я вчився щодня, зустрічався з труднощами, але завдяки наполегливості досягнув бажаного результату.Свій шлях я почав ще зі школи коли на уроках інформатики вивчав базові мови програмування, але не побачишви в цьому перспективи швидко перейшов на те, що мені більше подобається, вже в університеті я почав працювати над сайтом мікрокурсів і кваліфікацій для цього ж університету, те дізнався і вивчив багато нового, а також покращив свої навички у програмування до впевненого кодера React",
      date: "03 червня 2023",
      readTime: "5 хв читання",
      category: "Навчання",
      image: photo2,
    },
    {
      id: 3,
      title: "Мої улюблені інструменти",
      excerpt:
        "Розповідаю про інструменти та ресурси, які допомагають мені у повсякденному житті...",
      fullText:
        "Я використовую різноманітні інструменти: VS Code в якому я пишу весь свій код і всі проєкти, GitHub де я зберігаю свої проєкти на ділюсь ними з іншими, Figma яку використовую як шаблон для сайту від дизайнера",
      date: "5 грудня 2024",
      readTime: "4 хв читання",
      category: "Технології",
      image: photo3,
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Мій блог
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Останні думки, ідеї та історії з мого життя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img src={post.image} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Читати далі
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">

        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-xl max-w-lg w-full relative
                      transition-all duration-300 transform opacity-0 scale-95 animate-fadeIn"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {selectedPost.category} | {selectedPost.date} |{" "}
              {selectedPost.readTime}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {selectedPost.fullText}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
