import React from "react";

function Alert(props) {
  const { alert, mode } = props;
  return (
    <d>
      {props.alert && (
        <div
          className={`alert container ${
            mode === "light" ? "bg-light" : "bg-lightGray"
          }`}
        >
          <p>
            <strong>{alert.type}:</strong>
            {alert.message}
          </p>
        </div>
      )}
    </d>
  );
}

export default Alert;
