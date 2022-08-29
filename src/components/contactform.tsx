import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	name: string
	email: string
	formMessage: string
}

export default function App() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()

	//Consoleにサブミットデータを送る。 コレをバックグラウンドに送るように書き換え
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	console.log(watch('name'))

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form">
				<div className="form-display">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input id="name" type="text" {...register('name', { required: true })} />
					{errors.name && <span style={{ color: 'red' }}>入力が必須の項目です</span>}
				</div>
				<div className="form-display">
					<label htmlFor="email" className="form-label">
						E-mail
					</label>
					<input
						id="email"
						type="email"
						{...register('email', {
							required: '入力が必須の項目です。',
							pattern: { value: /\S+@\S+\.\S+/, message: 'メールアドレスの形式が間違っています。' }
						})}
					/>
					{errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
				</div>
				<div className="form-display">
					<label htmlFor="formMessage" className="form-label">
						Message
					</label>
					<textarea
						id="formMessage"
						{...register('formMessage', {
							required: '入力が必須の項目です',
							maxLength: { value: 300, message: '300文字以下にしてください' }
						})}
					/>
					{errors.formMessage && <span style={{ color: 'red' }}>{errors.formMessage.message}</span>}
				</div>
				<div className="submit-style">
					<input type="submit" />
				</div>
			</div>
		</form>
	)
}
