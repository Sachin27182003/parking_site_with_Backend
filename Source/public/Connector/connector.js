function parseCookies() {
  const cookies = {};
  document.cookie.split(";").forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split("=");
    cookies[name] = rest.join("="); // rejoin in case value has "="
  });
  return cookies;
}

document.addEventListener("DOMContentLoaded", () => {
  const cookies = parseCookies();

  if (!cookies.authToken || cookies.authToken.length <= 20) {
    alert("You are not authorized! Please login first");
    window.location.href = "../homepage/homepage.html";
  }
});

const details = new URLSearchParams(window.location.search);
const vehicleType = details.get("vehicleType");
const name = details.get("name");
const phoneNumber = details.get("mobileNumber");


const alpha_complex = document.getElementById("alpha-complex");
const beta_complex = document.getElementById("beta-complex");

alpha_complex.addEventListener("click", (event) => {
    if(vehicleType === null || name === null || phoneNumber === null) {

        setTimeout(() => {
          window.location.href = `../parkingmap/parkingmap.html?`;
        }, 100);

    } else {
        setTimeout(() => {
            window.location.href = `../parkingmap/parkingmap.html?vehicleType=${vehicleType}&name=${name}&mobileNumber=${phoneNumber}`;
          }, 100);
    }
});


beta_complex.addEventListener("click", (event) => {

    if(vehicleType === null || name === null || phoneNumber === null) {

        setTimeout(() => {
          window.location.href = `../parkingmap/parkingmap2.html?`;
        }, 100);

    } else {
        setTimeout(() => {
            window.location.href = `../parkingmap/parkingmap2.html?vehicleType=${vehicleType}&name=${name}&mobileNumber=${phoneNumber}`;
          }, 100);
    }
 
});
