import React from "react";
import { Button } from "~/components";

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div className="w-full h-screen bg-black z-40 absolute flex flex-col text-white justify-center">
      <div className="w-1/3 mx-auto text-center space-y-4 flex flex-col">
        <h1 className="text-3xl">{statusCode}</h1>
        <p className="text-xl">{message}</p>
        <Button link={"/"}>Повернутися на головну</Button>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res
    ? "An error occurred on the server"
    : err
      ? err.message
      : "An error occurred on the client";

  return { statusCode, message };
};

export default ErrorPage;
