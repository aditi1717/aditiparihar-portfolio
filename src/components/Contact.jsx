import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const sendEmail=(e)=>{
       e.preventDefault();
       // Set the time value in the hidden input
		form.current.time.value = new Date().toLocaleString();
            emailjs
                .sendForm(
                    "service_3rr7sdk", // Replace with your EmailJS Service ID
                    "template_t69da8k", // Replace with your EmailJS Template ID
                    form.current,
                    "s7jiMdPGCtXAnQ10Z" // Replace with your EmailJS Public Key
                )
                .then(
                    () => {
                        setIsSent(true);
                        form.current.reset(); // Reset form fields after sending
                        toast.success("Message sent successfully! ✅", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "dark",
                        });
                    },
                    (error) => {
                        console.error("Error sending message:", error);
                        toast.error("Failed to send message. Please try again.", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "dark",
                        });
                    }
                );
    }
      
  return (
   <section id='contact' className='max-w-[900px] px-6 mx-auto pt-25 md:pt-40 space-y-10 md:space-y-16 flex flex-col items-center text-center'>
        {/* section title */}
         <div className='text-center space-y-3'>
              <h1 className='text-2xl xs:text-3xl font-bold text-white md:text-4xl'>{'Contact'.toUpperCase()}</h1>
           <div className="h-1 max-w-40 bg-[#8245ec] mx-auto"></div>
           <p className='xs:text-base text-[14px]  text-gray-400  md:text-[17px] lg:text-lg font-bold'>I’d love to hear from you—reach out for any opportunities or questions!</p>
         </div>


         {/* toastContainer */}
         <ToastContainer/>

         {/* form  */}
         <div className='w-full bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 space-y-6 max-w-[430px]'>
            <h2 className='text-white text-lg xs:text-xl font-semibold'>Connect With Me <span className="ml-1">🚀</span></h2>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                <input type="email" name="email" placeholder='Your Email' required className='text-sm xs:text-base p-3 rounded-md bg-[#131025] text-white  font-normal border border-gray-600 focus:outline-none focus:border-purple-500'/>
                 <input type="text" name="name" placeholder='Your Name' required className='text-sm xs:text-base font-normal w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
                  <input type="text" name="subject" placeholder='Subject' required className='text-sm xs:text-base font-normal w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
                  <input type="hidden" name="time" />
                  <textarea name="message" placeholder='Message' rows={4} required className='text-sm xs:text-base font-normal w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'></textarea>
                  {/* Send Button */}
					<button
						type="submit"
						className=" w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 xs:py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
					>
						Send
					</button>
            </form>
         </div>

   </section>
  )
}
