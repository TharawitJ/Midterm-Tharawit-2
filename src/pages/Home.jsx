import {useNavigate} from "react-router"

export default function Home() {
    const btnStyle = "border rounded-xl p-1"
    const navigate = useNavigate()
  return (
    <>
      <p>Welcome to todo list web app</p>
      <div>
        <p>If you already have an account</p>
        <button className={btnStyle} onClick={()=>navigate("/Login")}>Login</button>
        <p>You are new here?</p>
        <button className={btnStyle} onClick={()=>navigate("/Register")}>Register</button>
      </div>
    </>
  );
}
