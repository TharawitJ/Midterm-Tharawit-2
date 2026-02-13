import React from 'react'

function Register() {
    const inputStyle = "border rounded-xl p-1"

    // login function
  return (<>
  <form action="" className="flex flex-col max-w-75 gap-2 justify-center items-center border rounded-2xl p-4 m-auto mt-40">
    <div className="flex items-start mr-auto">Register</div>
<input className={inputStyle} type="text" placeholder="Username"/>
<input className={inputStyle} type="password" placeholder="Password"/>
<input className={inputStyle} type="password" placeholder="Confirm Password"/>
<button className="border rounded-xl p-1 w-20">Register</button>
</form>
    </>
  )
}

export default Register