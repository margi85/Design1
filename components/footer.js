class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .copyright {
          border-top: 1px dotted #a8a299;
          padding-top: 0.3em;
          text-align: center;
          margin-bottom: 1em;
        }
      
        .footer-info {
          display: grid;
          grid-template-columns: 30% 30% 30%;
          grid-template-rows: auto;
          justify-content: space-evenly;
          justify-items: center;
          align-content: space-evenly;
          align-items: center;
          padding-top: 0.3em;
          padding-bottom: 0.3em;
          line-height: 1.5;
          border-top: 1px dotted #a8a299;
        }
        </style>


        <footer>
        <div class="footer-info">
          <div>
            Булевард Цариградско шосе 139,</br>
            1784 7-ми километър, София
          </div>
          <div>
            <span style="font-size: 1rem;">
              <span style="color: rgb(248, 122, 238);">
                <i class="fas fa-envelope"></i>
              </span>
            </span> customer_care@office1.bg</br>
            <span style="font-size: 1rem;">
              <span style="color: rgb(248, 122, 238);">
                <i class="fas fa-phone"></i>
              </span>
            </span> 02 976-67-54</br>
            <span style="font-size: 1rem;">
              <span style="color: rgb(248, 122, 238);">
                <i class="fas fa-mobile-alt"></i>
              </span>
            </span> 0700-10-700
          </div>
          <div>
            Понеделник: 9–19h<br />
            Вторник: 9–19h<br />
            Сряда: 9–19h<br />
            Четвъртък: 9-19h<br />
            Петък: 9-19h<br />
            Събота: 10-15h<br />
            Неделя: Затворено
          </div>
        </div>
    
        <p class="copyright">Copyright © 2022 Design It</p>
      </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);