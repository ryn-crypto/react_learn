import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome Please login to your account.
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-slate-700 rounded px-3 py-2 outline-none opacity-50  focus:border-blue-500"
              placeholder="Example@mail.com"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-slate-700 rounded px-3 py-2 outline-none opacity-50  focus:border-blue-500"
              placeholder="password"
            ></input>
          </div>
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
