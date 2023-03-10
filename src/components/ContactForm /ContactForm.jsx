import { Component } from "react";
import Notiflix from 'notiflix';

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
     return (
       <div>
         <form onSubmit={this.addContact} >
           <label>
             Name
             <input
               value={this.state.name}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={this.handleInput}
             />
           </label>
           <label>
             Number
             <input
               value={this.state.number}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
               onChange={this.handleInput}
             />
           </label>
           <button type="submit">Add contact</button>
         </form>
       </div>
     );
  }
}

