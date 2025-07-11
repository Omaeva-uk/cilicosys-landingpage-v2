"use client"

import React from "react";

function CtaForm1() {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "238a5ab6-c7a5-47ca-8ce2-1641f6ddfe2b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
      <form onSubmit={onSubmit}>
        <div className="bg-white rounded-4xl px-1 overflow-hidden">
          <input type="email" name="email" className=" p-5 bg-white outline-0 placeholder:bg-white" placeholder="Enter your email here"/>
            <button type="submit" className="border bg-primary text-white rounded-4xl py-3 px-5 font-medium">Submit Form</button>  
        </div>
        
      </form>
  );
}

export default CtaForm1;