import { Component } from "react";
import {
  InputForm,
  InputForContact,
  LabelInputContact,
  BtnSubmit,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { value, name } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    event.preventDefault();
     this.props.onSubmit(this.state);
     this.reset();
  };
   
   reset = () => {
      this.setState({
    name: '',
    number: '',
      })
   }

   render() {
      const {name, number } = this.state;
     return (
       <InputForm onSubmit={this.addContact}>
         <LabelInputContact>
           Name
           <InputForContact
             value={name}
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
             onChange={this.handleInput}
             placeholder="Jack Daniels"
           />
         </LabelInputContact>
         <LabelInputContact>
           Number
           <InputForContact
             value={number}
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             onChange={this.handleInput}
             placeholder="777 77 77"
           />
         </LabelInputContact>
         <BtnSubmit type="submit">Add contact</BtnSubmit>
       </InputForm>
     );
  }
}

