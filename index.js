const outerDivs = document.querySelector(".outerdiv");
            function getcountry() {
                const countryName = document.getElementById("country").value;
                const mainurl = "https://restcountries.eu/rest/v2/name/";
                // console.log(mainurl);
                const url = mainurl.concat(countryName);
                console.log(url);
                // console.log(countryName);
                // return url;
                const request = new XMLHttpRequest();
                request.open('GET', url);
                request.send();
                request.addEventListener('load', function() {
                // console.log(this.responseText);

                //convert JSON to JS object
                const [data] = JSON.parse(this.responseText);

                const htmlData = `<div class="innerdiv">
                <div class="countryName">
                    <h1 class="title">${data.name}</h1>
                </div>
                <div class="flag">
                    <img src="${data.flag}" alt="">
                </div>
                <div class="footer">
                    <div class="capital">
                        <h2>Capital</h2>
                        <h3>${data.capital}</h3>
                    </div>
                    <div class="capital">
                        <h2>Population</h2>
                        <h3>${data.population}</h3>
                    </div>
                    <div class="capital">
                        <h2>Language</h2>
                        <h3>${data.demonym}</h3>
                    </div>
                    <div class="capital">
                        <h2>Native</h2>
                        <h3>${data.nativeName}</h3>
                    </div>
                
                </div>
            </div>`;

            outerDivs.insertAdjacentHTML("afterbegin", htmlData);
                // console.log(data) 
                // console.log(data.capital);
            })


            }
            const refreshtitledata = document.getElementById("refreshdata")
            
            function rerefresh() {
                const htmlrefreshdata = `
                <h3 class="title" style="color:#e6e8e6; "> Enter country</h3>`
                refreshtitledata.insertAdjacentHTML("afterbegin", htmlrefreshdata);
                setTimeout(function(){
                    // window.location.reload(1);
                    location.reload()
                },1000)
                // location.reload();
                
            }
  