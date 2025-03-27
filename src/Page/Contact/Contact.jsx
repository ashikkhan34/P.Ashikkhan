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
            "Yz-Mi4wglXp0aNGFu"      // Replace with your EmailJS public key
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been send successful",
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
        <div className="  gap-10 pt-28 bg-gradient-to-r from-black via-blue-900 to-purple-950 py-10">
            <div className="md:flex gap-10">
                <div data-aos="fade-right"
                        data-aos-duration="3000" className="w-6/12">
                    <div className="max-w-xl mx-auto bg-indigo-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-center mb-4 text-purple-500">Let’s work
                            together!</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full border p-2 rounded"
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full border p-2 rounded"
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full border p-2 rounded h-24"
                                />
                                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-duration="3000" className="w-6/12 space-y-6">
                    <h1 className="text-2xl text-cyan-400" >I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.</h1>
                    <h1 className="flex items-center gap-1 text-xl "><FaWhatsapp className="text-green-500"></FaWhatsapp> +88 01817551314</h1>
                    <h1 ><a className="flex items-center gap-1 text-xl underline text-blue-300" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"> <MdEmail></MdEmail> ashikkhan314167@gmail.com</a></h1>


                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="grid grid-flow-col gap-4">
                        <div className='flex gap-5 mb-5'>
                            <a href="https://www.facebook.com/profile.php?id=100069225215551" target='_blank'> <FaFacebook className='text-3xl text-blue-600'></FaFacebook> </a>
                            <a href="https://www.linkedin.com/in/ashik-khan-44abbb300/ " target='_blank'>  <LiaLinkedin className='text-3xl bg-blue-600'></LiaLinkedin> </a>
                            <a href="https://github.com/ashikkhan34" target='_blank'> <FaGithub className='text-3xl '></FaGithub> </a>
                        </div>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="mt-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d29153.656313419375!2d89.37957905!3d24.023763149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1743068703900!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;
