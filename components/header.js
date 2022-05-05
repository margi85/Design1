class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        a {
          text-decoration: none;
        }
        
        li {
          list-style: none;
        }
        
          /* NAVBAR STYLING STARTS */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8em 10em ;
          background-color: rgb(254, 255, 255);
          color: rgb(0, 0, 0);
        }
        
        .nav-links a {
          color: rgb(8, 8, 6);
        }
        
           /* LOGO */
        .logo {
          /* font-family: 'Snippet', sans-serif; */
          font-family: 'Fredericka the Great', cursive;
          /* font-family: 'Philosopher', sans-serif; */
          font-size:45px;
          color: #a8a299;
        }
        
           /* NAVBAR MENU */
        .menu {
          display: flex;
          gap: 1em;
          font-size: 18px;
        }
        
        .menu li:hover {
          background-color: #ffffff;
          border-radius: 5px;
          transition: 0.3s ease;
          border-bottom: 2px solid #a8a299;
        }
        
        .menu li {
          padding: 5px 14px;
        }
        
          /* DROPDOWN MENU */
        .services {
          position: relative; 
        }
        
        .dropdown {
            background-color: rgb(255, 255, 255);
            padding: 1em 0;
            position: absolute; /*WITH RESPECT TO PARENT*/
            display: none;
            border-radius: 8px;
            top: 35px;
        }
        
        .dropdown li + li {
            margin-top: 5px;
        }
        
        .dropdown li {
            padding: 0.5em 1em;
            width: 8em;
            text-align: center;
        }
        
        .dropdown li:hover {
            background-color: #ffffff;
            border-bottom: 2px solid #a8a299;
        }
        
        .services:hover .dropdown {
            display: block;
        }
        
        /*RESPONSIVE NAVBAR MENU STARTS*/
        /* CHECKBOX HACK */
        input[type=checkbox]{
            display: none;
           } 
           /*HAMBURGER MENU*/
           .hamburger {
            display: none;
            font-size: 24px;
            user-select: none;
        }

        .active {
          text-decoration-line: underline !important;
          text-decoration-thickness: 2px !important;
          color: rgb(20, 19, 19);
        }

        </style>

        <nav class="navbar">
        <!-- LOGO -->
        <a href="/home">
        <img src="../../images/design 1 logo.jpg" alt="logo" width="140px" height=auto>
          <!-- <div class="logo">DESIGN 1</div> -->
        </a>
        <!-- NAVIGATION MENU -->
        <ul class="nav-links">
          <!-- USING CHECKBOX HACK -->
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <script src="index.js" type="text/javascript" defer></script>
          <!-- NAVIGATION MENUS -->
          <!-- <div class=”menu”>...</div> -->
    
          <div class="menu">
          <!-- <li><a href="/home">HOME</a></li> -->
            <li><a href="about.html">ЗА НАС</a></li>
            <li class="services">
              <a href="/">ПРОДУКТИ <span style="color: Gray;"><i class="fas fa-solid fa-angle-down"></i></span></a>
              <!-- DROPDOWN MENU -->
              <ul class="dropdown">
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="/">ПРОЕКТИ</a></li>
            <li><a href="contacts.html">КОНТАКТИ</a></li>
          </div>
    
        </ul>
      </nav>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 
      <script>
        $(document).ready(function () {
          // Underline to remain in navbar after click using URL
          jQuery(function ($) {
            var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
            $('.nav-links').each(function () {
              if (this.href === path) {
                $(this).addClass('active');
              }
            });
          });
        });
      </script>

      `;
    }
  }
  
  customElements.define('header-component', Header);