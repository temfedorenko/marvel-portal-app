import { Helmet } from "react-helmet";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={`404 error page`} />
        <title>Page doesn't exist</title>
      </Helmet>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
          color: "#9f0013",
          textDecoration: "underline",
        }}
        to="/">
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
