import React from 'react'

const Auth = () => {
    const [auth, setAuth] = React.useState({ name: '', email: '', password: '', passwordConfirm: '', joinNewLetter: true })
    function handleChange(event) {
        const { name, type, checked, value } = event.target
        setAuth(el => {
            return {
                ...el, [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (auth.password === auth.passwordConfirm) {
            console.log('pass')
        } else {
            console.log('not pass')
        }
        if (auth.joinNewLetter) {
            console.log('sign up success')
        }

    }
    console.log(auth)
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center text-center' >
                <section className='flex justify-center text-center'>
                    <label htmlFor="name" className='m-3 bg-teal-100 p-3 rounded-xl border'>Name</label>
                    <input className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10' type="text" name='name' value={auth.name} onChange={handleChange} />
                </section>

                <section className='flex justify-center text-center'>
                    <label htmlFor="email" className='m-3 bg-teal-100 p-3 rounded-xl border'>Email</label>
                    <input className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10' type="text" name='email' value={auth.email} onChange={handleChange} />
                </section>

                <section className='flex justify-center text-center'>
                    <label htmlFor="password" className='m-3 bg-teal-100 p-3 rounded-xl border'>Password</label>
                    <input className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10' type="password" name='password' value={auth.password} onChange={handleChange} />
                </section>
                <section className='flex justify-center text-center'>
                    <label htmlFor="passwordConfirm" className='m-3 bg-teal-100 p-3 rounded-xl border'>Password Confirm</label>
                    <input className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10' type="password" name='passwordConfirm' value={auth.passwordConfirm} onChange={handleChange} />
                </section>
                <section className='flex justify-center text-center'>
                    <input type="checkbox" name='joinNewLetter' checked={auth.checkAuth} value={auth.checkbox} onChange={handleChange} />
                    <label className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10' htmlFor="checkbox">join new letters</label>
                </section>
                <button className='m-auto bg-teal-800 text-orange-200 rounded p-3 mx-10 my-3'>Submit</button>
            </form>
        </div>
    )
}

export default Auth