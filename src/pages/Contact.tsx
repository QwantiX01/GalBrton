import ContactForm from "../components/Forms/ContactForm";
import ContactInfo from "../components/Forms/ContactInfo";

interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <>
      <main className="mx-56 mt-9 p-6">
        <h1 className="text-center text-5xl font-bold mb-4">
          Зв'яжіться з Гал<span className="">Бетон</span>
        </h1>
        <p className="text-center">
          Наша команда завжди готова відповісти на будь-яке ваше запитання. Ми з
          нетерпінням чекаємо на ваш дзвінок
        </p>
        <h1 className="mt-8 text-2xl font-bold">Заповніть форму:</h1>
        <ContactForm />
        <h1 className="my-8 text-2xl font-bold">
          Або зв'яжіться з нами особисто
        </h1>
        <ContactInfo
          icon="call"
          title={"123-456-7891"}
          description={"8:00 - 17:00"}
        />
        <ContactInfo
          icon="send"
          title={"Email"}
          description={"qwantiix01@gmail.com"}
        />
        <ContactInfo
          icon="location_on"
          title={"Адреса"}
          description={"вул. Луганська 123"}
        />
      </main>
    </>
  );
};

export default Contact;
