import React from "react";

const Contact = () => {
	return (
		<div className='contact'>
			<main>
				<h1>Contact Us</h1>
				<form>
					<div>
						<label for>Name</label>
						<input type='text' required placeholder='Abc' />
					</div>
					<div>
						<label for>Email</label>
						<input type='email' required placeholder='Abc@email.com' />
					</div>
					<div>
						<label for>Message</label>
						<input type='text' required placeholder='Write Your query ......' />
					</div>
					<button type='submit'>Send</button>
				</form>
			</main>
		</div>
	);
};

export default Contact;
