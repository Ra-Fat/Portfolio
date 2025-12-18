import { Home, Mail, Info, Code, FolderKanban, Briefcase, Pin, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1300" className='w-full flex flex-col gap-3 '>
        <span className='w-full h-[1px] bg-gray-800'></span>
        <div className='grid gap-10 p-5
                        grid-cols-1
                        sm:grid-cols-1
                        md:grid-cols-2 md:grid-rows-[auto_auto]
                        lg:grid-cols-3 lg:grid-rows-1'>

            <div className='flex flex-col gap-5 items-start p-2'>
                <h3 className='font-bold text-xl'>Portfolio</h3>
                <p className='text-gray-300'>Passionate developer creating innovative solution and beautiful experiences. Let's build something amazing together.</p>
                <div className='flex items-center gap-8'>
                    <a className='hover:text-[#1877F2]' href="https://web.facebook.com/ra.fat.626421/" target="_blank" rel="noopener noreferrer"><FaFacebook size={18} /></a>
                                    <a className='hover:text-[#E4405F]' href="https://www.instagram.com/urj4zz_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
                                    <a className='hover:text-[#0A66C2]' href="https://www.linkedin.com/in/arafat-man/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></a>
                                    <a className='hover:text-[#6e5494]' href="https://github.com/Ra-Fat" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></a>
                </div>
            </div>

            <div className='flex flex-col gap-5 items-start p-2'>
                <h3 className='font-bold text-xl'>Quick Links</h3>
                <div className='flex flex-wrap gap-15 text-gray-300'>
                    <div className='flex flex-col gap-5'>
                        <a className='flex items-center gap-3 hover:text-white' href="#home"><Home size={18}/> Home</a>
                        <a className='flex items-center gap-3 hover:text-white' href="#about"><Info size={18}/> About</a>
                        <a className='flex items-center gap-3 hover:text-white' href="#skills"><Code size={18}/> Skills</a>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <a className='flex items-center gap-3 hover:text-white' href="#experiences"><Briefcase size={18}/> Experience</a>
                        <a className='flex items-center gap-3 hover:text-white' href="#projects"><FolderKanban size={18}/> Projects</a>
                        <a className='flex items-center gap-3 hover:text-white' href="#contact"><Mail size={18}/> Contact</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 items-start p-2'>
                <h3 className='font-bold text-xl'>Get In Touch</h3>
                <p className='flex items-center gap-3 text-gray-200'><Mail size={18}/> manrafat2006@gmail.com</p>
                <p className='flex items-center gap-3 text-gray-200'><Pin size={18}/> Available For Internship</p>
            </div>

        </div>
        <span className='w-full h-[1px] bg-gray-800'></span>
        <p className='text-sm text-gray-200 flex justify-center items-center'>
          &copy; 2025 Portfolio. Made with ❤️ and lots of coffee
        </p>

    </div>
  )
}

export default Footer
