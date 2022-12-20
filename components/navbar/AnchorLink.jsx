import Link from 'next/link';

const AnchorLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href, children, className } = props;
  return (
    <div className={`p-3 text-white sm:text-black hover:text-gray-400 sm:hover:text-primary-hover z-10 ${className || null}`}>
      <Link href={href} className="font-medium">
        {children}
      </Link>
    </div>
  );
};
export default AnchorLink;
