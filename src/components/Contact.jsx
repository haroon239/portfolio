import { useState } from "react";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/haroon116butt@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          project: data.get("project"),
          budget: data.get("budget"),
          message: data.get("message"),
          _replyto: data.get("email"),
          _subject: `New portfolio enquiry from ${data.get("name")}`,
          _template: "table",
          _honey: data.get("_honey"),
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section className="contact-wrap container" id="contact">
      <div className="contact-glow" />
      <div className="contact-copy">
        <div className="contact-status">
          <i /> ACCEPTING SELECT PROJECTS
        </div>
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>
          Let&apos;s create
          <br />
          something <span>exceptional.</span>
        </h2>
        <p>
          Share the vision. I&apos;ll bring thoughtful questions, honest advice,
          and a clear route from idea to launch.
        </p>
        <div className="contact-details">
          <a href="mailto:haroon116butt@gmail.com">
            <small>DROP ME A LINE</small>haroon116butt@gmail.com <b>↗</b>
          </a>
          <span>
            <small>BASED IN</small>Pakistan · Available worldwide
          </span>
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <input
          className="form-honeypot"
          type="text"
          name="_honey"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="form-heading">
          <span>PROJECT ENQUIRY</span>
          <small>Usually replies within 24–48 hours</small>
        </div>
        <div className="form-row">
          <label>
            Your name
            <input name="name" required placeholder="Muhammad Haroon" />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Project type
            <select name="project">
              <option>Web application</option>
              <option>Business website</option>
              <option>WordPress project</option>
              <option>Product improvement</option>
            </select>
          </label>
          <label>
            Budget range
            <select name="budget">
              <option>Let&apos;s discuss</option>
              <option>$500 - $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>$3,000+</option>
            </select>
          </label>
        </div>
        <label>
          Tell me about the vision
          <textarea
            name="message"
            required
            rows="5"
            placeholder="What are you building, and what would success look like?"
          />
        </label>
        <button
          className="button"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send project brief"}{" "}
          <span>↗</span>
        </button>
        {status === "success" && (
          <p className="form-note" role="status">
            Message submitted successfully. Thank you—I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-note form-error" role="alert">
            The message could not be sent. Please try again or email me
            directly.
          </p>
        )}
      </form>
    </section>
  );
}
