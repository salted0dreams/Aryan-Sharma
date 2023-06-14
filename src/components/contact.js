import { useState } from "react"

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            firstName,
            lastName,
            email,
            number,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setFirstName('')
                setLastName('')
                setEmail('')
                setNumber('')
                setMessage('')
            }
        })
    }

    return (
        <div className="text-white w-screen h-screen flex flex-col justify-center items-center" id="contact">
            <h1 className="text-center text-5xl font-bold">Get in touch</h1>
            < form className="flex flex-col justify-center items-center h-auto w-screen ">
                <div className="flex flex-row justify-evenly gap-16 w-1/2">
                    < formGroup className="h-auto my-5 text-xl w-1/2" >
                        < input type='text' onChange={(e) => { setFirstName(e.target.value) }} name='firstname' placeholder="First Name" className="appearance-none bg-transparent border-b-2 w-full text-white mr-6 py-1 px-2 leading-tight focus:outline-none " />
                    </formGroup>
                    < formGroup className="h-auto my-5 text-xl w-1/2" >
                        < input type='text' onChange={(e) => { setLastName(e.target.value) }} name='lastname' placeholder="Last Name" className="appearance-none bg-transparent border-b-2 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    </formGroup>
                </div>
                <div className="flex flex-row justify-center gap-20 w-1/2">
                    < formGroup className="h-auto text-xl my-5 w-1/2">
                        < input type='email' onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder="Email" className="appearance-none bg-transparent border-b-2 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    </formGroup>
                    < formGroup className="h-auto text-xl my-5 w-1/2">
                        < input type='tel' onChange={(e) => { setNumber(e.target.value) }} name='number' placeholder="Number" className="appearance-none bg-transparent border-b-2 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    </formGroup>
                </div>
                < formGroup className="text-xl my-10 w-full flex justify-center" >
                    < textarea type='textArea' onChange={(e) => { setMessage(e.target.value) }} name='message' rows={6} placeholder="Message" className="w-1/2 p-2.5 text-sm h-auto text-white bg-transparent border border-gray-300 " />
                </formGroup>
                <button type="submit" className="bg-green-500 text-zinc-900 w-fit px-4 py-2 text-lg" onClick={(e) => { handleSubmit(e) }}>Submit</button>
            </form >
        </div>
    )
}