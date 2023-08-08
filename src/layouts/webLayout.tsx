import React from 'react'
import './1.css'
import './2.css'
import './3.css'
import './7.css'
import { Link, Outlet } from 'react-router-dom'
import { ProductPage } from '../pages'
const WebLayout = () => {

  return (
<>
<div className="container w-100 d-f f-d">
      <div className=" header w-100 d-f f-d">
        {/* <!-- --------------header phần logo và menu bar----------------- --> */}
       
          <div className="contain_logo_menu d-f">
            <div className="logo d-f al-c">
              <a href="#" className="d-f al-c jf-c">
                <img id='imglogo'  src="./upload/img/logo/logo.jpg" alt="" />
              </a>
            </div>
            <div className="menu_bar d-f al-c">
              <ul className="d-f al-c">
                <li><Link to={'/'}>Trang chủ</Link></li>
                <li><Link to={'/product'}>Sản phẩm</Link></li>
                <li><Link to={'#'}>Tin tức</Link></li>
                <li><Link to={'#'}>Liên hệ</Link></li>
              </ul>
            </div>
            <div className="signin">
              <Link to={'/dangky'}><button className='btn_dang_ky'>Đăng Ký</button></Link>
              <Link to={'/dangky'}><button className='btn_dang_ky'>Đăng Nhập</button></Link>
            </div>
          </div>

        

        {/* <!-- --------------header phần danh mục và tìm kiếm số điện thoại-----------------   --> */}

        <div className="header-category_search d-f al-c">
          <div className="contain_category d-f al-c">
            <div className="d-f al-c category">
              <i className="fa-solid fa-bars category-bar"></i>
              <div className="category-text">Danh mục</div>
            </div>
            <i className="fa-solid fa-chevron-down category-icon-down"></i>
          </div>
          <div className="search">
            <form action="" className="d-f">
              <input
                type="text"
                className="input-search"
                placeholder="Bạn cần tìm kiếm sản phẩm..."
              />
              <input type="submit" value="Tìm kiếm" className="search-btn" />
            </form>
          </div>
          <div className="contain_number-phone d-f al-c">
            <div className="icon-phone">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="numberPhone d-f f-d">
              <span className="numberPhone_number">0123456678</span>
              <span className="numberPhone_24">Hỗ trợ 24/07</span>
            </div>
          </div>
        </div>
      </div>
    <div>
        <Outlet/>
    </div>
      {/* <!-- -----------------------main--------------------------- --> */}
      <footer>
        <div className="column logo-address">
          <div className="footer-logo">
            <a href="">
              <img src="./img/logo/logo_png.png" alt="" />
            </a>
            <ul className="footer-list">
              <li>FPT Phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</li>
              <li>01224345465</li>
              <li>user@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* <!-- ---------------------------------- --> */}
        <div className="d-f jf-b">
          <div className="column2 logo-address">
            <div className="footer-logo2">
              {/* <h3>Liên kết hữu ích</h3> */}
              <ul className="footer-list">
                <li>Về chúng tôi</li>
                <li>Liên hệ</li>
                <li>Chính sách bảo mật</li>
                <li>Chính sách đổi trả</li>
              </ul>
            </div>
          </div>
          {/* <!-- ---------------------------------- --> */}
          <div className="column2 logo-address">
            <div className="footer-logo2">
              {/* <h3>Đăng kí nhận thông tin mới nhất</h3> */}
              <ul className="footer-list">
                <li>
                  Nhập email của bạn để nhận thông tin khuyến mãi sớm nhất của
                  chúng tôi
                </li>
              </ul>
              <div className="search">
                <form action="" className="d-f">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Đăng kí"
                  />
                  <input
                    type="submit"
                    value="Đăng kí"
                    className="search-btn"
                  />
                </form>
              </div>
              <div className="social d-f" >
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

</>
  )
}

export default WebLayout