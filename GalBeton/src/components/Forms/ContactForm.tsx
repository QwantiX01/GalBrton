interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  return (
    <form className="mt-8 w-min">
      <div className="flex flex-col gap-4">
        <div className="flex gap-6">
          <div className="flex flex-col items-start gap-4">
            <label htmlFor="firstName" className="text-xl">
              Ім'я
            </label>
            <input
              id="firstName"
              className="focus: outline-none bg-black p-3 border-solid border-gray-600 border-2 rounded-xl"
              placeholder="Ваше ім'я"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <label htmlFor="lastName" className="text-xl">
              Прізвище
            </label>
            <input
              id="lastName"
              className="focus: outline-none bg-black p-3 border-solid border-gray-600 border-2 rounded-xl"
              placeholder="Ваше Прізвище"
              type="text"
            />
          </div>
        </div>
        <label htmlFor="lastName" className="text-xl">
          електронна пошта
        </label>
        <input
          id="lastName"
          className="focus: outline-none bg-black p-3 border-solid border-gray-600 border-2 rounded-xl"
          placeholder="Ваша електронна пошта"
          type="text"
        />
      </div>
    </form>
  );
};

export default ContactForm;
