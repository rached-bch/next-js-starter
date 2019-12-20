import Layout from "../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Book = props => {
  const book = props.book;

  return (
    <Layout>
      <Head>
        <title>Book page</title>
        <meta name="description" content="Description of the book page..." />
      </Head>
      <h1>Book page</h1>

      {book.Title && (
        <div>
          <h2>{book.Title}</h2>
          <p>{book.Excerpt}</p>
        </div>
      )}
    </Layout>
  );
};

Book.getInitialProps = async context => {
  //console.log({ context });
  const bookId = context.query.id;
  const result = await fetch(
    `https://fakerestapi.azurewebsites.net/api/Books/${bookId}`
  );
  const book = await result.json();
  return {
    book
  };
};

export default Book;
