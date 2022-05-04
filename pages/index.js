
export default function Home() {
  return (
  <html>
    <head>
    <link rel="stylesheet" href="main.css"/>

    </head>

    <body className="roboto">
      <div className="bg-blue ">
        <div className=" flow-root w-1100 m-auto "> 
          <img className="float-left m-5" src="\img\logo_header.png" alt="error" />
          <div className="float-right font-bold m-5">
            <a href="tel: +780039210" className="text-white text-xl leading-none">8 (800) 00-392-10</a>
            <p className="text-white underline text-sm hover:text-gray-300 ">График работы</p>
          </div>
        </div>
      </div>

      <div className="w-1100 m-auto">
        <ul className="text-sm font-bold blue mt-2 ml-5 float-left w-32 h-32">
            <li className="">
              <div className="w-7 inline-block ">
                <img src="\img\main_icon.png" className=" inline-flex"/>
              </div>
              <a href="" className="inline-flex text-black pt-10 pl-2">главная</a>
            </li>
            <li className="">
              <div className="w-7 inline-block">
                <img src="\img\feed_icon_blue.png" className=" inline-flex"/>
              </div>  
              <a href="" className="inline-flex pt-10 pl-2">отзывы</a>
            </li>
            <li className="">
              <div className="w-7 inline-block">
                <img src="\img\team_icon_blue.png" className=" inline-flex"/>
              </div>  
              <a href="" className="inline-flex pt-10 pl-2">экипаж</a>
            </li>
        </ul>
        <div className="p-5 pl-16">
          <img src="\img\photo.jpg" />
        </div>
      </div>  
    </body>
  </html>
  )
}
