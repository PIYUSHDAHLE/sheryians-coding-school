const data= [
  {   "id": 1,
     "image" : "https://is1-3.housingcdn.com/4f2250e8/34f08aabf59bcf0bd8a8ae63d6c5d4ab/v5/fs/universal_greenaly-arera_colony-bhopal-universal_real_build.jpg",
     "plot" :"Appartment",
     "price" : "Rs. 50 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "1000 Sqft",
     "bed" : "3 Bed",
     "bathroom" : "2 Bath"
  },
  {   "id": 2,
     "image" : "https://foyr.com/learn/wp-content/uploads/2019/03/Villa_Mistral-Singapore.jpg",
     "plot" :"Villa",
     "price" : "Rs. 5 Cr.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "1500 Sqft",
     "bed" : "4 Bed",
     "bathroom" : "3 Bath"
  },
  {   "id": 3,
     "image" : "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/a1/62/86.jpg",
     "plot" :"Home",
     "price" : "Rs. 80 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "1200 Sqft",
     "bed" : "3 Bed",
     "bathroom" : "2 Bath"
  },
  {   "id": 4,
     "image" : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
     "plot" :"Appartment",
     "price" : "Rs. 90 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "3000 Sqft",
     "bed" : "4 Bed",
     "bathroom" : "2 Bath"
  },
  {   "id": 5,
     "image" : "https://www.adarshdevelopers.com/blog/wp-content/uploads/2022/08/Banner-Image-6_-Adarsh-Tranqville-Why-Adarsh-Tranqville-is-the-best-choice-for-Villas-for-sale-in-Hennur.jpg",
     "plot" :"Home",
     "price" : "Rs. 70 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "1500 Sqft",
     "bed" : "2 Bed",
     "bathroom" : "1 Bath"
  },
  {   "id": 6,
     "image" : "https://cdn.inchbrick.com/meta/1709547482104_66c8b57e-cead-4325-a241-bc9af281cb81.png?w=3840&q=60",
     "plot" :"Home",
     "price" : "Rs. 90 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "3000 Sqft",
     "bed" : "4 Bed",
     "bathroom" : "2 Bath"
  },
  {   "id": 7,
     "image" : "https://cdn.lecollectionist.com/__collectionist__/production/uploads/photos/house-1910/2018-04-30-214088d759242733859024dd8690041f.jpg?width=2880&q=65",
     "plot" :"Home",
     "price" : "Rs. 90 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "3000 Sqft",
     "bed" : "4 Bed",
     "bathroom" : "2 Bath"
  },
  {   "id": 8,
     "image" : "https://is1-3.housingcdn.com/4f2250e8/718faa720a4c01982c6d10a5e72b3de8/v0/fs/ikya_sai_kuteera_appartment-kanakapura_1-bengaluru-ikya_properties_bangalore.jpeg",
     "plot" :"Appartment",
     "price" : "Rs. 90 lac.",
     "title" : "Golden Urban House For Sell",
     "address" : " 123 Street, Bhopal, M.P. 462026",
     "size": "3000 Sqft",
     "bed" : "4 Bed",
     "bathroom" : "2 Bath"
  }
]

const collection =document.querySelector('main .page3 .collections');
data.forEach(property =>{
    const cards = document.createElement('div');

    cards.innerHTML =`
    <div class="card">
        <img src="${property.image}" alt="">
        <div class="content">
            <div class="line1">
                <h4>${property.plot}</h4> 
                <h5>${property.price}</h5>
            </div>
            <h1>${property.title}</h1>
            <div class="line2">
                <i class="ri-map-pin-2-fill"></i>
                ${property.address}
            </div>

            <div class="line3">
                <div class="mid">
                    <i class="ri-ruler-2-line"></i>
                    <p>${property.size}</p>
                </div>
                <div class="mid">
                    <i class="ri-hotel-bed-fill"></i> 
                    <p>${property.bed}</p>
                </div>
                <div class="mid">
                    <i class="fa">&#xf2cd;</i>
                    <p>${property.bathroom}</p>  
                </div>
            </div>
        </div>
    </div>`

    collection.appendChild(cards);
});