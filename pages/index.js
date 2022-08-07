import Link from "next/link";
import Image from "next/image";
import icon from "../public/dscIcon.png";
import styles from "../styles/Home.module.css";
import mockData from "../assets/MOCK_DATA.json";

export default function Home() {  
  return (
    <div>
      <div className="flex flex-row justify-between px-3 pt-2">
        <div className="flex gap-2">
          <Image src={icon} height="24" width="80" margin-top="2" />
          <h1 className="font-title font-semibold text-gray-600 text-3xl pt-2 underline decoration-cyan-500">
            DSCSRM Blog Website
          </h1>
        </div>

        <div className="flex items-center pt-2">
          <button
              type="button"
              class="font-title font-bold inline-block px-2.5 py-2.5 bg-cyan-500 text-white text-xs leading-tight  rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  transition duration-150 ease-in-out"
            >
              <Link href="/blog-form"> Create New </Link>
          </button>
          <AnimatedLink href="#">Topics</AnimatedLink>
          <AnimatedLink href="#">New</AnimatedLink>
          <AnimatedLink href="#">Popular</AnimatedLink>
          <AnimatedLink href="#">Trending</AnimatedLink>
          
        </div>
      </div>
      <LandingArticles/>
    </div>
  );
}

function AnimatedLink({ href, children }) {
  return (
    <Link passHref href={href}>
      <a
        className={`font-title font-semibold mx-5 mt-2 block border-0 bg-no-repeat ${styles.linkUnderline}`}
        href={href}
      >
        {children}
      </a>
    </Link>
  );
}


function LandingArticles(){
  
  const articles = mockData;
  return(
    <div className='flex flex-col gap-20 pt-10 pl-7 items-center'>
      {articles?.map((x)=>(
        <div key={x.id} className="w-11/12 p-5 rounded-2xl shadow-xl transform transition duration-300 hover:-translate-y-2">
          <h3 className="py-2 italic font-semibold text-2xl">{x.title}</h3>
          <p className="py-2 italic">{x.date}</p>
          <h2 className="py-2 italic font-semibold">{x.author}</h2>
          <p className="py-2">{x.content}</p>
        </div>
      ))}
    </div>
  )
}
