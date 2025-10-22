"use client";

import type { FC } from "react";
import { useContext, useState } from "react";
import SectionHeading from "./accessories/SectionHeading";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";
import Link from "next/link";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import Button from "./accessories/Button";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContext } from "@/providers/ToastProvider";
import { isEmpty, trim } from "lodash";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";
import TripleDotLoader from "./accessories/TripleDotLoader";

const Contact: FC = () => {
  const { ref } = useSectionInView("Contact");

  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const { setToast } = useContext(ToastContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSendingEmail(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (isEmpty(trim(message))) {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Please put some message",
      });
      setSendingEmail(false);
      return;
    }

    if (isEmpty(trim(subject))) {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Please put some Subject",
      });
      setSendingEmail(false);
      return;
    }

    const data = {
      email: email,
      subject: subject,
      message: message,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setToast({
        severity: "success",
        title: "Sent!",
        description: "Successfully Sent Email",
      });
      setSendingEmail(false);
      setEmailInput("");
      setSubjectInput("");
      setMessageInput("");
    } else {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Something went wrong",
      });
    }
  };

  return (
    <section className="contact-container" id="contact" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>Let's Connect!</SectionHeading>
        </FadeUp>
        <div className="contact">
          <div className="info">
            <FadeUp>
              <h3>Please reach out!</h3>
            </FadeUp>
            <FadeUp>
              <p>
                I'm always looking for new opportunities! My inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>
              <p>
                You can contact me directly at{" "}
                <Link href="mailto:massaadanthony@hotmail.com">
                  massaadanthony@hotmail.com
                </Link>{" "}
                or through the form!
              </p>
            </FadeUp>
            <div className="socials">
              <FadeUp>
                <h3>Socials</h3>
              </FadeUp>

              <div className="links">
                <FadeUp delay={0.175}>
                  <Button to={externalLinks.linkedIn} newTab noText>
                    <FaLinkedinIn />
                  </Button>
                </FadeUp>
                <FadeUp delay={0.195}>
                  <Button to={externalLinks.github} newTab noText>
                    <FaGithubSquare />
                  </Button>
                </FadeUp>
              </div>
            </div>
          </div>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => void handleSubmit(e)} className="form-container">
            <FadeUp>
              <div className="top-layer">
                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="anthony@google.com"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="subject-layer">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  placeholder="Hello!"
                  value={subjectInput}
                  onChange={(e) => {
                    setSubjectInput(e.target.value);
                  }}
                />
              </div>
              <div className="msg-layer">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="I thought your website was awesome!"
                  value={messageInput}
                  onChange={(e) => {
                    setMessageInput(e.target.value);
                  }}
                />
              </div>
              {!sendingEmail ? (
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={sendingEmail}
                >
                  Send <AiOutlineSend />
                </button>
              ) : (
                <TripleDotLoader />
              )}
            </FadeUp>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
