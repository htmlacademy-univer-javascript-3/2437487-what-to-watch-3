import {Header} from '@components/header/header.tsx';

export function HeadGuestPage() {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        {/* {<img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />} */}
        <img src="img/bg-header.jpg" alt="Background header"/>
      </div>
      <Header/>
    </section>
  );
}
