import PeringatanDiniApp from '../assets/img/PeringatanDiniApp.gif'
import LoadingPeringatanDiniApp from '../assets/img/LoadingPeringatanDiniApp.jpg'
import TemptConvApp from '../assets/img/TemptConvApp.gif'
import LoadingTemptConvApp from '../assets/img/LoadingTemptConvApp.jpg'
import TokenSaverApp from '../assets/img/TokenSaverApp.gif'
import LoadingTokenSaverApp from '../assets/img/LoadingTokenSaverApp.jpg'
import ForcastPosterMakerApp from '../assets/img/ForcastPosterMakerApp.gif'
import LoadingForcastPosterMakerApp from '../assets/img/LoadingForcastPosterMakerApp.jpg'
import LocalFileManager from '../assets/img/LocalFileManager.gif'
import LoadingLocalFileManager from '../assets/img/LoadingLocalFileManager.jpg'
import SurveyBarangKelasApp from '../assets/img/SurveyBarangKelasApp.gif'
import LoadingSurveyBarangKelasApp from '../assets/img/LoadingSurveyBarangKelas.jpg'

import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ProjectSection() {
    
      
    const ProjectDescTextStyle = {
        color:"black",
        fontWeight:"lighter"
    }
   
    
    return(
        <>
            <div className="project-section">
                 <div
                 id='projects'
                 className="projects"
                 >
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                        className='project-text-wrapper'
                        >           
                           <div className='title-project-head'>
                           <h2>SOME OF MY PROJECTS</h2>
                            <br />
                            <p 
                            style={ProjectDescTextStyle}>
                                Some of it i do for fun and some of it i do for work or competition.
                                </p>
                           </div>
                           <div className='github'>
                           <a style={{ textDecoration:"underline", color:"black" }} href='https://github.com/kurniawanrzk'>
                            For More Projects And Apps, Check Out My Github pages
                            </a>
                           </div>
                        </div>
                        <div 
                        className="project">
                           <figure
                               data-aos="fade-up"
                               data-aos-duration="700"
                               data-aos-easing="ease-in-out"
                           className="project-item"> 
                           <a href="https://github.com/BMKGKOTIM/peringatanDiniKotim"></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingPeringatanDiniApp} effect='blur' src={PeringatanDiniApp} /> 
                                <figcaption>
                                    <center>
                                    <p>Weather Warning Estimation</p>
                                    </center>
                                </figcaption>   
                            </figure>
                            <figure
                                data-aos="fade-up"
                                data-aos-duration="900"
                                data-aos-easing="ease-in-out"
                            className="project-item"> 
                            <a href="https://github.com/Kurniawanrzk/tempt-convertion"></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingTemptConvApp} effect='blur' src={TemptConvApp} />   
                                <figcaption>
                                    <center>
                                    <p>Temprature Convertion App</p>
                                    </center>
                                </figcaption>    
                            </figure>
                            <figure
                                data-aos="fade-up"
                                data-aos-duration="1100"
                                data-aos-easing="ease-in-out"
                            className="project-item"> 
                            <a href='https://github.com/Kurniawanrzk/survey-website'></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingSurveyBarangKelasApp} effect='blur' src={SurveyBarangKelasApp}/>   
                                <figcaption>
                                    <center>
                                    <p>Survey Barang Kelas</p>
                                    </center>
                                </figcaption>    
                            </figure>
                            <figure
                             data-aos="fade-up"
                             data-aos-duration="700"
                             data-aos-easing="ease-in-out"
                            className="project-item"> 
                            <a href="https://github.com/Kurniawanrzk/token-saver"></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingTokenSaverApp} effect='blur' src={TokenSaverApp} />   
                                <figcaption>
                                    <center>
                                    <p>Token Saver App</p>
                                    </center>
                                </figcaption>    
                            </figure>
                            <figure
                             data-aos="fade-up"
                             data-aos-duration="900"
                             data-aos-easing="ease-in-out"
                            className="project-item"> 
                            <a href="https://github.com/BMKGKOTIM/forecastkecamatan"></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingForcastPosterMakerApp} effect='blur' src={ForcastPosterMakerApp} />   
                                <figcaption>
                                    <center>
                                    <p>Forecast Poster Maker App</p>
                                    </center>
                                </figcaption>    
                            </figure>
                            <figure
                             data-aos="fade-up"
                             data-aos-duration="1100"
                             data-aos-easing="ease-in-out"
                            className="project-item"> 
                            <a href="https://github.com/Kurniawanrzk/LocalFileManager" ></a>
                                <LazyLoadImage width={300} height={170} placeholderSrc={LoadingLocalFileManager} effect='blur' src={LocalFileManager} />   
                                <figcaption>
                                    <center>
                                    <p>Local File Manager</p>
                                    </center>
                                </figcaption>    
                            </figure>
                        </div>
                 </div>
            </div>
        </>
    )
}