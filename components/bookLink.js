import Link from "next/link";

const BookLink = ({ title, id }) => {
  return (
    <Link href={`book?id=${id}`}>
      <a>{title}</a>
    </Link>
  );
};

export default BookLink;
