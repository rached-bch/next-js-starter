import Layout from "../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = props => {
  const books = props.books;

  return (
    <Layout>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Description of the home page..." />
      </Head>
      <h1>Home page</h1>
      <h2>Book list</h2>
      {books.length &&
        books.map(book => {
          //console.log({ book });
          return (
            <div className="card" key={book.ID}>
              <div className="card-body">
                <h5 className="card-title">{book.Title}</h5>
                <p className="card-text">{book.Description}</p>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

Index.getInitialProps = async context => {
  console.log({ context });
  const result = await fetch(`https://fakerestapi.azurewebsites.net/api/Books`);
  const books = await result.json();
  return {
    books
  };
};

export default Index;
