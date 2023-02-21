const ContactForm = () => {
  return (
    <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Name</label>
              <input
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Phone Number</label>
              <input
                className="flex p-3 border-2 border-gray-300 rounded-lg"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Email</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Subject</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 text-sm uppercase">Message</label>
            <textarea
              className="p-3 border-2 border-gray-300 rounded-lg"
              rows={10}
            />
          </div>
          <button className="w-full p-4 mt-4 text-gray-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
