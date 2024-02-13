import React, { useState } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/contact/", {
        name: fullName,
        email: email,
        address: address,
        message: message,
      });

        // Assuming the response structure has an email property
        const registeredUserEmail = response.data && response.data.email;

        NotificationManager.success(`User ${registeredUserEmail} has been successfully registered`, "", 3000);
        // alert(`User ${registeredUserEmail} has been successfully recorded`)
        // naviagte("/login");
      } catch (err) {
        console.log(err);
      
        if (err.response) {
          alert(err.response.data)
          // NotificationManager.error(err.response.data, '', 3000);
        } else {
          NotificationManager.error('Network Error. Please try again later.', '', 3000);
        }
    }
  };

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-300 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-bold text-center text-xl text-gray-600">Contact Us</h2>
            <p className="text-gray-700 text-center font-semibold mb-6">Please Fill with Valid Credentials.</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="text-lg font-semibold">Personal Details</p>
                  <p className='font-semibold'>Please fill out all the fields.</p>
                </div>
                <form className="mx-1 mx-md-4" onSubmit={(e) => register(e)}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5  font-semibold">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullName}
                          type="text"
                          name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='FullName'  />
                      </div>

                      <div className="md:col-span-5 font-semibold">
                        <label htmlFor="email">Email Address</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"placeholder="email@domain.com" />
                      </div>

                      <div className="md:col-span-5 font-semibold">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          name="email" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Address" />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="message" className="block mb-2 font-semibold">Your message</label>
                        <textarea
                          id="message"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          rows="4"
                          className="block p-2.5 w-full border-2"
                          placeholder="Write your thoughts here..."></textarea>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
