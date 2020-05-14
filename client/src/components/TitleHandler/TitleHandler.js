import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const TitleHandler = (props) => {
  const toTitleCase = (txt) => {
    return txt.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const turn = useSelector((state) => state.navTwist.turn);
  const authForm = useSelector((state) => state.loginRegister.authForm);
  const page = useSelector((state) => state.misc.page);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Helmet>
        <title>
          {
            {
              home: "Emfort - Home",
              contact: "Emfort - Contact Us!",
              profile: `${
                user ? `@${user.username} <- Emfort` : "Something went wrong!"
              }`,
              market: "Emfort - Market",
              assets: `${
                user ? `Assets - @${user.username}` : "Something went wrong!"
              }`,
            }[page]
          }
        </title>
      </Helmet>
      {turn ? (
        <Helmet>
          <title>{"Navigate <- Emfort"}</title>
        </Helmet>
      ) : null}
      {authForm ? (
        <Helmet>
          <title>{toTitleCase(authForm) + " <- Emfort"}</title>
        </Helmet>
      ) : null}
    </>
  );
};

export default TitleHandler;
