import { FaRegCopyright } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="flex justify-center gap-x-2 py-4 bg-slate-50">
        <FaRegCopyright className="text-cyan-500 my-auto" />
        <a
          href="https://github.com/HamedAhmedHamed"
          target="_blank"
          className="text-base capitalize">
          hamed ahmed hamed
        </a>
    </footer>
  )
}

export default Footer