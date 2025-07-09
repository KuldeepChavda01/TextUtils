import React from "react";

function Alert(props) {
  const capitalizer = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalizer(props.alert.type)} :</strong>{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
