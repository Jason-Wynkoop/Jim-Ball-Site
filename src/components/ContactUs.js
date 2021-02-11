import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'

class ContactUs extends Component {

    state = {
      name: '',
      email: '',
      message: '',
    }
    
  handleSubmit(e) {
      e.preventDefault()
      const { name, email, subject, message } = this.state

      this.setState({
        buttonText: '...sending'
    })
      let templateParams = {
        from_name: email,
        to_name: 'wynkjm01@gmail.com',
        message_html: message,
       }
       emailjs.send(
        'gmail',
        'service_jzh71nl',
         templateParams,
        'user_PsddLqVIwqYmCBoNqfC3h'
       )
       this.resetForm()
   }

   
  resetForm() {
      this.setState({
        name: '',
        email: '',
        message: '',
      })
    }

  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
  

  render() {
      return(
        <section id="contact">
          <div className="row section-head">
        <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
        
          <label class="message-name" htmlFor="message-name">Your Name</label>
          <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

          <label class="message-email" htmlFor="message-email">Your Email</label>
          <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

          <label class="message" htmlFor="message-input">Your Message</label>
          <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
          
          <div className="button--container">
              <button type="submit" className="button button-primary">Submit</button>
          </div>
        </form>
        </div>
        </section>
      );
  }
}

export default ContactUs;