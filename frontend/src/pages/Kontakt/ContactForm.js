import React, {useState} from 'react';
import emailjs from  "@emailjs/browser";
import "./contactForm.css"

const Result = () => {
    return (
        <p className='text-success'>Ditt meddelande har skickat och vi ska svara dig snart</p>
    );
};

export default function ContactForm() {
    
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4v8cqja', 'template_e5f3g3r', e.target, 'BCWwyiXEhIUvJX9rd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      showResult(true);
    };

  return (

    <div>
      <form action= "" onSubmit={sendEmail}>
              <div class="formWord ">
                <h3>Hej!</h3>
                <span>Förnamn och efternamn</span>
                <br />
                <input class="input100 w-300" type="text" name="fullName" required />
                <br />
                <span> Ditt mobile nummer </span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span> E-post</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
                      
                <span>Meddelande</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SKICKA</button>
                <div class="row mt-2"> {result ? <Result/> :null } </div>
              </div>
            </form>

    </div>
  )
}

