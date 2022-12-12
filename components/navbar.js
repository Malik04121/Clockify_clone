function navbar(){
    return `<ul class="navbarLeft">
    <li>
      <a href="./index.html">
        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt="error"
        />
      </a>
    </li>
    <li>
      <a href="./features.html">FEATURES</a>
    </li>
    <li>
      <a href="./download.html">DOWNLOAD</a>
    </li>
  </ul>
  <div class="navbarRight">
    <a href="login.html" id="login">LOG IN</a>
    <a href="./signup.html">
      <button class="signUp">SIGN UP FREE</button>
    </a>
  </div>
  <i class="fa-solid fa-bars " id="mobileMenuOpen" data-open=1 onclick="toggleMenu()"></i>
  <i class="fa-solid fa-xmark" id="mobileMenuClose" data-close=0 onclick="toggleMenu()"></i>`;
};

function mobNavbar(){
  return `<li><a href="./features.html">FEATURES</a></li>
  <li><a href="./download.html">DOWNLOAD</a></li>
  <li><a href="login.html" id="mobLogin">LOG IN</a></li>
  <li onClick="sign()"><button class="mobSignUp">SIGN UP FREE</button></li>`;
};

export  {navbar,mobNavbar}