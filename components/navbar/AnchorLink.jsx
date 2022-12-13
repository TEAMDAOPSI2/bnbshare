import Link from 'next/link';

const AnchorLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href, children } = props;
  return (
    <div className="p-3 text-black hover:text-emerald-400 z-10">
      <Link href={href} className="">
          {children}
      </Link>
    </div>
  );
};
export default AnchorLink;