import React from "react";

export const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <>
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@100;200;300;400;500;600&family=Roboto:wght@100;300;400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
      </style>
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: "-19",
          background: `url('https://cdn.discordapp.com/attachments/863316298129080331/1118947627401220197/SimpleShiny.png') center center / cover no-repeat`,
        }}
      ></div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "Roboto",
            color: "#f3f3f3",
            gap: "1.5rem",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              lineHeight: "1",
              fontWeight: "200",
            }}
          >
            {errorCode}
          </div>
          <hr
            style={{
              borderWidth: "2px",
              borderColor: "rgb(229 231 235 / 1)",
              height: "100px",
            }}
          />
          <div
            style={{
              fontSize: "1.5rem",
              lineHeight: "1",
              fontWeight: "500",
              width: "50%",
              display: "block",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <span
              style={{
                display: "block",
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            >
              {errorMessage}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
