
import { Heart, Coffee, Code } from "lucide-react";
import photo from "../../public/photo.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Про мене
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Дозвольте розповісти вам трохи про себе
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Моя історія
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Привіт! Мене звати Владислав Салатенко, і я захоплююсь створенням контенту та діленням своїм досвідом з іншими. 
              Цей блог - це місце, де я ділюся своїми думками, проектами та всім, що мене надихає.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Я вірю, що кожна історія має значення, і кожен досвід може стати джерелом натхнення для інших. 
              Тому я вирішив створити цей простір для спілкування та обміну ідеями.
            </p>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-gray-600">
                <Heart className="mr-2 text-red-500" size={20} />
                <span>Люблю творчість</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Coffee className="mr-2 text-brown-500" size={20} />
                <span>Какао</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Code className="mr-2 text-blue-500" size={20} />
                <span>Технології</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-64 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold"><img src={photo} style={{borderRadius:'50%'}} /></span>
                </div>
                <p className="pt-20">Тут ви можете подивитись на мене</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
