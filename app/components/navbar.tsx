import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

// eslint-disable-next-line @next/next/no-async-client-component
const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 shadow-lg font-work-sans">
      <nav className="flex justify-between items-center">
      <Link href="/">
          <Image src={logo} alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/standup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import Link from "next/link";
// import React from "react";
// import image from "@/public/260cc0bf64109cb9bda1fcf925ff88ed.jpg";
// import Image from "next/image";
// import { auth } from "@/auth";
// // import LoginButton from "../shared/loginButton";
// // import LogoutButton from "../shared/logoutButton";
// import AuthButton from "../shared/authButton";

// // eslint-disable-next-line @next/next/no-async-client-component
// const Navbar = async () => {
//   const session = await auth();

//   return (
//     <header className="px-5 py-1 bg-violet-100 shadow-lg font-work-sans">
//       <nav className="flex justify-between items-center">
//         <Link href="/">
//           <Image
//             className="rounded-md"
//             src={image}
//             alt="logo"
//             height={30}
//             width={80}
//           />
//         </Link>

//         <div className="flex items-center gap-5 text-black">
//           {session && session?.user ? (
//             <>
//               <Link href="/standup/create">
//                 <span>Create</span>
//               </Link>

//               {/* <LogoutButton /> */}

//               <Link href={`/user/${session?.user?.id}`}>
//                 <span> {session?.user?.name}</span>
//               </Link>
//             </>
//           ) : /*(<LoginButton />)*/ null}

//           <AuthButton />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
