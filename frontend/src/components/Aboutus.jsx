import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const emailAddress = "schooldks2022@gmail.com";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 bg-cover bg-center ${
         "bg-blue-300 text-black"
      }`} // Adjust background and text colors
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            "text-black"
          }`}
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className={`text-lg font-bold leading-relaxed mb-6 ${
                "text-black"
              }`}
            >
              Waxaad nagala soo xiriiri kartaa macluumaadka hoos ku qoran:
            </p>
            <div className="flex space-x-8 mb-6">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <img
                  src="DarulkarimLogo.png"
                  alt="Darulkarim"
                  className="w-14 h-14 md:w-20 md:h-20"
                />
                <span className=" text-lg md:text-2xl font-semibold text-red-500">
                  DARUL-KARIM PRIMARY <br /> & SECONDARY SCHOOL
                </span>
              </a>
            </div>
            <ul className="list-disc list-inside mb-4 flex flex-col space-y-6">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt size={35} className="rounded-full p-1 mr-2" />
                Address: 30th Street, Hodan District, Mogadishu-Somalia
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt size={35} className="rounded-full p-1 mr-2" />
                Phone:{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=+252613777623&text=Darulkarim"
                  className="hover:text-blue-900 hover:font-bold hover:underline"
                >
                  {" "}
                  +252613777623{" "}
                </a>
                |
                <a
                  href="https://api.whatsapp.com/send?phone=+252615633116&text=Darulkarim"
                  className="hover:text-blue-900 hover:font-bold hover:underline"
                >
                  +252615633116{" "}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope size={35} className="rounded-full p-1 mr-2" />
                Email:{" "}
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-blue-900 ml-2 font-bold"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>
            <div className="flex space-x-2 md:space-x-8 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=100057218268902"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <FaFacebook size={35} className="rounded-full p-1" />
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <FaTwitter size={35} className="rounded-full p-1" />
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <FaInstagram size={35} className="rounded-full p-1" />
                Instagram
              </a>
            </div>
          </div>
          <div>
            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <label
                  className={`block text-lg font-medium mb-1 ${
                     "text-black"
                  }`}
                >
                  Magaca:
                </label>
                <input
                  type="text"
                  required
                  className={`w-full border border-gray-300 rounded-md p-2 ${
                
                       "bg-white text-gray-800"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-lg font-medium mb-1 ${
                  "text-black"
                  }`}
                >
                  Email:
                </label>
                <input
                  type="email"
                  required
                  className={`w-full border border-gray-300 rounded-md p-2 ${
                   
                      "bg-white text-gray-800"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-lg font-medium mb-1 ${
                    "text-black"
                  }`}
                >
                  Fariinta:
                </label>
                <textarea
                  required
                  rows="4"
                  className={`w-full border border-gray-300 rounded-md p-2 ${
                    "bg-white text-gray-800"
                  }`}
                ></textarea>
              </div>
              <button className="bg-green-600 block w-full text-center text-black py-2 px-4 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </motion.form>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.285848520958!2d77.6309395148216!3d13.01185019081273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44c6d%3A0xf8cc46b52781525b!2sYour%20School%20Location!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            onClick={() => {
              window.location.href =
                "https://www.google.com/maps/search/Albaraka,+HODAN+DISTRICT,+MOGADISHU,%C2%A0SOMALIA/@2.0521362,45.3097859,17z?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D";
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
