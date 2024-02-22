import { useState } from 'react'
import remarkGfm from 'remark-gfm';
import './App.css'
import "./utils/utils";
import Markdown from 'react-markdown';
import Header from './Header';
import Mobile1 from "./assets/Mobile1.png"
import Mobile2 from "./assets/Mobile2.png"
import axios from 'axios';


const Home = (props: { page: () => void; }) => {
  return (
    <div className='text-gray-300 bg-gray-900 h-screen overflow-scroll'>
      <div className='flex flex-col justify-center items-center overflow-hidden h-screen'>
        <div className='text-6xl landscape:text-9xl heading'>
          markiyo
        </div>
        <div className='text-xs pt-2 text-slate-50 sub-heading'>
          The ultimate Markdown editor
        </div>
      </div>

      <div className='h-screen bg-gray-800 flex flex-col landscape:flex-row justify-center items-center text-center'>

        <div className='m-2 border border-solid border-gray-500 h-1/2 w-5/6 rounded-xl flex flex-col items-center justify-center'>
          <div className='text-4xl landscape:text-6xl'>
            Intuitive Interface
          </div>
          <div className='text-[0.6rem] pt-2 text-slate-50 landscape:text-sm'>
            Enjoy a clean and intuitive interface designed for a seamless Markdown editing experience.
          </div>
        </div>

        <div className='m-2 bxorder border-solid border-gray-500 h-1/2 w-5/6 rounded-xl flex flex-col items-center justify-center'>
          <div className='text-4xl landscape:text-6xl'>
            Live Preview
          </div>
          <div className='text-[0.6rem] pt-2 text-slate-50 landscape:text-sm'>
            See your Markdown come to life with a live preview, making it easy to format and style your content.
          </div>
        </div>

      </div>

      <div className='h-screen bg-slate-700 flex flex-col landscape:flex-row justify-center items-center'>
        <div className='flex flex-col'>
          <div className='text-4xl landscape:text-6xl'>
            Mobile Friendly
          </div>
          <div className='text-[0.6rem] px-10 pt-2 text-slate-50 text-center landscape:text-sm'>
            Even a Smartphone can use  <span className='underline extrabold'>markiyo</span>.
          </div>
        </div>
        <div className='relative landscape:left-0'>
          <img src={Mobile1} className='absolute img1 h-auto w-auto rounded-lg drop-shadow-lg' alt="Mobile Friendly" />
          <img src={Mobile2} className='' alt="Mobile Friendly rounded-lg drop-shadow-lg" />
        </div>
      </div>

      <div className='h-screen flex flex-col flex-row justify-center items-center'>
        <div className='text-4xl p-4'> Get Started Now</div>
        <div className='bg-slate-600 px-6 py-2 rounded-lg cursor-pointer' onClick={() => { props.page() }}>Go to Editor</div>
      </div>
    </div>
  )
}

function App() {

  const [code, setCode] = useState(localStorage.getItem("code") || "");
  const [tab, setTab] = useState("Editor");
  const [page, setPage] = useState("Editor" || localStorage.getItem("page"));
  const handlePage = () => {
    if (page == "Editor") {
      setPage("Home")
      localStorage.setItem("page", "Home");
    } else {
      setPage("Editor")
      localStorage.setItem("page", "Editor");
    }
  }

  return (
    <div className='bg-gray-900 h-screen relative'>
      {
        localStorage.getItem("page") == "Home" ? (
          <>
            <Header tabBool={(e: boolean) => !e ? setTab("Preview") : setTab("Editor")
            } tab={tab} />
            <div
              draggable
              className={`absolute cursor-pointer my-2 h-10 z-[2] px-6 bg-slate-600 rounded-lg flex justify-center items-center text-white top-0 tile`}
              style={{ right: "calc(50vw - 2.5rem)" }}
              onClick={handlePage}>
              {page}
            </div>

            <div className='m-12 h-5/6 w-[90%] flex mx-auto overflow-hidden justify-center'>
              <textarea
                value={code}
                className={`resize-none rounded-xl p-3 pt-5 bg-gray-700 h-full w-full text-gray-50 opacity-80 focus:outline-none focus:border:none ${tab == "Editor" ? "" : "hidden"}`}
                onChange={(e) => { setCode(e.target.value); localStorage.setItem("code", e.target.value) }} />
              <div className={`bg-gray-800 h-full p-3 pt-5 break-all text-balance overflow-hidden overflow-y-scroll text-wrap text-gray-200 rounded-xl w-full ${tab == "Preview" ? "" : "hidden"}`}>
                <Markdown remarkPlugins={[remarkGfm]}>{code}</Markdown>
              </div>
            </div>
          </>) : (<>
            <>
              <Home page={handlePage} />
            </>
          </>)
      }
    </div >
  )
}

export default App;
