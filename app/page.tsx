'use client'
import { usePostAuthMutation } from "@/lib/features/auth/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  const [trigger, { isError, isLoading, isSuccess }] = usePostAuthMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", state);
    trigger({
      username: state.username,
      password: state.password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard");
    }
  }, [isSuccess, router]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-[15vw]">
              <h4>Login</h4>
              <form  className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Username" value={state.username} onChange={(e)=> setState({
                    ...state,
                    username: e.target.value
                  })}/>
                  <input type="password" placeholder="Password"  value={state.password} onChange={(e)=> setState({
                    ...state,
                    password: e.target.value
                  })}/>
                  <button type="submit">Login</button>
              </form>
          </div>
      </main>
     
    </div>
  );
}
