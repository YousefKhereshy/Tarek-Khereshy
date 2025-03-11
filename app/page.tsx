'use client'
import Image from "next/image";
import Logo from "./image.png";
import Tarek from "./tarek.png";
import ps from "./photoshop.png";
import pp from "./premiere-pro.png";
import ai from "./illustrator.png";
import ae from "./after-effects.png";
import fb from "./image 6.png";
import i from "./image 5.png";
import B from "./image 9.png";
import p1 from "./P1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-serief)] " suppressHydrationWarning={true}>
      <Pages/>
      <Text/>
      <Picture/>
      <About/>
      <Experience/>
      <Contact/>
      <Projects/>
    </div>
  );
}

function Pages(){
  return(
    <div className="flex flex-row justify-items-center justify-center w-[295px] h-[88px] items-center border-2 border-fff-700 rounded-3xl fixed top-[90%] left-[40%] md: flex flex-row sm: w-[96/2px] h-[295/2px]" suppressHydrationWarning={true}>
      <a href="#About" className="p-[16px] font-[jellee] hover:text-2xl">About</a><br />
      <a href="#Work" className="p-[16px] font-[jellee] hover:text-2xl">Work</a><br />
      <a href="." className="p-[16px]"> <Image src={Logo} width={64} height={64} alt="Logo" className="hover:shadow-white-500/50"/> </a><br />
    </div>
  )
}

function Text(){
  return(
    <div className="absolute top-45 right-[45%] items-center   "  id="Text" suppressHydrationWarning={true}>
      <h1 className="text-6xl mt-4 font-[jellee] ">Hi There , I’m Tarek </h1>
      <h2 className="text-4xl mt-4 font-[jellee]  ">  I’m graphic designer</h2>
      <p className="text-2xl mt-4 font-[jellee] "> As a seasoned graphic designer, I'm skilled in Adobe's creative suite, <br />
        specializing in vector graphics and photo editing with Illustrator and Photoshop, <br />
         while also crafting dynamic video content through After Effects and Premiere Pro. <br />
      I enjoy bringing ideas to life through both static and motion design, <br />
       whether it's creating sleek brand assets or producing engaging video content. <br />
       </p>
    </div>
  )
}

function Picture(){
  return(
    <div className="absolute top-50 right-[7%] bg-white max-w-[332px] max-h-[377px] min-w-[166px] min-h-[83px]  justify-items-center justify-center items-center content-center border  rounded-3xl md: fixed right-2 w-[332/2px] h-[377/2px]">
      <Image src={Tarek} width={280} height={318} alt="tarek" className="min-w-[140px] min-h-[67px]"/>
    </div>
  )
}


function About(){
  return(
    <div className="absolute top-[2%] left-[150%] flex flex-col w-auto h-[232] justify-items-center">
      <div className=""><h1 className="text-6xl font-[jellee] m-4">Education</h1><div className="w-[433] h-[116] border border-4 border-white border-dashed rounded-xl"><p className="font-[jellee] text-4xl m-2">Technical Institute of health in Aswan</p></div></div> 
      <div className="" ><h1 className="text-6xl font-[jellee] m-4" >Tools</h1><div className="flex flex-row w-[440px] h-[143] border border-4 border-white border-dashed rounded-xl">
        <Image src={ps} width={72} height={72} alt="photoshop" className="m-4"/>
        <Image src={pp} width={72} height={72} alt="photoshop" className="m-4"/>
        <Image src={ai} width={72} height={72} alt="photoshop" className="m-4"/>
        <Image src={ae} width={72} height={72} alt="photoshop" className="m-4"/>
        </div>
        </div>
      <div className=""> <h1 className="text-6xl font-[jellee] m-4">Skills</h1> <div className="w-433 h-143 border border-4 border-white border-dashed rounded-lg"><p className="text-2xl font-[jellee] m-4">Social media designer <br /> Logo Designer   Video Editor <br />Motion Graphic Designer</p></div></div>
      <div className="absolute top-[2%] left-[330%]" id="About"></div>
    </div>
  )
};
function Experience(){
  return(
    <div className="absolute top-[2%] left-[175%]" >
            <div className=""><h1 className="text-6xl font-[jellee] m-4">Experience</h1> <div className="w-[433px] h-[535px] border border-4 border-white border-dashed content-center rounded-lg"><p className="text-2xl font-[jellee] m-8 leading-8">Social media designer <br /> 2021</p> <p className="text-2xl font-[jellee] m-8">Logo Designer <br /> 2021</p><p className="text-2xl font-[jellee] m-8">Video Editor <br /> 2021</p><p className="text-2xl font-[jellee] m-8">Motion Graphic Designer <br />2021</p></div></div>

    </div>
  )
}

function Contact(){
  return(
    <div className="w-[323px] h-[115px] mt-5 border border-4 border-dashed border-white rounded-xl justify-between flex flex-row items-center absolute top-[72%] left-[165%]">
      <a href="https://www.instagram.com/khoreshy/" className="m-4"><Image src={i} alt="" width={104} height={104}/></a>
      <a href="https://www.facebook.com/profile.php?id=100008166999900" className="m-4"><Image src={fb} alt="" width={104} height={104}/></a>
      <a href="https://www.behance.net/trkkrshy" className="m-4"><Image src={B} alt="" width={104} height={104}/></a>
    </div>
  )
}

function Projects(){
  return(
    <div className="absolute top-[3%] left-[250%]  w-[1990px] h-[864px] justify-items-center" id="Work" >
      <div className="flex flex-row">
      <a href="https://www.behance.net/gallery/205600515/A-new-project-for-an-advertising-campaign" className="mr-4 hover:w-[398px]"><Image src={p1}  alt="" width={364} height={364}/></a>
      <a href="https://www.behance.net/gallery/188542447/Saudi-national-day-%28-93%29" className="mr-4"><Image src={p2}  alt="" width={364} height={364}/></a>
      </div> <br />
      <div className="flex flex-row">
      <a href="https://www.behance.net/gallery/185304127/Social-Media-posts-for-marketing-agency" className="mr-4"><Image src={p3}  alt="" width={364} height={364}/></a>
      <a href="https://www.behance.net/gallery/213823997/Social-media-designs-about-teeth" className="mr-4"><Image src={p4}  alt="" width={364} height={364} /></a>
      </div>
    </div>
  )
}