import { FaUser, FaPhoneAlt, FaLaptop, FaAngleRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Contact() {
    return (
        <div>
            <section>
                <div className="bg-[url('./bg1.jpg')] mt-18 bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-center min-h-screen">
                    <div className="text-center text-white text-5xl font-[700] m-5">Contact Us</div>
                    <form className="w-full max-w-[800px] p-2 flex flex-col items-center gap-8">
                        {[
                            { placeholder: "Full Name*", icon: <FaUser /> },
                            { placeholder: "Email Address*", icon: <MdOutlineMailOutline /> },
                            { placeholder: "Phone Number*", icon: <FaPhoneAlt /> },
                            { placeholder: "Company", icon: <FaLaptop /> },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between w-full p-2 text-black bg-white border-2 border-[#033768] rounded-2xl text-xl"
                            >
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="w-full p-2 text-lg outline-none bg-transparent"
                                />
                                {item.icon}
                            </div>
                        ))}

                        <div className="flex items-center justify-between w-full p-2 text-black bg-white border-2 border-[#033768] rounded-2xl text-xl">
                            <textarea
                                placeholder="How can I help you?"
                                className="w-full p-2 text-lg outline-none bg-transparent"
                            />
                            <IoIosHelpCircleOutline />
                        </div>

                        <h2 className="text-white text-2xl font-medium text-center">What services are you interested in?</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                            {[
                                { name: 'Pay Per Click Marketing', img: 'ppc-marketing.png' },
                                { name: 'Search Engine Optimization', img: 'seo.png' },
                                { name: 'Website Design & Development', img: 'web-design.png' },
                                { name: 'Email & SMS Marketing', img: 'email-marketing.png' },
                                { name: 'Social Media Management', img: 'social-media.png' },
                                { name: 'Others', img: 'more.png' }
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-white text-indigo-600 rounded-lg p-4"
                                >
                                    <input type="checkbox" className="w-5 h-5 mb-2" />
                                    <img src={service.img} alt={service.name} className="w-14 h-14 mb-2" />
                                    <label className="text-sm font-semibold text-center">{service.name}</label>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center w-full h-[70px] rounded-lg cursor-pointer mt-10">
                            <button
                                type="submit"
                                className="w-full bg-[#033768] text-white text-3xl font-bold py-3 rounded-xl"
                            >
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section>
                <iframe
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    src="https://www.youtube.com/embed/gAX6i9Mz3lY?autoplay=1&mute=1&loop=1&playlist=gAX6i9Mz3lY&controls=0&modestbranding=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </section>

            <section>
                <div className="flex flex-col items-center justify-center w-full h-[500px]">
                    <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium text-[#f1f1f2] mb-5">Follow Sitesence</h1>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full p-5">
                        {[
                            { platform: "Twitter", img: "twitter.png", action: "Follow Us" },
                            { platform: "Instagram", img: "instagram.png", action: "Join Us" },
                            { platform: "Facebook", img: "facebook.png", action: "Like Us" },
                            { platform: "LinkedIn", img: "linkedin.png", action: "Connect Us" },
                            { platform: "Pinterest", img: "pinterest.png", action: "Pin Us" },
                            { platform: "Website", img: "web.png", action: "Subscribe" },
                        ].map((social, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center text-center rounded-md p-2"
                            >
                                <a href="#">
                                    <img
                                        src={social.img}
                                        alt={social.platform}
                                        className="w-14 h-14 rounded-full"
                                    />
                                </a>
                                <h2 className="py-2 text-lg font-medium">{social.action}</h2>
                                <p className="text-sm font-normal text-[#ffffff]">Stay connected with us!</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
