import { ErrorPage } from "../components/errorPage";
import React from "react";

export function MultipleChoices({ customText }) {
  const errorMessage = customText || "Multiple Choices";
  return (
    <>
      <ErrorPage errorCode="300" errorMessage={errorMessage} />
    </>
  );
}

export function MovedPermanently({ customText }) {
  const errorMessage = customText || "Moved Permanently";
  return (
    <>
      <ErrorPage errorCode="301" errorMessage={errorMessage} />
    </>
  );
}

export function Found({ customText }) {
  const errorMessage = customText || "Found";
  return (
    <>
      <ErrorPage errorCode="302" errorMessage={errorMessage} />
    </>
  );
}

export function SeeOther({ customText }) {
  const errorMessage = customText || "See Other";
  return (
    <>
      <ErrorPage errorCode="303" errorMessage={errorMessage} />
    </>
  );
}

export function NotModified({ customText }) {
  const errorMessage = customText || "Not Modified";
  return (
    <>
      <ErrorPage errorCode="304" errorMessage={errorMessage} />
    </>
  );
}

export function UseProxy({ customText }) {
  const errorMessage = customText || "Use Proxy";
  return (
    <>
      <ErrorPage errorCode="305" errorMessage={errorMessage} />
    </>
  );
}

export function SwitchProxy({ customText }) {
  const errorMessage = customText || "Switch Proxy";
  return (
    <>
      <ErrorPage errorCode="306" errorMessage={errorMessage} />
    </>
  );
}

export function TemporaryRedirect({ customText }) {
  const errorMessage = customText || "Temporary Redirect";
  return (
    <>
      <ErrorPage errorCode="307" errorMessage={errorMessage} />
    </>
  );
}

export function PermanentRedirect({ customText }) {
  const errorMessage = customText || "Permanent Redirect";
  return (
    <>
      <ErrorPage errorCode="308" errorMessage={errorMessage} />
    </>
  );
}
