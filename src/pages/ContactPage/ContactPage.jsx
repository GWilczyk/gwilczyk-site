import React, { useReducer } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormInput from '../../components/FormInput/FormInput';

import './ContactPage.scss';

const initialState = {
	email: '',
	message: '',
	name: '',
	subject: '',
	tel: ''
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'reset':
			return action.payload;
		case 'setEmail':
			return { ...state, email: action.payload };
		case 'setMessage':
			return { ...state, message: action.payload };
		case 'setName':
			return { ...state, name: action.payload };
		case 'setSubject':
			return { ...state, subject: action.payload };
		case 'setTel':
			return { ...state, tel: action.payload };
		default:
			return state;
	}
};

const ContactPage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = event => {
		const { name, value } = event.target;
		const type = `set${name}`;
		dispatch({ type, payload: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({ type: 'reset', payload: initialState });
	};

	return (
		<div className='ContactPage'>
			<h2>Me contacter</h2>
			<div className='container'>
				<p>
					Vous avez une question, une idée ?
					<br />
					Parlez-moi de votre projet et donnons-lui forme ensemble.
				</p>
			</div>

			<form onSubmit={event => handleSubmit(event)}>
				<p className='asterisk'>
					Les champs avec <span>*</span> sont obligatoires.
				</p>
				<FormInput
					handleChange={handleChange}
					label='Nom'
					name='Name'
					type='name'
					value={state.name}
					required
				/>
				<FormInput
					handleChange={handleChange}
					label='Email'
					name='Email'
					type='email'
					value={state.email}
					required
				/>
				<FormInput
					handleChange={handleChange}
					label='Votre téléphone'
					name='Tel'
					type='tel'
					value={state.tel}
				/>
				<FormInput
					handleChange={handleChange}
					label='Sujet'
					name='Subject'
					type='subject'
					value={state.subject}
					required
				/>
				<FormInput
					handleChange={handleChange}
					label='Votre message'
					name='Message'
					type='text'
					value={state.message}
					required
				/>

				<CustomButton type='submit'>Envoyer</CustomButton>
			</form>
		</div>
	);
};

export default ContactPage;
