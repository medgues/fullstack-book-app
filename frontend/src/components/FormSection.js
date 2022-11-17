import React from "react";
import Form from "./Form";

const FormSection = () => {
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
