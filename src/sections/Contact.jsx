import { paperplane } from "../assets/icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-dark-green flex max-md:flex-col max-md:pb-20 lg:p-20 p-5 gap-20"
    >
      <div className=" flex flex-col justify-center max-md:items-center">
        <h1 className="font-montserrat font-bold lg:text-6xl text-4xl text-brand-beige pt-10">
          Contact
        </h1>
        <p className="font-montserrat lg:text-lg text-base text-white">
          Got any recommendations on where I should study next? let me know!
        </p>
      </div>
      <div className=" flex items-center justify-center px-5 gap-5 border rounded-xl border-brand-beige">
        <img src={paperplane} alt="email" width={25} height={25} />
        <p className="font-montserrat font-bold text-white lg:text-3xl text-xl p-5">
          jreyes1919@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
