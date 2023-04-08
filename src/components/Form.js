import React, { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        streetAddress:"",
        city:"",
        state:"",
        zip:"",
        comments:false,
        candidates:false,
        offers:false,
        pushNotifications:"",
        country:""

    });
    // console.log("Form Data:", formData);

    function handleFormData(event){
        const {name, value, checked, type} = event.target;
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value,
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        alert("Check the console");
        console.log("User Data is:", formData);
    }

  return (
    <div className="w-full mx-auto shadow p-8 md:max-w-[50%]">
    <h2 className="text-4xl text-center mb-4 underline text-blue-600 font-bold ">User Info</h2>
    
      <form onSubmit={handleSubmit} className="space-y-2">
        <label
          htmlFor="firstName"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Piyush"
          id="firstName"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.firstName}
        />
        <label
          htmlFor="lastName"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Bhatnagar"
          id="lastName"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.lastName}
        />
        <label
          htmlFor="email"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="piyush1871b@gmail.com"
          name="email"
          id="email"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.email}
        />
        <label
          htmlFor="country"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <select
          name="country"
          id="country"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white"
          onChange={handleFormData}
          value={formData.country}
        >
          <option value="India">India</option>
          <option value="Mexico">Mexico</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
        </select>
        <label
          htmlFor="streetAddress"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Street Address
        </label>
        <input
          type="text"
          placeholder="xyz"
          name="streetAddress"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          id="streetAddress"
          onChange={handleFormData}
          value={formData.streetAddress}
        />
        <label
          htmlFor="city"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <input
          type="text"
          placeholder="Faridabad"
          name="city"
          id="city"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.city}
        />
        <label
          htmlFor="state"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          State
        </label>
        <input
          type="text"
          placeholder="Haryana"
          name="state"
          id="state"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.state}
        />
        <label
          htmlFor="zip"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Zip Code
        </label>
        <input
          type="text"
          placeholder="121006"
          name="zip"
          id="zip"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          onChange={handleFormData}
          value={formData.zip}
        />
        <div>
          <div className="text-sm font-semibold leading-6 text-gray-900">
            By Email
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="comments"
                  id="comments"
                  className="h-4 w-4 rounded"
                  onChange={handleFormData}
                  checked={formData.comments}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Comments
                </label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="candidates"
                  id="candidates"
                  className="h-4 w-4 rounded"
                  onChange={handleFormData}
                  checked={formData.candidates}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  Candidates
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="offers"
                  id="offers"
                  className="h-4 w-4 rounded"
                  onChange={handleFormData}
                  checked={formData.offers}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Offers
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="contents text-sm font-semibold leading-6 text-gray-900">
            Push Notifications
          </div>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="pushNotifications"
                id="pushEverything"
                value="Everything"
                checked={formData.pushNotifications === 'Everything'}
                onChange={handleFormData}
              />
              <label
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
                htmlFor="pushEverything"
              >
                Everything
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="pushNotifications"
                id="pushEmail"
                className="h-4 w-4"
                onChange={handleFormData}
                value="Same as Email"
                checked={formData.pushNotifications === 'Same as Email'}
              />
              <label
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
                htmlFor="pushEmail"
              >
                Same as email
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="pushNotifications"
                id="pushNothing"
                className="h-4 w-4"
                onChange={handleFormData}
                value="No push Notifications"
                checked={formData.pushNotifications === 'No push Notifications'}
              />
              <label
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
                htmlFor="pushNothing"
              >
                No push notifications
              </label>
            </div>
          </div>

          <div className="my-3">
          
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <h1 className="text-lg font-serif text-blue-600 underline font-bold mt-4">Note: Check the console after submitting the form!</h1>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default Form;
