interface ContactFormProps {}

const ContactForm = ({}: ContactFormProps) => {
  return (
    <div className="flex items-end">
      <form>
        <div className="mt-8 w-min border-solid border-gray-600 border-[1px] rounded-xl p-5">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="flex flex-col items-start gap-4">
                <label htmlFor="firstName" className="text-xl">
                  Ім'я*
                </label>
                <input
                  name="firstName"
                  id="firstName"
                  className="focus: outline-none bg-black px-3 py-4 border-solid border-gray-600 border-[1px] rounded-xl"
                  placeholder="Ваше ім'я"
                  type="text"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <label htmlFor="lastName" className="text-xl">
                  Прізвище*
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  className="focus: outline-none bg-black px-3 py-4 border-solid border-gray-600 border-[1px] rounded-xl"
                  placeholder="Ваше Прізвище"
                  type="text"
                />
              </div>
            </div>
            <label htmlFor="number" className="text-xl">
              Номер телефону
            </label>
            <input
              name="number"
              id="number"
              className="focus: outline-none bg-black px-3 py-4 border-solid border-gray-600 border-[1px] rounded-xl"
              placeholder="Ваш номер телефону"
              type="text"
            />
            <label htmlFor="email" className="text-xl">
              Eлектронна пошта
            </label>
            <input
              name="email"
              id="email"
              className="focus: outline-none bg-black px-3 py-4 border-solid border-gray-600 border-[1px] rounded-xl"
              placeholder="Ваша електронна пошта"
              type="text"
            />
            <label htmlFor="message" className="text-xl">
              Додаткова інформація
            </label>
            <textarea
              name="message"
              id="message"
              className="focus: outline-none bg-black px-3 py-4 border-solid border-gray-600 border-[1px] rounded-xl h-52 break-words"
              placeholder="Введіть ваше повідомлення..."
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-white block text-black px-4 ml-auto mt-8 py-2 rounded-xl font-mono font-bold"
        >
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
