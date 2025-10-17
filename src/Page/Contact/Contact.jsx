import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaFacebook, FaPhone, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      "service_0ceg3hn",     // Replace with your EmailJS service ID
      "template_ywg3j7l",    // Replace with your EmailJS template ID
      data,
      "Yz-Mi4wglXp0aNGFu"    // Replace with your EmailJS public key
    )
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Message failed to send!");
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-purple-950 text-white py-16 px-5 md:px-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl mt-5 font-bold text-center text-cyan-400 mb-12">
        Let’s Work Together 🤝
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 items-start">
        {/* Left Section - Contact Form */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-300">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full bg-transparent border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full bg-transparent border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border border-gray-500 p-3 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Info */}
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="w-full md:w-1/2 space-y-6 text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            I'm currently available for new projects, collaborations, or freelance opportunities.  
            Feel free to contact me anytime — I usually respond within a few hours!
          </p>

          <div className="space-y-3">
            <h1 className="flex items-center gap-2 text-xl">
              <FaWhatsapp className="text-green-500" /> 
              <a href="https://wa.me/8801817551314" target="_blank" rel="noreferrer">
                +88 01817551314
              </a>
            </h1>
            <h1 className="flex items-center gap-2 text-xl">
              <MdEmail className="text-red-500" /> 
              <a href="mailto:ashikkhan314167@gmail.com" target="_blank" rel="noreferrer">
                ashikkhan314167@gmail.com
              </a>
            </h1>
          </div>

          <div className="flex gap-6 mt-5">
            <a href="https://facebook.com/profile.php?id=100069225215551" target="_blank" rel="noreferrer">
              <FaFacebook className="text-3xl hover:text-blue-500 hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/ashik-khan-44abbb300/" target="_blank" rel="noreferrer">
              <LiaLinkedin className="text-3xl hover:text-blue-400 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/ashikkhan34" target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl hover:text-gray-400 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full mt-12 rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d29153.656313419375!2d89.37957905!3d24.023763149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1743068703900!5m2!1sen!2sbd"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
