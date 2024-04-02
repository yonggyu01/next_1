import Image from "next/image";
import mainstyle from "./styles/main.module.scss"
export default function Home() {
  return (
    <main className={mainstyle.mainbg}>
      <div className={mainstyle.main}>

            <div className={mainstyle.title} >
                <h2>
                  하루하루 일상을  
                </h2>
                <h2>
                기록하는 페이지
                </h2>
                <p> 오늘 할일을 <strong>빠르게</strong> 기록해보세요 </p>
            </div>
            <div>
        
        </div>
    </div>
    </main>
   
  );
}
