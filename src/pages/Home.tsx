import { Button } from '@/components/ui/button';
import book from '@/assets/images/book.png';
import Footer from '@/layouts/Footer';
import RecentBooks from './RecentBooks';

export default function Home() {
  return (
    // <div className='mx-auto container'>
    //   <div className="flex justify-between  items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
    //     <div>
    //       <h1 className="text-6xl font-black text-primary mb-2">
    //         Book <br /> Worm
    //       </h1>
    //       <p className="text-secondary font-semibold text-xl">
    //         Effortless books at your fingertips
    //       </p>
    //       <div className="text-primary mt-20">
    //         <p>Book one for easy, secure communication</p>
    //         <p>Precise white paperback pages for clear visuals</p>
    //       </div>
    //       <Button className="mt-5">Scroll down to see recent books</Button>
    //     </div>
    //     <div className="relative -right-14">
    //       <img src={book} alt="" />
    //     </div>
    //   </div>
    //   <RecentBooks ></RecentBooks>

    //   <Footer />
    // </div>

    <div>
      <div className="hero h-600px bg-base-600">
        <div className="hero-content flex justify-between  items-center flex-col lg:flex-row-reverse">
          <div className="text-center  lg:text-left">

            <div className="relative ">
              <img src={book} alt="" />
            </div>


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-600">
            <div className="card-body">
              <div>
                <h1 className="text-6xl font-black text-primary mb-2">
                  MovieDB <br /> 
                </h1>
                <p className="text-secondary font-semibold text-xl">
                  Effortless books at your lorem
                </p>
                <div className="text-primary">
                  <p>movie one for easy, secure communication</p>
                  <p>Precise white paperback pages for clear visuals</p>
                </div>
                <Button className="">Scroll down to see recent movies</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className='mt-10'>
    <RecentBooks ></RecentBooks>

<Footer />
    </div>

    </div>




  );
}
