import Property from '@/components/Property';
// eslint-disable-next-line import/extensions
import supabase from '@/utils/api';
import { useEffect, useState } from 'react';

const ListProperties = () => {

  const refactoredData = (data) => {
    const temp = {};
    data.forEach((item) => {
      if (temp[item.id]) {
        temp[item.id].image_url.push(item?.image_url);
      } else {
        temp[item.id] = {
          ...item,
          image_url: [item?.image_url],
        };
      }
    });
    return Object.values(temp);
  }

  async function getProperties() {
    // select all properties inner join with images
    const { data } = await supabase.from('properties_view').select('*');
    return refactoredData(data);
  }


  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getProperties().then((data) => setProperties(data));
  }, []);

  return (
    <section className="relative">
      <div className="w-full absolute -top-8">
        <div className="md:max-w-[460px] bg-white grid grid-cols-3 gap-2 shadow rounded-full p-2 mx-auto">
          <button className="bg-primary py-3 px-6 rounded-full text-white transition ease-in-out duration-150 hover:bg-primary-hover">
            Available
          </button>
          <button className="py-3 px-6 rounded-full text-black hover:text-white transition ease-in-out duration-150 hover:bg-primary-hover">
            Funded
          </button>
          <button className="py-3 px-6 rounded-full text-black hover:text-white transition ease-in-out duration-150 hover:bg-primary-hover">
            Exited
          </button>
        </div>
      </div>
      <div className="container py-11 px-3 mx-auto overflow-x-hidden">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-6">
          {properties.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProperties;
