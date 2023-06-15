import { ErrorPage } from "../components/errorPage";
import React from "react";

export function BadRequest({ customText }) {
  const errorMessage = customText || "Bad Request";
  return (
    <>
      <ErrorPage errorCode="400" errorMessage={errorMessage} />
    </>
  );
}

export function Unauthorized({ customText }) {
  const errorMessage = customText || "Unauthorized";
  return (
    <>
      <ErrorPage errorCode="401" errorMessage={errorMessage} />
    </>
  );
}

export function PaymentRequired({ customText }) {
  const errorMessage = customText || "Payment Required";
  return (
    <>
      <ErrorPage errorCode="402" errorMessage={errorMessage} />
    </>
  );
}

export function Forbidden({ customText }) {
  const errorMessage = customText || "Forbidden";
  return (
    <>
      <ErrorPage errorCode="403" errorMessage={errorMessage} />
    </>
  );
}

export function NotFound({ customText }) {
  const errorMessage = customText || "Page Not Found";
  return (
    <>
      <ErrorPage errorCode="404" errorMessage={errorMessage} />
    </>
  );
}

export function MethodNotAllowed({ customText }) {
  const errorMessage = customText || "Method Not Allowed";
  return (
    <>
      <ErrorPage errorCode="405" errorMessage={errorMessage} />
    </>
  );
}

export function NotAcceptable({ customText }) {
  const errorMessage = customText || "Not Acceptable";
  return (
    <>
      <ErrorPage errorCode="406" errorMessage={errorMessage} />
    </>
  );
}

export function ProxyAuthenticationRequired({ customText }) {
  const errorMessage = customText || "Proxy Authentication Required";
  return (
    <>
      <ErrorPage errorCode="407" errorMessage={errorMessage} />
    </>
  );
}

export function RequestTimeout({ customText }) {
  const errorMessage = customText || "Request Timeout";
  return (
    <>
      <ErrorPage errorCode="408" errorMessage={errorMessage} />
    </>
  );
}

export function Conflict({ customText }) {
  const errorMessage = customText || "Conflict";
  return (
    <>
      <ErrorPage errorCode="409" errorMessage={errorMessage} />
    </>
  );
}

export function Gone({ customText }) {
  const errorMessage = customText || "Gone";
  return (
    <>
      <ErrorPage errorCode="410" errorMessage={errorMessage} />
    </>
  );
}

export function LengthRequired({ customText }) {
  const errorMessage = customText || "Length Required";
  return (
    <>
      <ErrorPage errorCode="411" errorMessage={errorMessage} />
    </>
  );
}

export function PreconditionFailed({ customText }) {
  const errorMessage = customText || "Precondition Failed";
  return (
    <>
      <ErrorPage errorCode="412" errorMessage={errorMessage} />
    </>
  );
}

export function PayloadTooLarge({ customText }) {
  const errorMessage = customText || "Payload Too Large";
  return (
    <>
      <ErrorPage errorCode="413" errorMessage={errorMessage} />
    </>
  );
}

export function URITooLong({ customText }) {
  const errorMessage = customText || "URI Too Long";
  return (
    <>
      <ErrorPage errorCode="414" errorMessage={errorMessage} />
    </>
  );
}

export function UnsupportedMediaType({ customText }) {
  const errorMessage = customText || "Unsupported Media Type";
  return (
    <>
      <ErrorPage errorCode="415" errorMessage={errorMessage} />
    </>
  );
}

export function RangeNotSatisfiable({ customText }) {
  const errorMessage = customText || "Range Not Satisfiable";
  return (
    <>
      <ErrorPage errorCode="416" errorMessage={errorMessage} />
    </>
  );
}

export function ExpectationFailed({ customText }) {
  const errorMessage = customText || "Expectation Failed";
  return (
    <>
      <ErrorPage errorCode="417" errorMessage={errorMessage} />
    </>
  );
}

export function ImATeapot({ customText }) {
  const errorMessage = customText || "I'm a Teapot";
  return (
    <>
      <ErrorPage errorCode="418" errorMessage={errorMessage} />
    </>
  );
}

export function MisdirectedRequest({ customText }) {
  const errorMessage = customText || "Misdirected Request";
  return (
    <>
      <ErrorPage errorCode="421" errorMessage={errorMessage} />
    </>
  );
}

export function UnprocessableEntity({ customText }) {
  const errorMessage = customText || "Unprocessable Entity";
  return (
    <>
      <ErrorPage errorCode="422" errorMessage={errorMessage} />
    </>
  );
}

export function Locked({ customText }) {
  const errorMessage = customText || "Locked";
  return (
    <>
      <ErrorPage errorCode="423" errorMessage={errorMessage} />
    </>
  );
}

export function FailedDependency({ customText }) {
  const errorMessage = customText || "Failed Dependency";
  return (
    <>
      <ErrorPage errorCode="424" errorMessage={errorMessage} />
    </>
  );
}

export function TooEarly({ customText }) {
  const errorMessage = customText || "Too Early";
  return (
    <>
      <ErrorPage errorCode="425" errorMessage={errorMessage} />
    </>
  );
}

export function UpgradeRequired({ customText }) {
  const errorMessage = customText || "Upgrade Required";
  return (
    <>
      <ErrorPage errorCode="426" errorMessage={errorMessage} />
    </>
  );
}

export function PreconditionRequired({ customText }) {
  const errorMessage = customText || "Precondition Required";
  return (
    <>
      <ErrorPage errorCode="428" errorMessage={errorMessage} />
    </>
  );
}

export function TooManyRequests({ customText }) {
  const errorMessage = customText || "Too Many Requests";
  return (
    <>
      <ErrorPage errorCode="429" errorMessage={errorMessage} />
    </>
  );
}

export function RequestHeaderFieldsTooLarge({ customText }) {
  const errorMessage = customText || "Request Header Fields Too Large";
  return (
    <>
      <ErrorPage errorCode="431" errorMessage={errorMessage} />
    </>
  );
}

export function UnavailableForLegalReasons({ customText }) {
  const errorMessage = customText || "Unavailable For Legal Reasons";
  return (
    <>
      <ErrorPage errorCode="451" errorMessage={errorMessage} />
    </>
  );
}
