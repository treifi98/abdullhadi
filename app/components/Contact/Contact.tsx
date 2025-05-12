import React, { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    contactDetails: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error for this field when the user starts typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          contactDetails: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[120px] flex flex-col justify-center items-center overflow-hidden">
      <div className="text-[80px] text-[#ff7b004d] font-[pop] text-center ">
        Get In Touch
      </div>
      <div className="max-w-[600px] mx-auto bg-[#080807ad] overflow-hidden rounded-lg flex justify-center items-center mt-[20px]">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action=""
          className="w-full h-full text-[#fff] flex flex-col justify-center items-center gap-[40px] p-[60px]"
        >
          <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">
            <div>Your Name</div>
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jhon Doe"
              required
              name="name"
              className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"
            />
            {formErrors.name && (
              <div className="text-red-500">{formErrors.name}</div>
            )}
          </div>
          <div>
            <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">
              Contact Details
            </div>
            <input
              value={formData.contactDetails}
              onChange={handleInputChange}
              name="contactDetails"
              required
              type="text"
              placeholder="Email Or Phone Number"
              className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"
            />
          </div>
          <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">
            <div className="">Message</div>
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              placeholder="Roses are red violets are blue, I wanna work with you!"
              className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-[#ff7a00] px-[30px] py-[5px] rounded-md mt-[40px]"
          >
            <div className="text-[#fff] cursor-pointer">Let's Talk</div>
          </button>
          {submitStatus === "success" && (
            <div className="text-green-500">Message sent successfully!</div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-500">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
