import Property from "@/components/Property";

const ListProperties = () => (
  <section className="relative">
    <div className="w-full absolute -top-8">
      <div className="md:max-w-[460px] bg-white grid grid-cols-3 gap-2 shadow rounded-full p-2 mx-auto">
        <button className="bg-primary py-3 px-6 rounded-full text-white transition ease-in-out duration-150 hover:bg-primary-hover">
          Available
        </button>
        <button className="py-3 px-6 rounded-full text-black hover:text-white transition ease-in-out duration-150 hover:bg-primary-hover">
          Founded
        </button>
        <button className="py-3 px-6 rounded-full text-black hover:text-white transition ease-in-out duration-150 hover:bg-primary-hover">
          Exited
        </button>
      </div>
    </div>
    <div className="container py-11 px-3 mx-auto">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-6 overflow-x-hidden">
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
        </div>
    </div>
  </section>
);

export default ListProperties;
