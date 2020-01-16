import React, { useState, useRef } from 'react';

export default function Accordion(props) {

	const [active, setActive] = useState('notactive');
	const [height, setHeight] = useState('48px');
	const content = useRef(null);

	function toggleActive(stepnumber) {
		//console.log(stepnumber); 
		console.log(props.step);
		setActive(active === 'notactive' ? 'active' : 'notactive');
		setHeight(active === 'active' ? '48px' : '200px')
	}

	if (props.step === '1') {
		return (
			<div className={`accordion ${active}`}>
				<button onClick={() => toggleActive(1)} />
				<div ref={content} style={{maxHeight: `${height}`}} className='form-section'>
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
				</div>
			</div>
		)
	} else if (props.step === '2') {
		return (
			<div className={`accordion ${active}`}>
				<button onClick={() => toggleActive(2)} />
				<div ref={content} style={{maxHeight: `${height}`}} className='form-section'>
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
				</div>
			</div>
		)
	} else if (props.step === '3') {
		return (
			<div className={`accordion ${active}`}>
				<button onClick={() => toggleActive(3)} />
				<div ref={content} style={{maxHeight: `${height}`}} className='form-section'>
					<h3 className='step-section'>Step {props.step}: {props.section}</h3>
					<form className='form'>
						<div className='form-group'>
							<label className=''>{props.firstlabel}</label>
							<input className='comment-input' type='text'></input>
						</div>
					</form>
				</div>
			</div>
		)
	}
}