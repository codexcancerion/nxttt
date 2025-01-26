
export default function Page() {
    return (
      <>
        <div className="flex flex-col gap-5 w-full h-screen justify-center items-center">
          <p className="text-2xl text-purple-500 text-bold">This is Profile Page</p>
          <a href="/profile/contact">Contact</a>
          <a href="/profile/aboutMe">About Me</a>
        </div>
      </>
    )
  }