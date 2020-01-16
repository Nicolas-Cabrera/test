import React from 'react';

export default function Accordion(props) {

	if(props.step === '1') {
		return (
			<div>
				<div className='form-section'>
					<h3 className='step-section'>Step {props.step}: {props.section}</h3>
					<form className='form'>
						<div className='form-group'>
							<label>{props.firstlabel}</label>
							<input type='text'></input>
							<label>{props.secondlabel}</label>
							<input type='text'></input>
						</div>
						<div className='form-group-right'>
							<label>{props.thirdlabel}</label>
							<input type='text'></input>
						</div>					
					</form>
					<button>Next ></button>
				</div>
			</div>
		)
	} else if (props.step === '2'){
		return (
			<div>
				<div className='form-section'>
					<h3 className='step-section'>Step {props.step}: {props.section}</h3>
					<form className='form'>
						<div className='form-group'>
							<label>{props.firstlabel}</label>
							<input type='text'></input>
							<label>{props.secondlabel}</label>
								<input className='dob' type='text' />
								<input className='dob' type='text' />
								<input className='dob' type='text' />
						</div>
						<div className='form-group-right'>
							<label>{props.thirdlabel}</label>
							<select type='select'><option>Select Gender &nbsp;&nbsp;v</option></select>
						</div>					
					</form>
					<button>Next ></button>
				</div>
			</div>
		)
	} else if(props.step === '3') {
		return (
			<div>
				<div className='form-section'>
					<h3 className='step-section'>Step {props.step}: {props.section}</h3>
					<form className='form'>
						<div className='form-group'>
							<label className=''>{props.firstlabel}</label>
							<input className='comment-input' type='text'></input>
						</div>				
					</form>
					<button className='last-button'>Next ></button>
				</div>
			</div>
		)
	}
}