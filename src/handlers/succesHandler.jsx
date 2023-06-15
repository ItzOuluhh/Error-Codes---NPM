import { ErrorPage } from "../components/errorPage";
import React from "react";

export function OK({ customText }) {
  const errorMessage = customText || "OK";
  return (
    <>
      <ErrorPage errorCode="200" errorMessage={errorMessage} />
    </>
  );
}

export function Created({ customText }) {
  const errorMessage = customText || "Created";
  return (
    <>
      <ErrorPage errorCode="201" errorMessage={errorMessage} />
    </>
  );
}

export function Accepted({ customText }) {
  const errorMessage = customText || "Accepted";
  return (
    <>
      <ErrorPage errorCode="202" errorMessage={errorMessage} />
    </>
  );
}

export function NonAuthoritativeInformation({ customText }) {
  const errorMessage = customText || "Non-Authoritative Information";
  return (
    <>
      <ErrorPage errorCode="203" errorMessage={errorMessage} />
    </>
  );
}

export function NoContent({ customText }) {
  const errorMessage = customText || "No Content";
  return (
    <>
      <ErrorPage errorCode="204" errorMessage={errorMessage} />
    </>
  );
}

export function ResetContent({ customText }) {
  const errorMessage = customText || "Reset Content";
  return (
    <>
      <ErrorPage errorCode="205" errorMessage={errorMessage} />
    </>
  );
}

export function PartialContent({ customText }) {
  const errorMessage = customText || "Partial Content";
  return (
    <>
      <ErrorPage errorCode="206" errorMessage={errorMessage} />
    </>
  );
}

export function MultiStatus({ customText }) {
  const errorMessage = customText || "Multi-Status";
  return (
    <>
      <ErrorPage errorCode="207" errorMessage={errorMessage} />
    </>
  );
}

export function AlreadyReported({ customText }) {
  const errorMessage = customText || "Already Reported";
  return (
    <>
      <ErrorPage errorCode="208" errorMessage={errorMessage} />
    </>
  );
}

export function IMUsed({ customText }) {
  const errorMessage = customText || "IM Used";
  return (
    <>
      <ErrorPage errorCode="226" errorMessage={errorMessage} />
    </>
  );
}
