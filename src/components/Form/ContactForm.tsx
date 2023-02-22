import { useRef, useState } from "react";

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      nameRef.current &&
      phoneRef.current &&
      emailRef.current &&
      subjectRef.current &&
      msgRef.current
    ) {
      const { value: name } = nameRef.current;
      const { value: phone } = phoneRef.current;
      const { value: email } = emailRef.current;
      const { value: subject } = subjectRef.current;
      const { value: message } = msgRef.current;
      const myForm = {
        name,
        phone,
        email,
        subject,
        message,
      };

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...myForm }),
      })
        .then(() => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 2500);
        })
        .catch((err) => alert(err));

      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      msgRef.current.value = "";
    }
  };

  return (
    <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Name</label>
              <input
                ref={nameRef}
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Phone Number</label>
              <input
                ref={phoneRef}
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                name="phone"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Email</label>
            <input
              ref={emailRef}
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Subject</label>
            <input
              ref={subjectRef}
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Message</label>
            <textarea
              ref={msgRef}
              className="p-3 border-2 border-gray-300 rounded-lg"
              name="message"
              rows={10}
              required
            />
          </div>
          {showSuccess && (
            <span className="float-right mt-3 text-xl font-semibold text-green-500">
              Submission successful.
            </span>
          )}
          <button className="w-full p-4 mt-4 text-gray-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
