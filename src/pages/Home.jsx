import { useNavigate } from "react-router";

export default function Home() {
  const btnStyle = "underline text-blue-600";
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col h-125 m-auto items-center">
      <p className="text-2xl mb-15">Welcome to todo list web app</p>
      <div>
        <p className="pl-1.5">
          If you already have an account{" "}
          <a className={btnStyle} onClick={() => navigate("/Login")}>
            Login
          </a>
          <br />
          <br />
          You are new here?{" "}
          <a className={btnStyle} onClick={() => navigate("/Register")}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
