const btn = document.getElementById('btn');
const users = document.getElementById('users');
const loaderContainer = document.getElementById('loaderContainer');

// function showloader

function showLoader(){
    loaderContainer.style.display = 'block';
}

// function hideloader

function hideLoader(){
    loaderContainer.style.display = 'none';
}

async function getUser() {

    showLoader();

    try{
        let response = await fetch('https://randomuser.me/api/');
        response = await response.json();

        const { name, gender, email, picture } = response.results[0];
            users.innerHTML += `<div id="user" class="bg-slate-700 p-3 rounded-lg">
                <div id="img" class="w-12 h-12 rounded-full bg-gray-400 md:w-16 md:h-16 overflow-hidden">
                <img src = "${picture.large}" alt = 'user'/>
                </div>
                <p class="text-lg font-bold mt-2">${name.first} ${name.last}</p>
                <p class="opacity-70">${gender}</p>
                <p class="italic opacity-80">${email}</p>
            </div>
    `
    }catch(error){
        console.log(error);
    }

    hideLoader();

}

btn.addEventListener('click', () => {
    getUser();
})