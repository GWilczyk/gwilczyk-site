import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='FormInputGroup'>
		<input
			className='FormInput'
			onChange={event => handleChange(event)}
			{...otherProps}
		/>
		{label && (
			<label
				htmlFor={label}
				className={`${otherProps.value.length ? 'shrink ' : ''} FormInputLabel`}
			>
				{label}
				{otherProps.required && <abbr>*</abbr>}
			</label>
		)}
	</div>
);

export default FormInput;
