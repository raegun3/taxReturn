import React, { useRef } from 'react';

function ContactForm() {
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const statusRef = useRef(null);

  function success() {
    formRef.current.reset();
    buttonRef.current.style.display = 'none';
    statusRef.current.innerHTML = 'Thanks!';
  }

  function error() {
    statusRef.current.innerHTML = 'Oops! There was a problem.';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(formRef.current);
    ajax(formRef.current.method, formRef.current.action, data, success, error);
  }

  return (
    <div className="modal fade" id="contact-form" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="contact-formLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contact-formLabel">Contact me</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="lead">Fill out this form and we will get back to you</p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">First Name:</label>
                <input type="text" className="form-control" id="first-name" />
              </div>
              <div className="mb-3">
                <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                <input type="text" className="form-control" id="last-name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label">Phone:</label>
                <input type="phone" className="form-control" id="phone" />
              </div>
              <div ref={statusRef} id="contact-form-status"></div>
              <button ref={buttonRef} type="submit" className="btn btn-primary" id="contact-form-button">Submit</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;