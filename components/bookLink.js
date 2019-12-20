import Link from "next/link";
import slugify from "slugify";

const BookLink = ({ title, id }) => {
  const sluggedTitle = slugify(title);
  return (
    <Link as={`/book-details/${sluggedTitle}-${id}`} href={`book?id=${id}`}>
      <a>{title}</a>
    </Link>
  );
};

export default BookLink;
