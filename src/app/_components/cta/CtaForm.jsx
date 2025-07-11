"use client";


import { useState } from "react";
import { PrimaryButton } from "..";


const CtaForm = () => {

    const [result, setResult] = useState("");

    const key = process.env.WEB3_FORMS;
    console.log(key);

  const onSubmit = async (event) => {
    console.log("sending data");
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "238a5ab6-c7a5-47ca-8ce2-1641f6ddfe2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="text" name="name" placeholder="Enter your email" />
        <input type="text" name="message" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
        {/* <form onSubmit={onSubmit}>
          <input type="text" name="botcheck" style={{display: "none"}} autocomplete="off" />
              <div className="flex"><input type="email" required placeholder="Enter you email here" className="outline-0 bg-white px-3" name="email" />
                <button type="submit"><PrimaryButton text="Get in touch" /></button></div>
            </form> */}
    </div>
  )
}

export default CtaForm;