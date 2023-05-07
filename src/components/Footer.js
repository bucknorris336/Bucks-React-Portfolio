import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://github.com/bucknorris336"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/buck-blocker-802a9124b"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:buckblocker90@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
