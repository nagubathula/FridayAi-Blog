// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-28 w-full flex flex-col items-center">
      <hr className="w-4/5" />
      <div className="py-10 px-10 sm:px-0 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly w-full sm:items-center text-zinc-400">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-zinc-100">Friday AI Blog</h1>
          {/* <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/">Home</Link>
            <Link to="/auth?mode=signup">Sign Up</Link>
            <Link to="/auth?mode=login">Login</Link>
            <Link to="/users">Creators</Link>
            <Link to="/blogs/create-blog">Create</Link>
          </div> */}
        </div>
        <hr className="border-zinc-600" />
        <p>© 2024 by Friday Ai. &nbsp;All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
