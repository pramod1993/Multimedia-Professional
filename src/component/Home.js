import React, { Component } from 'react';
import * as Styled from './HomeStyled';
import Carousel from 'react-bootstrap/Carousel';
import Bg1 from '../img/bg1.jpg';
import Bg2 from '../img/bg2.jpg';
import Bg3 from '../img/bg3.jpg';
import steven from '../img/steven-spielberg.jpg';
import english from '../img/english.jpg';
import university from '../img/university-student.jpg';
import library from '../img/library.jpg';
import students from '../img/students.jpg';
import pramod from '../img/pramod.jpg';
import university1 from '../img/university.jpg';
import team from '../img/final-team.jpg';
import team1 from '../img/final-team1.jpg';
import team2 from '../img/final-team2.jpg';
import graduation from '../img/graduation.jpg';
import graduation1 from '../img/graduation1.jpg';
import graduation2 from '../img/graduation2.jpg';
import francis1 from '../img/francis-quadrangle.jpg';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Bg1}  alt="First slide"/>
            <Carousel.Caption>
              <h3>Awesome Theme</h3>
              <p>Perfect theme for educational institute, university, colleges, schools as well as corporate offices. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Bg2} alt="Second slide"/>

            <Carousel.Caption>
            <h3>Easily Change Title, Image and Text</h3>
            <p>Add or edit page title, content and feature image to change everything as you want. Its awesome.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Bg3} alt="Third slide"/>

            <Carousel.Caption>
            <h3>Extended Premium Features</h3>
            <p>
            Added premium features will help to customize the theme as your need. 
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



      <div className='container'>
        <Styled.row>
          <Styled.body>
              <div className='heding'>
                <h3><Link to='/'>INTRODUCTION</Link></h3>
              </div>
              <div className='text'>
                <p>Our university is well recognized university in the world with more than 35 departments, above 100 programs and more than 500 institute all over the world. You can find the nearest institute coordinate with us and they are providing the best education ever all over the world. Grab your opportunity soon.</p>
              </div>
          </Styled.body>
          <Styled.body1>
              <div className='heding'>
                <h3><Link to='/'>DEPARTMENTS</Link></h3>
              </div>
              <div className='text'> 
              <p>More than 35 departments, with experienced faculty and modern facilities to help you excel. Get admission on our university today and enhance your knowledge with your best faculty. Every department team will monitor individual students with proper guidance. Learn from Us !!</p> 
              </div>
          </Styled.body1>
          <Styled.body2>
              <div className='heding'>
                <h3><Link to='/'>INSTITUTE</Link></h3>
              </div>
              <div className='text'>
                <p>We have over 500 institute all over the world and every institute are well managed and regularly monitored by university. Choose your best place to learn and choose your best program from our university. Your success and bright future always be on the right university and right program.</p>
              </div>
          </Styled.body2>
        </Styled.row>
      </div>
      <Styled.director>
      <div className='container'>
        <Styled.row>
          <Styled.megesImg>
            <img src={steven}/>
          </Styled.megesImg>
          <Styled.megesBox>
            <Styled.heding>
              <h2>MESSAGE FROM DIRECTOR</h2>
              <Styled.capIcon><FaGraduationCap/></Styled.capIcon>
            </Styled.heding>
            <Styled.directorBody>
              <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It uses a dictionary of over 200 Latin words. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
            <Link to='/' className='btn btn-primary view'> View More</Link>
            </Styled.directorBody>
          </Styled.megesBox>
        </Styled.row>
      </div>
      </Styled.director>

      <Styled.row>
        <div className='container'>
          <Styled.about>
            <h4>ABOUT US</h4>
            <Styled.abotIcom><FaGraduationCap/></Styled.abotIcom>
          </Styled.about>
          <Styled.row>
            <Styled.aboutbody>
              <Styled.jobicon>
                <FaBriefcase/>
              </Styled.jobicon>
              <Styled.jobheding><h4>JOB PLACEMENT</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle…</p>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobicon>
                <FaBriefcase/>
              </Styled.jobicon>
              <Styled.jobheding><h4>QUALITY LIBRARY</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle…</p>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobicon>
                <FaBriefcase/>
              </Styled.jobicon>
              <Styled.jobheding><h4>UNLIMITED BOOKS</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle…</p>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobicon>
                <FaBriefcase/>
              </Styled.jobicon>
              <Styled.jobheding><h4>EXTRA ACTIVITIES</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle…</p>
              </Styled.abouttext>
            </Styled.aboutbody>
          </Styled.row>
        </div>
      </Styled.row>


      <Styled.row>
        <div className='container'>
          <Styled.about>
            <h4>ACADEMICS DEPARTMENTS</h4>
            <Styled.abotIcom><FaGraduationCap/></Styled.abotIcom>
          </Styled.about>
          <Styled.row>
            <Styled.aboutbody>
              <Styled.jobheding><h4>LITERATURE</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc to generate Lorem Ipsum which looks reasonable.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobheding><h4>PHYSICS</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested, It uses a dictionary of over 200 Latin words combined.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobheding><h4>ENGLISH</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It uses a dictionary of over 200 Latin words.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.jobheding><h4>MATHEMATICS</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout injected humour, or non-characteristic words etc.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>
          </Styled.row>
        </div>
      </Styled.row>


      <Styled.row>
        <div className='container'>
          <Styled.about>
            <h4>COURSES</h4>
            <Styled.abotIcom><FaGraduationCap/></Styled.abotIcom>
          </Styled.about>
          <Styled.row>
            <Styled.aboutbody>
              <Styled.medicalimg>
                <img src={english}/>
              </Styled.medicalimg>
              <Styled.jobheding><h4>MEDICAL</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet. Join the course.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.medicalimg>
                <img src={university}/>
              </Styled.medicalimg>
              <Styled.jobheding><h4>ENGINEERING</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested by Cicero are also reproduced in their exact original form.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.medicalimg>
                <img src={library}/>
              </Styled.medicalimg>
              <Styled.jobheding><h4>MANAGEMENT</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio tellus. Maecenas consectetur adipiscing elit Lorem ipsum dolor sit amet. Want to join here?</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.medicalimg>
                <img src={students}/>
              </Styled.medicalimg>
              <Styled.jobheding><h4>TECHNOLOGY</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>
          </Styled.row>
        </div>
      </Styled.row>


      <Styled.row>
        <div className='container'>
          <Styled.about>
            <h4>OUR TEAM</h4>
            <Styled.abotIcom><FaGraduationCap/></Styled.abotIcom>
          </Styled.about>
          <Styled.row>
              <Styled.ourtem>
                <img src={pramod}/>
                <Styled.hovertext>
                  <h6>DR PUSPA LAL</h6>
                  <span>Founder/Director</span>
                </Styled.hovertext>
              </Styled.ourtem>

              <Styled.ourtem>
                <img src={pramod}/>
                <Styled.hovertext>
                  <h6>MRS SAMJHANA OCIE</h6>
                  <span>Principal</span>
                </Styled.hovertext>
              </Styled.ourtem>

              <Styled.ourtem>
                <img src={pramod}/>
                <Styled.hovertext>
                  <h6>DR GHANSYAM ROY</h6>
                  <span>Account Head</span>
                </Styled.hovertext>
              </Styled.ourtem>

              <Styled.ourtem>
                <img src={pramod}/>
                <Styled.hovertext>
                  <h6>AAROHAN SHUEY</h6>
                  <span>Program Coordinator</span>
                </Styled.hovertext>
              </Styled.ourtem>
          </Styled.row>
        </div>
      </Styled.row>
    

    
    <div style={{ backgroundImage: `url(${university1})`,  backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', backgroundSize: 'cover',  backgroundPosition: 'center',padding: '50px 0',
      margin: '0 0 50px 0', }}>
        <Styled.row>
        <div className='container'>
          <Styled.testimonial>
            <h4>TESTIMONIALS</h4>
            <Styled.testimonialIcom><FaGraduationCap/></Styled.testimonialIcom>
          </Styled.testimonial>
        <Styled.row>
          <Styled.testimobox>
            <Styled.testimoheding>
              <Styled.testimoimg>
                <img src={team}/>
              </Styled.testimoimg>
              <Styled.testimohed>
                <h6>RAGHURAM RASTRA</h6>
              </Styled.testimohed>
            </Styled.testimoheding>
            <Styled.testimotitle>
            Acme Themes developed theme with quality code and elegant design. The experts team developed awesome theme with incredible supports. Love It !!!
            </Styled.testimotitle>
          </Styled.testimobox>

          <Styled.testimobox>
            <Styled.testimoheding>
              <Styled.testimoimg>
                <img src={team1}/>
              </Styled.testimoimg>
              <Styled.testimohed>
                <h6>MRS SUDANA BRIC</h6>
              </Styled.testimohed>
            </Styled.testimoheding>
            <Styled.testimotitle>
            Education Base is one of the awesome theme in the WordPress theme history. The experts team developed theme with highly crafted design and quality codes.
            </Styled.testimotitle>
          </Styled.testimobox>

          <Styled.testimobox>
            <Styled.testimoheding>
              <Styled.testimoimg>
                <img src={team2}/>
              </Styled.testimoimg>
              <Styled.testimohed>
                <h6>MR ROB ROY</h6>
              </Styled.testimohed>
            </Styled.testimoheding>
            <Styled.testimotitle>
            Acme Themes is a team of experts web developer. They design and build amazing WordPress themes. I am happy to work with the theme and enjoy the products.
            </Styled.testimotitle>
          </Styled.testimobox>

        </Styled.row>        
    </div>
    </Styled.row>
    </div>


    <Styled.row>
        <div className='container'>
          <Styled.about>
            <h4>PUBLISHED NOTICE</h4>
            <Styled.abotIcom><FaGraduationCap/></Styled.abotIcom>
          </Styled.about>
          <Styled.row>
          <Styled.aboutbody>
              <Styled.publicimg>
                <Styled.imgover/>
                <img src={graduation}/>                
                <Styled.publicover>
                  <h4>17</h4>
                  <p>Oct</p>
                </Styled.publicover>
              </Styled.publicimg>
              <Styled.jobheding><h4>CONVOCATION PROGRAM</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>25th convocation program is going to held on Dec 20, 2016. All the passed students of graduate and post graduate students are highly encourage and request to apply for coming convocation. It’s all about proofing yourself to become a graduate students. Grab the opportunity this time, don’t miss it.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.publicimg>
                <Styled.imgover/>
                <img src={graduation1}/>
                <Styled.publicover>
                  <h4>17</h4>
                  <p>Oct</p>
                </Styled.publicover>
              </Styled.publicimg>
              <Styled.jobheding><h4>EDUCATIONAL TOUR</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>Educational tour for biology students of bachelor 6th semester is going to held on coming 20th of November to 25th of November. Every students are invited. Please fill the form and registered your name here. If you missed the registration, we are sorry to carry you on tour. Register it as soon as possible.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

            <Styled.aboutbody>
              <Styled.publicimg>
                <Styled.imgover/>
                <img src={graduation2}/>
                <Styled.publicover>
                  <h4>17</h4>
                  <p>Oct</p>
                </Styled.publicover>
              </Styled.publicimg>
              <Styled.jobheding><h4>WELCOME PROGRAM</h4></Styled.jobheding>
              <Styled.abouttext>
                  <p>Our university organize student welcome program on every year. This program will help to introduce the students with each other and can share their ideas, feelings and many more. This program is going to held on coming next Sunday. Every students, staff, faculties and parents are welcome.</p>
                  <Link to='/' className='btn btn-primary view'> Read More</Link>
              </Styled.abouttext>
            </Styled.aboutbody>

          </Styled.row>
        </div>
    </Styled.row>

    
    <Styled.row>
      <div className='container'>
      <Styled.row>
        <Styled.imgbox>
          <img src={francis1}/>
          <Styled.imgtext>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Styled.imgtext>
        </Styled.imgbox>
        <Styled.seachbox>
          <Styled.seachtext>
            <h5>SERACH</h5>
            <Styled.bor/>
            <Styled.searchbar>
            <input type='text' className='form-control' placeholder='Search Hare'/>
            <Link to='/'><FaSearch/></Link>
            </Styled.searchbar>
          </Styled.seachtext>

          <Styled.seachtext>
            <h5>RECENT POSTS</h5>
            <Styled.bor/>
            <Styled.post>
              <p>Convocation Program</p>
            </Styled.post>
            <Styled.post>
              <p>Educational Tour</p>
            </Styled.post>
            <Styled.post>
              <p>Welcome Program</p>
            </Styled.post>
          </Styled.seachtext>

          <Styled.seachtext>
            <h5>RECENT COMMENTS</h5>
            <Styled.bor/>
            <Styled.post>
              <p>educationbase on Online Admission</p>
            </Styled.post>
            <Styled.post>
              <p>Samjhana Bric on Convocation Program</p>
            </Styled.post>
          </Styled.seachtext>

          <Styled.seachtext>
            <h5>ARCHIVES</h5>
            <Styled.bor/>
            <Styled.post>
              <p>October 2016</p>
            </Styled.post>
          </Styled.seachtext>

          <Styled.seachtext>
            <h5>CATEGORIES</h5>
            <Styled.bor/>
            <Styled.post>
              <p>Notice</p>
            </Styled.post>
          </Styled.seachtext>

        </Styled.seachbox>
        </Styled.row>
      </div>
    </Styled.row>










      </div>
    )
  }
}
