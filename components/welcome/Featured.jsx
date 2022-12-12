// eslint-disable-next-line react/prop-types
const Featured = ({ img, title, desc, className }) => (
  <div className={`box px-4 py-6 shadow rounded-md mx-4 ${className || null}`}>
    <div className="icon">
      <img className="w-[80px]" src={img} alt="" />
    </div>
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="mt-4 text-gray-500">
        {desc}
    </p>
  </div>
);
export default Featured;