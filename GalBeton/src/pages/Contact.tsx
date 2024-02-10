import ContactForm from "../components/Forms/ContactForm";

interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <>
      <main className="mx-44 mt-9">
        <h1 className="text-center text-5xl font-bold mb-4">
          Зв'яжіться з Гал<span className="">Бетон</span>
        </h1>
        <p className="text-center">
          Наша команда завжди готова відповісти на будь-яке ваше запитання. Ми з
          нетерпінням чекаємо на ваш дзвінок
        </p>
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;
