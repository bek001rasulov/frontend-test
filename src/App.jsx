import './App.css'
import IconBtc from './assets/Bitcoin.svg';
import IconLtc from './assets/Litecoin.svg';
import IconEth from './assets/Ethereum.svg';
import IconGooglePlay from './assets/google-play.svg';
import IconAppStore from './assets/app-store.svg';
import Card from "./components/card/index.jsx";
import Avatar1 from "./assets/photoLorenzo.png";
import Avatar2 from "./assets/photoAdalina.png";
import Avatar3 from "./assets/photoAlexander.png";
import Avatar4 from "./assets/photorRushana.png";

function App() {

    return (
        <div className='container'>
            <div className='landing'>
                <h1 className='title'>
                    Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span>
                </h1>
                <p className='text-subscribe'>Subscribe to our channel to learn more</p>

                <div className='statistics-block'>
                    <div className='statistics-item'>
                        <span>20k+</span>
                        <p>subscribers</p>
                    </div>
                    <div className='statistics-item'>
                        <span>19,5K</span>
                        <p>successful cases</p>
                    </div>
                    <div className='statistics-item'>
                        <span>4.8/5</span>
                        <p>rating</p>
                    </div>
                </div>
                <button className='btn'>
                    Join Whatsapp
                </button>

                <div className='download-links'>
                    <a href="" className='download-item'>
                        <img src={IconGooglePlay} alt="google-play"/>
                        <div className='download_text-wrapper'>
                            <p className='download_text-top'>
                                get it on
                            </p>
                            <p className='download_text'>
                                Google play
                            </p>
                        </div>
                    </a>
                    <a href="" className='download-item'>
                        <img src={IconAppStore} alt="appstore"/>
                        <div className='download_text-wrapper'>
                            <p className='download_text-top'>
                                Available on the
                            </p>
                            <p className='download_text'>
                                App Store
                            </p>
                        </div>
                    </a>
                </div>

                <div className="landing-card_1">
                    <Card
                        img={Avatar1}
                        username={'Lorenzo'}
                        email={'@lorenzoo'}
                        text={'Amazing Telegram bot! Provides real-time crypto prices and news'}
                    />
                </div>
                <div className="landing-card_2">
                    <Card
                        img={Avatar2}
                        username={'Lorenzo'}
                        email={'@lorenzoo'}
                        text={'Amazing Telegram bot! Provides real-time crypto prices and news'}
                    />
                </div>
                <div className="landing-card_3">
                    <Card
                        img={Avatar3}
                        username={'Lorenzo'}
                        email={'@lorenzoo'}
                        text={'Amazing Telegram bot! Provides real-time crypto prices and news'}
                    />
                </div>
                <div className="landing-card_4">
                    <Card
                        img={Avatar4}
                        username={'Lorenzo'}
                        email={'@lorenzoo'}
                        text={'Amazing Telegram bot! Provides real-time crypto prices and news'}
                    />
                </div>

                <img className='btc' src={IconBtc} alt="btc"/>
                <img className='ltc' src={IconLtc} alt="ltc"/>
                <img className='eth' src={IconEth} alt="eth"/>
            </div>
        </div>
    )
}

export default App
