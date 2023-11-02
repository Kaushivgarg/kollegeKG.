import { useState } from "react";
import axios from "../../config/api/axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { toast } from "react-toastify";
import CircleDesign from "../Layouts/CircleDesign";

const StudentForm = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value,
    });
  };

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      const reqData = JSON.stringify(student);
      const response = await axios.post("student", reqData);
      navigate("../");
      toast.success(response.data.message);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="relative z-0 flex h-screen items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 py-8 text-slate-900 dark:from-slate-800 dark:to-slate-950 dark:text-slate-200">
      <CircleDesign />
      <section className="my-8 flex w-[75%] animate-fadeInFast flex-col justify-start rounded-md bg-slate-100 p-4 text-slate-900 opacity-70 hover:opacity-100 focus:opacity-100 dark:bg-[#060913] dark:text-slate-50 md:p-8 xl:w-1/2 xl:flex-row">
        <div className="mr-8 flex flex-col-reverse justify-between xl:flex-col ">
          <h2 className="my-4 text-4xl font-bold dark:text-slate-400 md:text-5xl">
            Student
            <br /> Registration
          </h2>
          <Link
            className="flex items-center font-spectral text-xl font-semibold text-slate-900 dark:text-slate-50"
            to="../"
          >
            <FaUniversity />
            <p className="decoration-violet-900 decoration-2 hover:underline dark:decoration-violet-300">
              K
              <span className=" inline-block h-3 w-3 rounded-full bg-violet-900 dark:bg-violet-500 "></span>
              llege
            </p>
          </Link>
        </div>
        <form className="w-full font-medium tracking-wide accent-violet-600">
          <label className="block" htmlFor="name">
            Name:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="text"
            required
            id="name"
            value={student.name}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="text"
            required
            id="email"
            value={student.email}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="course">
            Course:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="text"
            required
            id="course"
            value={student.course}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="username">
            Username:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="text"
            id="username"
            required
            value={student.username}
            onChange={(e) => handleFormChange(e)}
          />
          <label className="block" htmlFor="password">
            Password:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="password"
            id="password"
            value={student.password}
            onChange={(e) => handleFormChange(e)}
            required
          />
          <button
            type="submit"
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 p-1 font-bold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 dark:border-violet-300 dark:bg-violet-600 dark:text-slate-50 dark:hover:bg-slate-900 "
            onClick={(e) => addStudent(e)}
          >
            Register
          </button>
          <p className="m-2 overflow-hidden text-ellipsis whitespace-nowrap text-center font-medium text-red-700">
            {error
              ? error?.response?.data?.message ||
                error?.data?.message ||
                error?.response?.data
              : ""}
          </p>
        </form>
      </section>
    </main>
  );
};

export default StudentForm;
