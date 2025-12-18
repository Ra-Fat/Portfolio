import React, { useState } from 'react'
import { Mail, Send, CheckCircle, XCircle } from 'lucide-react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdChat } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const ContactDetail = [
  { icon: <FaLinkedin size={22} color="#0A66C2" />, ContactName: 'LinkedIn', Username: '@arafat-man', label:"Connect with me professionally and see my career journey", href: "https://www.linkedin.com/in/arafat-man/"},
  { icon: <FaGithub size={22} color="#6e5494"/>, ContactName: 'GitHub', Username: '@Ra-Fat', label:"Check out my latest projects and open source contributions", href: "https://github.com/Ra-Fat"},
  { icon: <FaFacebook size={22} color="#1877F2" />, ContactName: 'Facebook', Username: '@Ra-Fat', label:"Behind the scenes of my development journey", href: "https://web.facebook.com/ra.fat.626421/"},
  { icon: <FaInstagram size={22} color="#E4405F" />, ContactName: 'Instagram', Username: '@urj4zz_', label:"Behind the scenes of my development journey", href: "https://www.instagram.com/urj4zz_/"},
]

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  // Auto-close modals after 3s
  React.useEffect(() => {
    if (successModal || errorModal) {
      const timer = setTimeout(() => {
        setSuccessModal(false)
        setErrorModal(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [successModal, errorModal])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_dv10yry',
      'template_ntx1wpn',
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString()
      },
      'J1YYVQo0cdMoz8_DR'
    ).then(() => {
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
      setLoading(false)
      setSuccessModal(true)
    }, () => {
      setLoading(false)
      setErrorModal(true)
    })
  }

  return (
    <div className='flex flex-col items-center justify-center w-full lg:px-0 xl:px-10 relative'>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 w-[90%] sm:w-[400px] animate-fade-in">
            <CheckCircle size={40} className="text-green-500" />
            <h2 className="text-xl font-bold">Message Sent!</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">Thank you for reaching out. I’ll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 w-[90%] sm:w-[400px] animate-fade-in">
            <XCircle size={40} className="text-red-500" />
            <h2 className="text-xl font-bold">Message Failed</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Oops! Something went wrong. Please try again later.
            </p>
          </div>
        </div>
      )}

      {/* Title */}
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-bold text-4xl">Get In Touch</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together
        </span>
      </div>

      {/* Contact Section */}
      <div className='flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10 mt-15 w-full'>

        {/* Left Contact Links */}
        <div data-aos="fade-up" data-aos-duration="1300" className="w-full lg:w-[50%] flex flex-col gap-5 bg-gray-800/20 backdrop-blur-md rounded-xs p-4">
          <h2 className='flex items-center gap-3 text-xl font-bold'><MdChat size={20} /> Connect With Me</h2>
          <p className='text-gray-300 text-[15px] sm:text-sm lg:text-base'>Follow me on social media to stay updated with my latest project, tech insight and development journey. Let's connect and build something great together !!</p>
          <div className='flex flex-col w-full gap-5 '>
            {ContactDetail.map((item,index)=>(
              <a target="_blank" rel="noopener noreferrer" href={item.href} key={index} className='flex gap-5 items-center text-[14px] bg-gray-800/20 pl-5 p-4 round-xs shadow-inner cursor-pointer transition-transform transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 duration-200'>
                <span>{item.icon}</span>
                <div className='flex flex-col'>
                  <div className='flex gap-2 items-center'>
                    <p className='font-bold'>{item.ContactName}</p>
                    <p className='text-gray-300'>{item.Username}</p>
                  </div>
                  <p className='text-gray-300'>{item.label}</p>            
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-up" data-aos-duration="1300" className="w-full lg:w-[50%] flex flex-col gap-5 bg-gray-800/20 backdrop-blur-md rounded-xs p-4">
          <h2 className='flex items-center gap-3 text-xl font-bold'><Mail size={20} />Contact Form</h2>
          <p className='text-gray-300 text-[15px] sm:text-sm lg:text-base'>
            Have any questions or want to get in touch? Feel free to send me a message, and I will get back to you as soon as possible!
          </p>
          <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
            <div className='flex items-center gap-4 sm:flex-row flex-col'>
              <div className='flex flex-col gap-2 sm:w-[50%] w-full'>
                <label>First Name</label>
                <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} required className='border-1 pl-2 border-gray-500 p-1 rounded-xs bg-none' />
              </div>
              <div className='flex flex-col gap-2 sm:w-[50%] w-full'>
                <label>Last Name</label>
                <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} required className='border-1 pl-2 border-gray-500 p-1 rounded-xs' />
              </div>
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label>Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className='border-1 pl-2 border-gray-500 p-1 rounded-xs' />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label>Message*</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required className='border border-gray-500 p-2 rounded resize-y h-20' />
            </div>
            <button type='submit' disabled={loading} 
              className={`flex items-center gap-2 w-full justify-center bg-gray-900/95 backdrop-blur-md cursor-pointer font-bold p-3 rounded-xs hover:bg-gray-900/70 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <><Send size={20} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
