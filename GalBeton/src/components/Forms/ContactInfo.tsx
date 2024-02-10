interface ContactInfoProps {
  icon: string;
  title: string;
  description: string;
}

const ContactInfo = ({ icon, title, description }: ContactInfoProps) => {
  return (
    <div className="flex gap-4 mb-4 items-center">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <span className="material-symbols-outlined bg-neutral-900 p-4 rounded-xl">
        {icon}
      </span>
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
