
import { Lightbulb, Target, Users, Rocket } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: "Креативність",
      description: "Люблю знаходити нестандартні рішення та генерувати ідеї"
    },
    {
      icon: Target,
      title: "Цілеспрямованість",
      description: "Завжди досягаю поставлених цілей та не здаюсь на півдорозі"
    },
    {
      icon: Users,
      title: "Комунікація",
      description: "Вмію спілкуватися та працювати в команді"
    },
    {
      icon: Rocket,
      title: "Інновації",
      description: "Постійно вивчаю нові технології та підходи"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Мої навички
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Те, що я роблю найкраще та що мене надихає
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Хочете дізнатися більше?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Я завжди відкритий для нових можливостей та цікавих проектів
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Зв'язатися зі мною
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
