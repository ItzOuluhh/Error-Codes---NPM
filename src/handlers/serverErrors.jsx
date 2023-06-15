import { ErrorPage } from "../components/errorPage";
import React from "react";

export function InternalServerError({ customText }) {
  const errorMessage = customText || "Internal Server Error";
  return <ErrorPage errorCode="500" errorMessage={errorMessage} />;
}

export function NotImplemented({ customText }) {
  const errorMessage = customText || "Not Implemented";
  return <ErrorPage errorCode="501" errorMessage={errorMessage} />;
}

export function BadGateway({ customText }) {
  const errorMessage = customText || "Bad Gateway";
  return <ErrorPage errorCode="502" errorMessage={errorMessage} />;
}

export function ServiceUnavailable({ customText }) {
  const errorMessage = customText || "Service Unavailable";
  return <ErrorPage errorCode="503" errorMessage={errorMessage} />;
}

export function GatewayTimeout({ customText }) {
  const errorMessage = customText || "Gateway Timeout";
  return <ErrorPage errorCode="504" errorMessage={errorMessage} />;
}

export function HTTPVersionNotSupported({ customText }) {
  const errorMessage = customText || "HTTP Version Not Supported";
  return <ErrorPage errorCode="505" errorMessage={errorMessage} />;
}

export function VariantAlsoNegotiates({ customText }) {
  const errorMessage = customText || "Variant Also Negotiates";
  return <ErrorPage errorCode="506" errorMessage={errorMessage} />;
}

export function InsufficientStorage({ customText }) {
  const errorMessage = customText || "Insufficient Storage";
  return <ErrorPage errorCode="507" errorMessage={errorMessage} />;
}

export function LoopDetected({ customText }) {
  const errorMessage = customText || "Loop Detected";
  return <ErrorPage errorCode="508" errorMessage={errorMessage} />;
}

export function NotExtended({ customText }) {
  const errorMessage = customText || "Not Extended";
  return <ErrorPage errorCode="510" errorMessage={errorMessage} />;
}

export function NetworkAuthenticationRequired({ customText }) {
  const errorMessage = customText || "Network Authentication Required";
  return <ErrorPage errorCode="511" errorMessage={errorMessage} />;
}
