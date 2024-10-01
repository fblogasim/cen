
function getGreeting() {
            const date = new Date();
            const hour = date.getHours();

            let greeting;
            if (hour < 12) {
                greeting = "Good morning!";
            } else if (hour < 18) {
                greeting = "Good afternoon!";
            } else {
                greeting = "Good evening!";
            }

            return greeting;
        }

  function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName, fullVersion;

    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
      fullVersion = userAgent.split("Firefox/")[1];
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
      fullVersion = userAgent.split("Chrome/")[1].split(" ")[0];
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
      fullVersion = userAgent.split("Version/")[1].split(" ")[0];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = userAgent.split("rv:")[1] || userAgent.split("MSIE ")[1].split(";")[0];
    } else {
      browserName = "Unknown";
      fullVersion = "N/A";
    }

    return { browserName, fullVersion };
  }

  function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    const deviceType = isMobile ? "Mobile" : "Desktop";
    const platform = navigator.platform;

    let os = "Unknown OS";
    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "macOS";
    else if (userAgent.indexOf("X11") !== -1 || userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) os = "iOS";

    return { deviceType, platform, os };
  }

  function displayInfo() {
    const browserInfo = getBrowserInfo();
    const deviceInfo = getDeviceInfo();

    if (deviceInfo.deviceType === "Mobile" && deviceInfo.os === "Linux"){
      deviceInfo.os = "Android";
    }

    if (deviceInfo.deviceType === "Mobile" && deviceInfo.os === "macOS"){
      deviceInfo.os = "ios";
    }

    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `

    <div class = "info">
    <i><kbd>${getGreeting()}</kbd></i><br>
    <kbd>The time is <b><span id = "time"></span></b></kbd>
    <ul>
    <li>
    <kbd>You are using<b> ${browserInfo.browserName}</b> on a <b> ${deviceInfo.deviceType}</b>
    running <b>${deviceInfo.os}</b>.</kbd>                  
    </li>
    <li>
    <kbd>The font size is <b>22px</b>.</kbd>
    </li>
    <li>
    <kbd>The site uses <b>HTML</b>, <b>CSS</b> and minimal <b>Javascript</b>.</kbd>
    </li>
    </ul>
    `;
  }

  displayInfo();


    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Pad the minutes and seconds with leading zeros if needed
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        const timeString = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
        document.getElementById('time').textContent = timeString;
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately


