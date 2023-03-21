import React from "react";
import styles from '../../../styles/services_style.module.css'
import haircutImage from './h1.jpg';

function ServicesPage(){
return(
<div>
    <div className={styles.container}>
        <div className={styles.service_card}>
          <div className={styles.wrapper}>
            <img src={haircutImage} alt="Haircut" />
            <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                <button>Book now!</button>
            </div>     
        </div>

        {/* <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <img src={haircut}/>
                <button>Book now!</button>
            </div>     
        </div> */}

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>

        <div className={styles.service_card}>   
            <div className={styles.wrapper}>
                <figure className="haircut1">
                    <img src="./h1.jpg" alt=""/>
                    <figcaption>
                        <h1 className="haircut_title">This is the service title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
                        <p><b>$99</b></p>
                    </figcaption>
                </figure>
                <button>Book now!</button>
            </div>     
        </div>
        

    </div>

</div>
);
}

export default ServicesPage