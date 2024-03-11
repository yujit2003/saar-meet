import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import '@babel/polyfill';
import 'regenerator-runtime/runtime'
import 'core-js/stable'
import styles from '@/styles/home.module.css'
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }

  const history = () => {
    router.push('/history')
  }



  return (
    <div>
      <div className='bg-blue-100 min-h-screen'>
        <header className="flex justify-between items-center bg-gray-800 p-3 mb-20 pl-8 pr-8">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-black">SAAR</h1>
          </div>
          <UserButton />
        </header>

        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-10 font-semibold text-center text-gray-800">Connect Seamlessly: Your Ultimate Online Meeting Hub</h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="flex flex-row items-center mb-4">
                <div className='flex flex-col mr-48'>
                  <input
                    type="text"
                    placeholder="Enter Room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="border border-gray-400 p-2 rounded-lg mb-2 text-gray-900"
                  />
                  <button onClick={joinRoom} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-2">
                    Join Room
                  </button>
                  <button onClick={createAndJoin} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-5">
                    Create a New Room
                  </button>

                  <button onClick={history} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-5">
                    History
                  </button>
                </div>
                <img src="/homePageImg.png" alt="" width='500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
