import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function EditDialog({ isOpen, setIsOpen }) {

    
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" leave="ease-in duration-200"
          enterFrom="opacity-0" enterTo="opacity-100"
          leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Profile
                </Dialog.Title>
                {/* here is make code */}
                

                
                <ul className='gap-4 flex flex-col p-4'>

                  <li>
                  <label>Username :</label>
                  <input className=' w-full p-2 bg-gray-200 rounded-md ' type='text'  />
                  </li>

                  <li>
                  <label>Bio :</label>
                  {/* <input className=' w-full p-2 bg-gray-200 rounded-md ' type='text'  /> */}
                  <textarea className='w-full p-2 bg-gray-200 rounded-md'></textarea>
                  </li>
                  
                  
                </ul>


                
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className=" rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className=" rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Save
                  </button>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
