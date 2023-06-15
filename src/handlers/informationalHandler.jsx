import { ErrorPage } from "../components/errorPage";
import React from "react";

export function Continue({ customText }) {
  const errorMessage = customText || "Continue";
  return (
    <>
      <ErrorPage errorCode="100" errorMessage={errorMessage} />
    </>
  );
}

export function SwitchingProtocols({ customText }) {
  const errorMessage = customText || "Switching Protocols";
  return (
    <>
      <ErrorPage errorCode="101" errorMessage={errorMessage} />
    </>
  );
}

export function Processing({ customText }) {
  const errorMessage = customText || "Processing";
  return (
    <>
      <ErrorPage errorCode="102" errorMessage={errorMessage} />
    </>
  );
}

export function EarlyHints({ customText }) {
  const errorMessage = customText || "Early Hints";
  return (
    <>
      <ErrorPage errorCode="103" errorMessage={errorMessage} />
    </>
  );
}
