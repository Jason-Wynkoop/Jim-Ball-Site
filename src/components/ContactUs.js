import React from 'react';
import * as emailjs from 'emailjs-com'


export default function ContactUs() {

  function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_jzh71nl', 'template_q3x63pq', e.target, 'user_PsddLqVIwqYmCBoNqfC3h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return(
        <section id="contact">
          <div className="row section-head">
          <h2 style={{color:'white'}}>Please send your condolences here:</h2>

          <form className="form" onSubmit={sendEmail}>
                      <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                      </div>
              </form>
        </div>
        </section>
  )
}