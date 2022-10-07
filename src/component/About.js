import React, { Component } from 'react'
import * as Styled from './AboutStyled';
import aboutheding from '../img/aboutheding.jpg';
import aboutimg from '../img/aboutimg.jpg';
import post from '../img/post.jpg';
import post1 from '../img/post1.jpg';
import post2 from '../img/post2.jpg';
import post3 from '../img/post3.jpg';
import { BsClock} from "react-icons/bs";
import { BsFillCaretRightFill} from "react-icons/bs";

import { Link } from 'react-router-dom';
export default class About extends Component {
  render() {
    return (
      <div>
        <Styled.AboutHeder>
          <Styled.over/>
          <img src={aboutheding}/>
          <Styled.overtext>
            <h1>About Us</h1>
            <Styled.link>
              <ul>
                <li><a href='/'>Home</a></li>
                <li>/</li>
                <li>About</li>
              </ul>
            </Styled.link>
          </Styled.overtext>
        </Styled.AboutHeder>

        <Styled.row>
          <div className='container'>
            <Styled.row>
            <Styled.aboutimg>
              <img src={aboutimg} />
              <Styled.aboutimgtext>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus erat at libero blandit molestie eget ac ipsum. Nullam fermentum a magna quis dapibus. Donec lectus augue, scelerisque in finibus quis, imperdiet id turpis. Cras quis eleifend velit. Aliquam vulputate neque vitae nisl vestibulum, a mollis quam viverra. Curabitur a mi quam. Nulla auctor ipsum in varius accumsan. Aliquam erat volutpat. Suspendisse eu nisl suscipit, suscipit turpis ac, dapibus velit.</p>
                <p>In hac habitasse platea dictumst. Etiam congue nisl quis est scelerisque congue. Vestibulum ullamcorper pretium nisl, ac viverra turpis ultrices eget. Aenean a tristique erat. Proin a semper odio. Morbi volutpat justo nec vulputate feugiat. Quisque eu eros nec nisi egestas lacinia. Duis pellentesque pellentesque justo in consectetur. Donec odio nisi, gravida in enim eu, semper posuere nisl. Nulla dictum dictum pharetra. Praesent laoreet, ex a pellentesque blandit, felis mi posuere risus, vel molestie turpis magna eu quam. Nam a ultrices ante.</p>
                <p>Nulla sem enim, suscipit id nisl vel, vestibulum faucibus nibh. Nunc eget mollis justo. Mauris et sapien in sem pretium sollicitudin. Morbi blandit, metus id semper fringilla, turpis urna vehicula mi, sit amet sollicitudin magna purus non dui. Maecenas sed sem tristique, efficitur nisi et, suscipit ipsum. Aenean fermentum eget velit id gravida. Phasellus rhoncus commodo leo nec molestie. Mauris viverra quis orci ac accumsan. Fusce imperdiet eros at convallis congue. Duis congue nisl dolor, scelerisque tristique tortor facilisis nec. Nulla est turpis, rhoncus non iaculis eget, posuere sit amet eros. Nulla semper commodo tortor, sed rhoncus nisl accumsan id. Phasellus accumsan maximus nisl, quis consequat neque efficitur non. Proin mi ipsum, posuere eu ligula id, tempus bibendum mauris. Nullam a dignissim libero.</p>
              </Styled.aboutimgtext>
            </Styled.aboutimg>
            <Styled.abouttext>
              <Styled.search>
                <input type="text" className='form-control' placeholder='Search Hare............'/>
                <Styled.abouticon>Search</Styled.abouticon>
              </Styled.search>
              <Styled.Recentbox>
              <Styled.Recent>
                <h4>Recent Highlights</h4>
                <Styled.bor/>
                <Styled.bor1/>
              </Styled.Recent>
              <Styled.postbox>
                <Styled.row>
                <Styled.postimg>
                  <img src={post} />
                </Styled.postimg>
                <Styled.posttext>
                  <h6><Link to='/'>Decision Making by Coaches and Athletes in Sport</Link></h6>
                  <Styled.capIcon><BsClock/> January 9, 2018</Styled.capIcon>
                </Styled.posttext>
                </Styled.row>
              </Styled.postbox>

              <Styled.postbox>
                <Styled.row>
                <Styled.postimg>
                  <img src={post1} />
                </Styled.postimg>
                <Styled.posttext>
                  <h6><Link to='/'>Successful Students Celebrating Graduation Degree</Link></h6>
                  <Styled.capIcon><BsClock/> January 9, 2018</Styled.capIcon>
                </Styled.posttext>
                </Styled.row>
              </Styled.postbox>

              <Styled.postbox>
                <Styled.row>
                <Styled.postimg>
                  <img src={post2} />
                </Styled.postimg>
                <Styled.posttext>
                  <h6><Link to='/'>Software and Computer Workshop and Conference</Link></h6>
                  <Styled.capIcon><BsClock/> January 9, 2018</Styled.capIcon>
                </Styled.posttext>
                </Styled.row>
              </Styled.postbox>

              <Styled.postbox>
                <Styled.row>
                <Styled.postimg>
                  <img src={post3} />
                </Styled.postimg>
                <Styled.posttext>
                  <h6><Link to='/'>Student Using Microscope in Science</Link></h6>
                  <Styled.capIcon><BsClock/> January 9, 2018</Styled.capIcon>
                </Styled.posttext>
                </Styled.row>
              </Styled.postbox>
              
            </Styled.Recentbox>

            <Styled.Recentbox>
              <Styled.Recent>
                <h4>Recent Posts</h4>
                <Styled.bor/>
                <Styled.bor1/>
              </Styled.Recent>
              <Styled.postbox>                
                <Styled.posttext>
                  <h6><BsFillCaretRightFill/><Link to='/'>Decision Making by Coaches and Athletes in Sport</Link></h6>
                 </Styled.posttext>
              </Styled.postbox>

              <Styled.postbox>                
                <Styled.posttext>
                  <h6><BsFillCaretRightFill/><Link to='/'>Successful Students Celebrating Graduation Degree</Link></h6>
                 </Styled.posttext>
              </Styled.postbox>

              <Styled.postbox>                
                <Styled.posttext>
                  <h6><BsFillCaretRightFill/><Link to='/'>Software and Computer Workshop and Conference</Link></h6>
                 </Styled.posttext>
              </Styled.postbox>

              <Styled.postbox>                
                <Styled.posttext>
                  <h6><BsFillCaretRightFill/><Link to='/'>Student Using Microscope in Science</Link></h6>
                 </Styled.posttext>
              </Styled.postbox>
              
            </Styled.Recentbox>
            </Styled.abouttext>

            
            </Styled.row>
          </div>
        </Styled.row>
        
      </div>
    )
  }
}
