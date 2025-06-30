
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-1 text-gray-400">
            <span>Зроблено з</span>
            <Heart className="text-red-400" size={16} />
            <span>в Україні</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            © 2025 Salatenko Vladislav
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
